"use client";

import { useState } from "react";
// ※ contents.ts の配置場所に合わせてパスを調整してください
import { quizData } from "./contents"; 

export default function QuizApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  // ジャンプ機能用の状態（入力された数字を保持）
  const [jumpInput, setJumpInput] = useState("");

  const currentQ = quizData[currentIndex];
  // 答えの文字数で「単一選択」か「複数選択」かを判定
  const isMultiSelect = currentQ.answer.length > 1;

  // 選択肢をクリックした時の処理
  const handleSelect = (letter: string) => {
    if (showResult) return; // 結果表示中は変更不可

    if (isMultiSelect) {
      // 複数選択の場合：既に選ばれていたら外し、選ばれていなければ追加
      setSelectedLetters((prev) =>
        prev.includes(letter)
          ? prev.filter((l) => l !== letter)
          : [...prev, letter]
      );
    } else {
      // 単一選択の場合：そのままセット
      setSelectedLetters([letter]);
    }
  };

  // 「解答する」ボタンの処理
  const handleCheckAnswer = () => {
    if (selectedLetters.length === 0) return;

    // ユーザーの回答と正解をアルファベット順にソートして比較
    const userAnswer = selectedLetters.sort().join("");
    const correctAnswer = currentQ.answer.split("").sort().join("");
    
    setIsCorrect(userAnswer === correctAnswer);
    setShowResult(true);
  };

  // 「Next」ボタンの処理
  const handleNext = () => {
    if (currentIndex < quizData.length - 1) {
      setSelectedLetters([]);
      setShowResult(false);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // 指定した問題番号へジャンプする処理
  const handleJump = (e: React.FormEvent) => {
    e.preventDefault(); // フォーム送信時のページリロードを防ぐ
    const targetNum = parseInt(jumpInput, 10);
    
    // 入力値が正しい範囲内かチェック（1 ～ 問題の総数）
    if (!isNaN(targetNum) && targetNum >= 1 && targetNum <= quizData.length) {
      // idは1から始まるが、配列のインデックスは0から始まるので -1 する
      const targetIndex = quizData.findIndex(q => q.id === targetNum);
      if (targetIndex !== -1) {
        setCurrentIndex(targetIndex);
        setSelectedLetters([]);
        setShowResult(false);
        setJumpInput(""); // 入力欄をクリア
      }
    } else {
      alert(`1から${quizData.length}までの数字を入力してください。`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        
        {/* ヘッダー：進捗と問題番号 */}
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
              {/* ジャンプ機能の入力フォーム */}
              <form onSubmit={handleJump} className="flex items-center space-x-2">
                <input
                  type="number"
                  min={1}
                  max={quizData.length}
                  value={jumpInput}
                  onChange={(e) => setJumpInput(e.target.value)}
                  placeholder="番号"
                  className="border border-gray-300 rounded px-2 py-1 w-20 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded transition-colors font-medium border border-gray-200"
                >
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
            <span key={i}>
              {line}
              <br />
            </span>
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
                bgColor = "bg-green-50";
                borderColor = "border-green-500";
              } else if (isSelected && !isActuallyCorrect) {
                bgColor = "bg-red-50";
                borderColor = "border-red-500";
              }
            }

            return (
              <button
                key={choice.letter}
                onClick={() => handleSelect(choice.letter)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center ${bgColor} ${borderColor}`}
              >
                <span className="font-bold mr-4 text-gray-700">
                  {choice.letter}.
                </span>
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
              <img
                key={idx}
                src={img.url}
                alt={`参考画像 ${idx + 1}`}
                className="max-w-full h-auto border rounded shadow-sm"
              />
            ))}
          </div>
        )}

        {/* アクションボタン ＆ 結果表示 */}
        <div className="mt-6">
          {!showResult ? (
            <div className="flex justify-end">
              <button
                onClick={handleCheckAnswer}
                disabled={selectedLetters.length === 0}
                className="bg-blue-600 text-white font-bold py-2 px-8 rounded hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                解答する
              </button>
            </div>
          ) : (
            <div className={`p-6 rounded-lg border-l-4 ${isCorrect ? "bg-green-50 border-green-500" : "bg-red-50 border-red-500"}`}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                    {isCorrect ? "〇 正解！" : "× 不正解"}
                  </h3>
                  <p className="text-gray-700 font-medium">
                    正解は <span className="font-bold text-lg">{currentQ.answer}</span> です。
                  </p>
                </div>
                <button
                  onClick={handleNext}
                  className="bg-blue-600 text-white font-bold py-2 px-8 rounded hover:bg-blue-700 transition-colors"
                >
                  Next ➡
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}