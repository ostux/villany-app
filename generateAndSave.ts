import { generateAllQuestions } from './src/generateQuestions';
import { writeFileSync } from 'fs';

const questions = generateAllQuestions();

const fileContent = `// Auto-generated quiz questions - ${questions.length}+ questions
// Generated automatically to prevent memorization

export interface QuizQuestion {
  id: string;
  topic: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  requiresCalculation?: boolean;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = ${JSON.stringify(questions, null, 2)};

export const QUESTION_COUNT = QUIZ_QUESTIONS.length;
export const QUESTIONS_BY_TOPIC = QUIZ_QUESTIONS.reduce((acc, q) => {
  acc[q.topic] = (acc[q.topic] || 0) + 1;
  return acc;
}, {} as Record<string, number>);
`;

writeFileSync('./src/quizData.ts', fileContent, 'utf-8');
console.log(`✓ Generated ${questions.length} questions and saved to src/quizData.ts`);
