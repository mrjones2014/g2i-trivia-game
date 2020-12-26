import QuestionRecord from "models/question";
import ServiceFactory, { ListService } from "services/service-factory";

export interface QuestionQueryParams {
    amount?: number;
    difficulty?: string;
    type?: string;
}

const DEFAULT_QUERY: QuestionQueryParams = {
    amount: 10,
    difficulty: "hard",
    type: "boolean",
};

const API_URL = "https://opentdb.com/api.php";

export default class QuestionService {
    public static list(): ListService<QuestionRecord, QuestionQueryParams> {
        return ServiceFactory.list<QuestionRecord, QuestionQueryParams>(QuestionRecord, API_URL, DEFAULT_QUERY);
    }
}
