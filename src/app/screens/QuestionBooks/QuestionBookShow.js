import { Link } from "@reach/router";
import { useState } from "react";
import { useQuestionBook } from "../../../hooks/useQuestionBooks";
import { useTimer } from "../../../hooks/useTimer";
import { useContextResponse } from "../../providers";
import { AnswerText } from "../../../components/AnswerText";

export const QuestionBookShow = ({ id, setResponse }) => {
  const { setResponses, setFinalTime } = useContextResponse();
  const { questionBook, loading } = useQuestionBook(id);
  const time = useTimer();
  const [index, setIndex] = useState(0);
  const [localResponse, setLocalResponse] = useState([]);

  const totalQuestion = questionBook.answers ? questionBook.answers.length - 1 : 0;

  const handleResponse = (event) => {
    const newResponse = [...localResponse];
    newResponse[index] = event.target.value;
    setLocalResponse(newResponse);
    setResponses(newResponse);
  };

  const nextQuestion = () => {
    if (index !== totalQuestion) {
      setIndex(index + 1);
    }
  };

  const previousQuestion = () => {
    if (index !== 0) {
      setIndex(index - 1);
    }
  };

  const handleTime = () => {
    setFinalTime(time);
  };

  if (loading) return <h1>Carregando...</h1>;

  return (
    <div className="question-books">
      <div className="question-field">
        <p>
          <span>{index + 1}</span>
          {")"}
          {questionBook.answers[index].title}
        </p>
        <p className="title-question">{questionBook.answers[index].body}</p>

        <AnswerText handleResponse={handleResponse} index={index} time={time} localResponse={localResponse} />

        {localResponse.filter((res) => res).length === questionBook.answers.length && (
          <Link id="send-container" to={`/cadernos-de-questoes/${id}/obrigado`} state={{ responses: localResponse }}>
            <button className="button-style" onClick={handleTime}>
              Enviar resposta
            </button>
          </Link>
        )}

        <hr />

        <div className="button-container">
          <button onClick={previousQuestion} className={`${index === 0 && "invalid-button"} button-style`}>
            Pergunta anterior
          </button>

          <button onClick={nextQuestion} className={`${index === totalQuestion && "invalid-button"} button-style`}>
            Próxima pergunta
          </button>
        </div>
      </div>
    </div>
  );
};
