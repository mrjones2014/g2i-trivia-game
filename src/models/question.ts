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

export default class QuestionRecord extends Record(defaultValues) implements Question {
    // Do not set properties on immutable records, babel and typescript transpilation issue causes runtime errors
    // See https://github.com/facebook/create-react-app/issues/6506

    constructor(params?: Partial<Question>) {
        params = Object.assign({}, defaultValues, params ?? {});
        super(params);
    }

    public with(values?: Partial<Question>): QuestionRecord {
        if (values == null) {
            return new QuestionRecord(this.toJS());
        }

        return new QuestionRecord(Object.assign(this.toJS(), values));
    }
}
