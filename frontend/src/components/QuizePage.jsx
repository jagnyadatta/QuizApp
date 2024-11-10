import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const QuizePage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const totalQuestions = 20;
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctOption: "Paris",
    },
    {
      question: "What is the capital of Germany?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctOption: "Berlin",
    },
  ];

  const handleOptionSelect = (option) => {
    if (option === questions[currentQuestion - 1].correctOption) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Question & Options Section */}
            <div className="col-span-2 border p-6 rounded-lg shadow-lg space-y-6">
              {/* Question */}
              <h2 className="text-xl font-semibold mb-4">
                Question {currentQuestion}:{" "}
                {questions[currentQuestion - 1]?.question}
              </h2>

              {/* Options */}
              <div className="grid gap-4">
                {questions[currentQuestion - 1]?.options.map(
                  (option, index) => (
                    <button
                      key={index}
                      className="w-full p-2 border rounded hover:bg-blue-100"
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </button>
                  )
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-6">
                <button
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  onClick={handlePrevQuestion}
                  disabled={currentQuestion === 1}
                >
                  Previous Question
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={handleNextQuestion}
                  disabled={currentQuestion === totalQuestions}
                >
                  Next Question
                </button>
              </div>
            </div>

            {/* Info and Question Tracker Section */}
            <div className="border p-6 rounded-lg shadow-lg space-y-6">
              {/* Question and Score Info */}
              <div className="border-b pb-4">
                <p className="text-lg font-semibold">
                  Attempted: {currentQuestion} / {totalQuestions}
                </p>
                <p className="text-lg font-semibold mt-2">
                  Current Score: {score}
                </p>
              </div>

              {/* Question Tracker */}
              <div className="grid grid-cols-5 gap-2 mt-6">
                {Array.from({ length: totalQuestions }, (_, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded text-center border ${
                      index + 1 === currentQuestion
                        ? "bg-yellow-300"
                        : "bg-gray-100"
                    }`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>

              {/* Submit Button */}
              <button className="w-full mt-6 p-2 bg-green-500 text-white rounded hover:bg-green-600">
                Submit Quiz
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default QuizePage;
