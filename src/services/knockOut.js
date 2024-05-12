import Questions from '../server/knockOut/questions';

const randomizeQuestions = (questions) => {
  let currentIndex = questions.length;
  let randomIndex, tempValue;

  while (currentIndex !== 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Intercambia el elemento seleccionado con el último elemento sin procesar
    tempValue = questions[currentIndex];
    questions[currentIndex] = questions[randomIndex];
    questions[randomIndex] = tempValue;
  }

  return questions;
}

export const getQuestions = (levels) => {
  let questions = []

  if (levels.includes('1')) {
    console.log('test')
    questions = questions.concat(Questions.easy)
  }

  if (levels.includes('2')) {
    questions = questions.concat(Questions.medium)
  }

  if (levels.includes('3')) {
    questions = questions.concat(Questions.hard)
  }

  return randomizeQuestions(questions);
};
