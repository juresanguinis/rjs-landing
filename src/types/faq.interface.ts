export interface IFAQs {
  category: string,
  questions: IFAQQuestion[]
}

interface IFAQQuestion {
  question: string;
  answer: string
}