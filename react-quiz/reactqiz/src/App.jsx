import React, { useState } from "react";
// import { Quiz } from "./components/Quiz";
import "./styles.css";
import {useForm} from "react-hook-form"

export const App = () => {
  const {register,handleSubmit,reset} = useForm()

  const QUIZ = [
    {
      question: "日本の四季の正しい順番を答えて!",
      correct: ["春", "夏", "秋", "冬"],
    },
    {
      question: "正しい円周率を答えて！",
      correct: ["3.14"],
    },
    {
      question: "ジャンケンで相手がパーを出した時、こっちが勝てる手は?",
      correct: ["チョキ"],
    },
  ];
  let num = 0;
  const [questionTitle, setQuestionTitle] = useState(QUIZ[num].question);
  const [correct, setCorrect] = useState(QUIZ[num].correct);
  const onClickAdd = (data) => {
  QUIZ[num].correct.forEach(element => {
      const a= data.text.match(element)
      console.log(a)
    });
    // if (data.text.match()) {
    //   correct = true;
    // }

    if (correct) {
      alert("正解");
      num++;
      setQuestionTitle(QUIZ[num].question);
      setCorrect(QUIZ[num].correct);
    }
    if (answerText === "") {
      alert("入力してください");
    } else if (!correct) {
      alert("不正解...");
    }

    reset()

  };

  return (
    <>
      <div className="question-area">
        <p className="title">{questionTitle}</p>
      </div>

      <div className="answer-area">
        <form onSubmit={handleSubmit(onClickAdd)}>
        <input
          placeholder="解答を入力する"
          className="text"
          name="text"
          ref={register}
          />
        <button>解答する</button>
        </form>
      </div>
    </>
  );
};
