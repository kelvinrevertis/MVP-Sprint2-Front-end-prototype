import { useContext } from "react";
import { ResponsesContext } from "../../providers";
import { useQuestionBook } from "../../../hooks/useQuestionBooks";

export const QuestionBookThanks = ({ id }) => {
  const { questionBook, loading } = useQuestionBook(id);
  const { responses, finalTime } = useContext(ResponsesContext);

  if (loading) return <h1>Carregando...</h1>;

  console.log();

  return (
    <div className="question-books">
      <div className="question-field">
        <p id="title">Obrigado por enviar!</p>
        <p>Duração total da prova: {finalTime}</p>

        {responses.map((response, index) => (
          <div key={index}>
            <span className="title-question">
              <span>{index + 1}</span>
              {")"}
              {questionBook.answers[index].title}
            </span>
            <div id="answer-field">
              <p>Sua resposta: {response}</p>

              <p>Resposta correta: {questionBook.answers[index]?.["correct-answers"]}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
