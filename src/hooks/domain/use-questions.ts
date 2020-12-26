import useCancellableListService from "hooks/utilities/use-cancellable-list-service";
import { List } from "immutable";
import QuestionRecord from "models/question";
import { useEffect, useState } from "react";
import QuestionService, { QuestionQueryParams } from "services/questions/question-service";

export default function useQuestions(queryParams?: QuestionQueryParams) {
    const listQuestions = useCancellableListService(QuestionService.list());

    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<List<QuestionRecord>>(List());

    useEffect(() => {
        if (loading) {
            return;
        }

        (async () => {
            setLoading(true);
            try {
                const result = await listQuestions();
                setQuestions(result);
            } catch (e) {
                // TODO handle error
            }
        })();
    }, [listQuestions, loading]);

    return {
        loading,
        questions,
    };
};
