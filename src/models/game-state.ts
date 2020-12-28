import { List, Record } from "immutable";
import QuestionRecord from "models/question";

export interface GameState {
  questions: List<QuestionRecord>;
}

const defaultValues: GameState = {
  questions: List(),
};

/**
 * Immutable record representing the game state.
 */
export default class GameStateRecord
  extends Record(defaultValues)
  implements GameState {
  // Do not set properties on immutable records, babel and typescript transpilation issue causes runtime errors
  // See https://github.com/facebook/create-react-app/issues/6506

  constructor(params?: Partial<GameState>) {
    params = Object.assign({}, defaultValues, params ?? {});
    super(params);
  }

  /**
   * Get the number of questions answered correctly
   */
  public numCorrect(): number {
    return this.questions.filter((q: QuestionRecord) => q.isCorrect()).size;
  }

  /**
   * Get the number of questions answered incorrectly.
   */
  public numWrong(): number {
    return this.questions.filter((q: QuestionRecord) => q.isWrong()).size;
  }

  /**
   * Get the number of answered questions.
   */
  public numAnswered(): number {
    return this.questions.filter((q: QuestionRecord) => q.isAnswered()).size;
  }

  /**
   * Get the formatted user score string, i.e. "8 / 10"
   */
  public scoreString(): string {
    return `${this.numCorrect()} / ${this.questions.size}`;
  }

  /**
   * Get the current progress percentage value.
   * @param currentQuestionIndex 0-based list index of current question
   */
  public progressPercent(currentQuestionIndex: number): number {
    return ((currentQuestionIndex + 1) / this.questions.size) * 100;
  }

  /**
   * Get the current progress formatted as a string.
   * @param currentQuestionIndex 0-based list index of current question
   */
  public formatProgressText(currentQuestionIndex: number): string {
    return `${currentQuestionIndex + 1} / ${this.questions.size}`;
  }

  /**
   * Return a new version of the record with some mutations applied.
   * @param values new values to apply to the record
   */
  public with(values?: Partial<GameState>): GameStateRecord {
    if (values == null) {
      return new GameStateRecord(this.toJS());
    }

    return new GameStateRecord(Object.assign(this.toJS(), values));
  }
}
