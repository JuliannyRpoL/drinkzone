import Questions from '../server/hipodromo/questions';
import { randomizeArray } from '../utils/formatData';

const transformQuestions = (questions, category) => {
  return questions.map((question) => {
    return {
      question,
      category,
    }
  })
}

export const getQuestions = () => {
  const { math, sports, entertainment, geography, vs } = Questions;

  const newMath = transformQuestions(math, 'Matemáticas');
  const newSports = transformQuestions(sports, 'Deportes');
  const newEntertaiments = transformQuestions(entertainment, 'Entretenimiento');
  const newGeography = transformQuestions(geography, 'Geografía');
  const newVS = transformQuestions(vs, 'Reto Físico');

  const allQuestions = [ ...newEntertaiments, ...newGeography, ...newMath, ...newSports, ...newVS];

  return randomizeArray(allQuestions);
}
