import { QuizApp } from './main.js';

const questions = [
    {
      question: "What is a group of crows called?",
      answers: [
        { text: "A flock", correct: false },
        { text: "A murder", correct: true },
        { text: "A herd", correct: false },
        { text: "A pack", correct: false },
      ],
    },
    {
      question: "Which is largest animal in the world?",
      answers: [
        { text: "Shark", correct: true },
        { text: "Blue whale", correct: false },
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false },
      ],
    },
    {
      question: "Which is largest animal in the world?",
      answers: [
        { text: "Shark", correct: false },
        { text: "Blue whale", correct: false },
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: true },
      ],
    },
    {
      question: "Which is largest animal in the world?",
      answers: [
        { text: "Shark", correct: false },
        { text: "Blue whale", correct: false },
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: true },
      ],
    },
    {
      question: "Which is largest animal in the world?",
      answers: [
        { text: "Shark", correct: true },
        { text: "Blue whale", correct: false },
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false },
      ],
    },
  ];

const quizApp = new QuizApp(questions);
