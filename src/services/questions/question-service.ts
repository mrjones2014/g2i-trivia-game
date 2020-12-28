import QuestionRecord from "models/question";
import ServiceFactory, { ListService } from "services/service-factory";

export type QuestionDifficulty = "easy" | "medium" | "hard";
export type QuestionType = "boolean" | "multiple";

export interface QuestionQueryParams {
  amount?: number;
  difficulty?: QuestionDifficulty;
  type?: QuestionType;
}

const API_URL = "https://opentdb.com/api.php";

const DEFAULT_QUERY: QuestionQueryParams = {
  amount: 10,
  difficulty: "hard",
  type: "boolean",
};

export default class QuestionService {
  public static list(): ListService<QuestionRecord, QuestionQueryParams> {
    return ServiceFactory.list<QuestionRecord, QuestionQueryParams>(
      QuestionRecord,
      API_URL,
      DEFAULT_QUERY
    );
  }
}
