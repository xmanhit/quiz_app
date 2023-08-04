import React from 'react'

import { ACTIONS } from '../../config'
import { secondsToHHMMSS } from '../../utils'
import CountdownTimer from '../../components/CountdownTimer'

const InGame = ({
  dispatch,
  questions,
  currentQuestionIndex,
  isReview,
  isPlaying,
  seconds,
}) => {
  const { id, question_content, answers, userAnswer } =
    questions[currentQuestionIndex]
  const questionNumber = currentQuestionIndex + 1
  const totalQuestions = questions.length
  const isFirstQuestion = currentQuestionIndex === 0
  const isLastQuestion = currentQuestionIndex === questions.length - 1

  return (
    <div className="min-h-screen bg-indigo-300">
      <div className="flex flex-col justify-between items-center container mx-auto pt-12">
        <div className="flex justify-center items-center gap-4">
          <button
            className={
              isFirstQuestion
                ? 'flex items-center justify-center py-3 px-6 text-lg font-bold  rounded-lg shadow-md disabled:bg-gray-200 text-white w-32'
                : 'flex items-center justify-center py-3 px-6 text-lg font-bold  rounded-lg shadow-md bg-gray-500 hover:bg-gray-300 text-white w-32'
            }
            disabled={isFirstQuestion}
            onClick={() => {
              dispatch({
                type: 'NavigateQuestion',
                index: currentQuestionIndex - 1,
              })
            }}
          >
            Previous
          </button>
          <button
            className={
              isLastQuestion
                ? 'flex items-center justify-center py-3 px-6 text-lg font-bold  rounded-lg shadow-md w-32 bg-gray-200 hover:bg-gray-200 text-gray-300'
                : 'flex items-center justify-center py-3 px-6 text-lg font-bold  rounded-lg shadow-md bg-green-300 hover:bg-green-500 hover:text-white w-32'
            }
            disabled={isLastQuestion}
            onClick={() => {
              dispatch({
                type: 'NavigateQuestion',
                index: currentQuestionIndex + 1,
              })
            }}
          >
            Next
          </button>
          <button
            className="flex items-center 
          justify-center py-3 px-6 text-lg 
          font-bold rounded-lg
          shadow-md bg-yellow-500 hover:bg-yellow-400 text-white w-32"
            style={{
              display: !isLastQuestion || isReview ? 'none' : '',
            }}
            onClick={() => {
              if (window.confirm('Do you want to submit answers ?')) {
                let score = 0
                questions.forEach(({ answers, userAnswer }) => {
                  if (answers[userAnswer]?.correct) {
                    score++
                  }
                })

                dispatch({
                  type: 'EndGame',
                  pageName: ACTIONS.END_GAME,
                  score,
                  isPlaying: false,
                })
              }
            }}
          >
            Submit
          </button>
          <button
            className="flex items-center 
			justify-center py-3 px-6 text-lg 
			font-bold  rounded-lg
			shadow-md bg-yellow-500 hover:bg-yellow-400 text-white w-32"
            style={{
              display: isReview ? '' : 'none',
            }}
            onClick={() => {
              window.location.reload()
            }}
          >
            Restart
          </button>
        </div>
        <div>
          <div
            className="rounded-md shadow-md relative pt-16 px-4 mt-16 mb-10 bg-white text-indigo-700 mx-auto"
            style={{
              width: '45rem',
              height: '14rem',
            }}
          >
            <div
              className="absolute -top-1/3 left-1/2 transform translate-y-1/2 -translate-x-1/2 shadow-lg rounded-full"
              style={{
                width: '5rem',
                height: '5rem',
              }}
            >
              <CountdownTimer
                questions={questions}
                dispatch={dispatch}
                seconds={seconds}
                size={77}
                strokeBgColor="white"
                strokeColor="rgb(79, 70, 229)"
                strokeWidth={8}
                isPlaying={isPlaying}
                isReview={isReview}
              />
            </div>
            <div className="flex items-center justify-between text-lg font-medium mb-8">
              <p className="text-center w-full">
                Question &nbsp;
                <span className="font-extrabold">{questionNumber}</span>/
                {totalQuestions}
              </p>
            </div>
            <div className="text-center font-bold text-xl text-black">
              <p>{question_content}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          {answers.map(({ answer_content, correct }, index) => (
            <div key={index} className="col-span-12">
              <div
                className={
                  isReview && userAnswer === index && !correct
                    ? 'rounded-md flex items-center shadow-md my-3 px-4 cursor-pointer duration-50 bg-white mx-auto border-2 bg-red-500 text-white'
                    : isReview && correct
                    ? 'rounded-md flex items-center shadow-md my-3 px-4 cursor-pointer duration-50 bg-white mx-auto border-2 bg-green-500 text-white'
                    : isReview
                    ? 'rounded-md flex items-center shadow-md my-3 px-4 cursor-pointer duration-50 bg-white mx-auto border-2'
                    : userAnswer === index
                    ? 'rounded-md flex items-center shadow-md my-3 px-4 cursor-pointer duration-50 bg-white mx-auto border-2 hover:bg-indigo-900 hover:text-white bg-indigo-900 text-white'
                    : 'rounded-md flex items-center shadow-md my-3 px-4 cursor-pointer duration-50 bg-white mx-auto border-2 hover:bg-indigo-900 hover:text-white'
                }
                style={{ width: '40rem', height: '4rem' }}
                onClick={() => {
                  if (isReview) return

                  dispatch({
                    type: 'ChooseAnswer',
                    answer: index,
                  })
                }}
              >
                <p className="text-lg font-medium">
                  {index + 1}) {answer_content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InGame
