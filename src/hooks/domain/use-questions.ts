import useCancellableListService from "hooks/utilities/use-cancellable-list-service";
import { List } from "immutable";
import QuestionRecord from "models/question";
import { useCallback, useEffect, useState } from "react";
import QuestionService from "services/questions/question-service";
import { EnvUtils } from "utilities/env-utils";

export default function useQuestions(onError?: (error: any) => void) {
  const listQuestions = useCancellableListService(QuestionService.list());

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<List<QuestionRecord>>(List());

  const handleError = useCallback((e: any) => onError?.(e), [onError]);

  useEffect(() => {
    if (loading || questions.size > 0) {
      return;
    }

    (async () => {
      setLoading(true);
      try {
        const result = await listQuestions();
        setQuestions(result);
      } catch (e) {
        handleError(e);
        EnvUtils.logIfDevelopment(e, "error");
      }
      setLoading(false);
    })();
  }, [listQuestions, handleError, loading, questions]);

  return {
    loading,
    questions,
  };
}
