import { Record } from "immutable";

export interface Question {
  category: string;
  correctAnswer: boolean;
  question: string;
  userAnswer?: boolean;
}

const defaultValues: Question = {
  category: "",
  correctAnswer: true,
  question: "",
  userAnswer: undefined,
};

/**
 * Immutable record representing a question in the trivia game.
 */
export default class QuestionRecord
  extends Record(defaultValues)
  implements Question {
  // Do not set properties on immutable records, babel and typescript transpilation issue causes runtime errors
  // See https://github.com/facebook/create-react-app/issues/6506

  constructor(params?: Partial<Question>) {
    params = Object.assign({}, defaultValues, params ?? {});
    // convert strings from API to boolean types
    if (
      params.correctAnswer != null &&
      typeof params.correctAnswer === "string"
    ) {
      params.correctAnswer =
        (params.correctAnswer as string).toLowerCase() === "true";
    }
    super(params);
  }

  /**
   * Determine if the user answered the question correctly.
   */
  public isCorrect(): boolean {
    return this.userAnswer === this.correctAnswer;
  }

  /**
   * Determine if the user answere the question incorrectly.
   */
  public isWrong(): boolean {
    return !this.isCorrect();
  }

  /**
   * Determine if the user has answered the question.
   */
  public isAnswered(): boolean {
    return this.userAnswer != null;
  }

  /**
   * Return a new version of the record with some mutations applied.
   * @param values new values to apply to the record
   */
  public with(values?: Partial<Question>): QuestionRecord {
    if (values == null) {
      return new QuestionRecord(this.toJS());
    }

    return new QuestionRecord(Object.assign(this.toJS(), values));
  }
}
