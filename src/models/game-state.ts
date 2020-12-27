import { List, Record } from "immutable";
import QuestionRecord from "models/question";

export interface GameState {
  questions: List<QuestionRecord>;
}

const defaultValues: GameState = {
  questions: List(),
};

export default class GameStateRecord
  extends Record(defaultValues)
  implements GameState {
  constructor(params?: Partial<GameState>) {
    params = Object.assign({}, defaultValues, params ?? {});
    super(params);
  }

  public numCorrect(): number {
    return this.questions.filter(
      (q: QuestionRecord) => q.userAnswer === q.correctAnswer
    ).size;
  }

  public numWrong(): number {
    return this.questions.filter(
      (q: QuestionRecord) =>
        q.userAnswer != null && q.userAnswer !== q.correctAnswer
    ).size;
  }

  public scorePercent(): number {
    return (this.numCorrect() / this.questions.size) * 100;
  }

  public with(values?: Partial<GameState>): GameStateRecord {
    if (values == null) {
      return new GameStateRecord(this.toJS());
    }

    return new GameStateRecord(Object.assign(this.toJS(), values));
  }
}
