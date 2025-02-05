"use client"
import { useState } from "react";
import Image from "next/image";
import fotinho1 from "../../../public/foto2.jpg";
import fotinho2 from "../../../public/foto3.jpg";
import fotinho3 from "../../../public/foto4.jpg";
import fotinho4 from "../../../public/foto5.jpg";
import fotinho5 from "../../../public/foto6.jpg";
// import fotinho6 from "../../../public/foto7.jpg";

import fotinho0_5 from "../../../public/foto0-5.png";
import fotinho1_5 from "../../../public/foto1-5.jpg";
import fotinho2_5 from "../../../public/foto2-5.jpg";
import fotinho3_5 from "../../../public/foto3-5.jpg";
import fotinho4_5 from "../../../public/foto4-5.jpg";
import fotinho5_5 from "../../../public/foto5-5.jpg";

import { Polaroid } from "@/components/polaroid";
import router, { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";

export default function Quiz() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const router = useRouter();

  const questions = [
    { question: "Qual é o nosso dia?", answers: ["08/02", "05/02", "27/09"], correctAnswer: "05/02" },
    { question: "Onde foi nosso primeiro beijo?", answers: ["Clube Bosch", "Carro", "Parque Barigui"], correctAnswer: "Clube Bosch" },
    { question: "Para onde foi nossa primeira viagem?", answers: ["Praia", "São Paulo", "Morretes"], correctAnswer: "Morretes" },
    { question: "Quais são nossos apelidos?", answers: ["Xuxu e Xuxua", "Lontrinha e Nerdzinho", "Abacaxi e Melzinho"], correctAnswer: "Lontrinha e Nerdzinho" },
    { question: "Qual foi o primeiro jogo que a gente zerou?", answers: ["Detroid: Become Human", "It takes two", "Overcooked 2"], correctAnswer: "Overcooked 2" },
  ];

  const images = [fotinho1, fotinho2, fotinho3, fotinho4, fotinho5];
  const texts = ["Aiai se você não souber essa hein", "Foi tão bom...(Sqn) Ainda bem que a gente melhorou né? ^3^", "Foi tão fofo, saudades (^///^)", "Te representa bem o seu apelido", "O jogo do caos, mas a gente é mt foda ^o^"];
  const finalImages = [fotinho0_5, fotinho1_5, fotinho2_5, fotinho3_5, fotinho4_5, fotinho5_5];
  const finalTexts = ["EU VOU EMBORA, VOCÊ ME ODEIAAAAA!","COMO ASSIM?! VOCÊ NÃO ME AMA?", "Fez de propósito, não é possível!", "Ta maomeno né, joga dnv ai!", "Acho que você leu alguma errado!", "PARABÉNS MOMOI, MERECE BESINHO!"];

  const handleAnswerClick = (answer: string) => {
    if (answer === questions[questionIndex].correctAnswer) {
      setCorrectAnswers(prev => prev + 1);
    }
    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  if (questionIndex >= questions.length) {
    return (
      <>
        <div className="bg-[url('/hearts.gif')] bg-no-repeat bg-cover bg-center h-screen flex items-center justify-center md:p-2 p-2">
          <div className="bg-background flex items-center gap-8 justify-center p-1 py-10 rounded-md flex-col-reverse w-96 shadow-2xl">
            <div className="bg-pink p-2 rounded flex flex-col max-w-80">
              <h2 className="text-font text-center font-semibold">Você acertou {correctAnswers} de {questions.length} perguntas!</h2>
              <button onClick={() => router.push('/')} className="bg-button text-font shadow-lg hover:bg-buttonHover transition-colors duration-300 rounded">Voltar</button>
            </div>
            <div>
                {correctAnswers == 0 ? (<Polaroid image={finalImages[0]} text={finalTexts[correctAnswers - 1]} />) : <Polaroid image={finalImages[correctAnswers - 1]} text={finalTexts[correctAnswers - 1]} />}
              
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-[url('/hearts.gif')] bg-no-repeat bg-cover bg-center h-screen flex items-center justify-center md:p-2 p-2">
        <div className="bg-background flex items-center gap-8 justify-center p-1 py-10 rounded-md flex-col-reverse w-96 shadow-2xl">
          <div className="bg-pink w-72 p-2 rounded flex flex-col gap-2">
            <h1 className="text-font text-center font-semibold">{questions[questionIndex].question}</h1>
            {questions[questionIndex].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(answer)}
                className="bg-button text-font shadow-lg hover:bg-buttonHover transition-colors duration-300 rounded"
              >
                {answer}
              </button>
            ))}
          </div>
          <div>
            <Polaroid image={images[questionIndex]} text={texts[questionIndex]} />
          </div>
        </div>
      </div>
    </>
  );
}
