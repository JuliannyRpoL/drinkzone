import Questions from '../server/knockOut/questions';
import { randomizeArray } from '../utils/formatData'

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

  return randomizeArray(questions);
};
