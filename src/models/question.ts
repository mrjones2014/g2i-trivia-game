import { Record } from "immutable";

export interface Question {
    category: string;
    correctAnswer: boolean;
    question: string;
}

const defaultValues: Question = {
    category: "",
    correctAnswer: true,
    question: "",
};

export default class QuestionRecord extends Record(defaultValues) implements Question {
    // Do not set properties on immutable records, babel and typescript transpilation issue causes runtime errors
    // See https://github.com/facebook/create-react-app/issues/6506

    constructor(params?: Partial<Question>) {
        params = Object.assign({}, defaultValues, params ?? {});
        super(params);
    }
}
