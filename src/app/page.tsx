"use client";

import { useState } from "react";
// ※ contents.ts の配置場所に合わせてパスを調整してください
import { quizData } from "./contents"; 

export default function QuizApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [jumpInput, setJumpInput] = useState("");

  const currentQ = quizData[currentIndex];
  const isMultiSelect = currentQ.answer.length > 1;

  // 状態をリセットする共通関数
  const resetState = () => {
    setSelectedLetters([]);
    setShowResult(false);
    setIsCorrect(false);
  };

  const handleSelect = (letter: string) => {
    if (showResult) return;
    if (isMultiSelect) {
      setSelectedLetters((prev) =>
        prev.includes(letter) ? prev.filter((l) => l !== letter) : [...prev, letter]
      );
    } else {
      setSelectedLetters([letter]);
    }
  };

  const handleCheckAnswer = () => {
    if (selectedLetters.length === 0) return;
    const userAnswer = selectedLetters.sort().join("");
    const correctAnswer = currentQ.answer.split("").sort().join("");
    setIsCorrect(userAnswer === correctAnswer);
    setShowResult(true);
  };

  // 次へ：回答していなくても移動可能
  const handleNext = () => {
    if (currentIndex < quizData.length - 1) {
      resetState();
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // 前へ：戻る機能も追加
  const handlePrev = () => {
    if (currentIndex > 0) {
      resetState();
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleJump = (e: React.FormEvent) => {
    e.preventDefault();
    const targetNum = parseInt(jumpInput, 10);
    const targetIndex = quizData.findIndex(q => q.id === targetNum);
    if (targetIndex !== -1) {
      resetState();
      setCurrentIndex(targetIndex);
      setJumpInput("");
    } else {
      alert(`1から${quizData.length}までの正しい番号を入力してください。`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        
        {/* ヘッダー */}
        <div className="flex justify-between items-start mb-6 border-b pb-4">
          <div className="flex items-center space-x-4">
            <div className="border-2 border-gray-200 rounded-lg p-3 text-center min-w-[80px]">
              <div className="text-xs text-gray-500 mb-1">問題番号</div>
              <div className="text-2xl font-bold">{currentQ.id}</div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <div className="text-sm text-gray-500 font-medium">
                進捗: {currentIndex + 1} / {quizData.length}
              </div>
              <form onSubmit={handleJump} className="flex items-center space-x-2">
                <input
                  type="number"
                  value={jumpInput}
                  onChange={(e) => setJumpInput(e.target.value)}
                  placeholder="番号"
                  className="border border-gray-300 rounded px-2 py-1 w-20 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button type="submit" className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded transition-colors border border-gray-200">
                  ジャンプ
                </button>
              </form>
            </div>
          </div>
          
          {isMultiSelect && (
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mt-2">
              複数選択 ({currentQ.answer.length}つ)
            </span>
          )}
        </div>

        {/* 問題文 */}
        <div className="text-lg text-gray-800 mb-8 leading-relaxed">
          {currentQ.question.split("\n").map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </div>

        {/* 選択肢 */}
        <div className="space-y-3 mb-8">
          {currentQ.choices.map((choice) => {
            const isSelected = selectedLetters.includes(choice.letter);
            let bgColor = "bg-white hover:bg-gray-50";
            let borderColor = isSelected ? "border-blue-500" : "border-gray-300";

            if (showResult) {
              const isActuallyCorrect = currentQ.answer.includes(choice.letter);
              if (isActuallyCorrect) {
                bgColor = "bg-green-50"; borderColor = "border-green-500";
              } else if (isSelected && !isActuallyCorrect) {
                bgColor = "bg-red-50"; borderColor = "border-red-500";
              }
            }

            return (
              <button
                key={choice.letter}
                onClick={() => handleSelect(choice.letter)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center ${bgColor} ${borderColor}`}
              >
                <span className="font-bold mr-4 text-gray-700">{choice.letter}.</span>
                <span className="text-gray-800">{choice.text}</span>
              </button>
            );
          })}
        </div>

        {/* 画像エリア */}
        {currentQ.images && currentQ.images.length > 0 && (
          <div className="mb-8 space-y-4">
            <p className="text-sm font-bold text-gray-500">【参考画像】</p>
            {currentQ.images.map((img, idx) => (
              <img key={idx} src={img.url} alt={`参考画像 ${idx + 1}`} className="max-w-full h-auto border rounded shadow-sm" />
            ))}
          </div>
        )}

        {/* ナビゲーションボタンエリア */}
        <div className="mt-8 pt-6 border-t">
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-6 py-2 border-2 border-gray-300 rounded-lg font-bold text-gray-600 hover:bg-gray-100 disabled:opacity-30 transition-all"
            >
              ← Back
            </button>

            {!showResult ? (
              <button
                onClick={handleCheckAnswer}
                disabled={selectedLetters.length === 0}
                className="flex-1 max-w-xs bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 disabled:opacity-50 shadow-lg transition-all"
              >
                解答する
              </button>
            ) : (
              <div className="flex-1 max-w-xs text-center">
                <div className={`text-xl font-bold ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                  {isCorrect ? "〇 正解！" : `× 正解は ${currentQ.answer}`}
                </div>
              </div>
            )}

            <button
              onClick={handleNext}
              disabled={currentIndex === quizData.length - 1}
              className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-50 disabled:opacity-30 transition-all"
            >
              Next →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}