import { Link } from "@reach/router";
import { useState } from "react";
import { useQuestionBooks } from '../../../hooks/useQuestionBooks'

export const QuestionBooks = () => {
  const [checked, setChecked] = useState(false);
  const { questionBooks, loading } = useQuestionBooks();

  if (loading) return <h1>Carregando...</h1>

  return (
    <div className="question-books">
      <div className="checkbox-filter">
        <label htmlFor='checkFilter'>
          <input type="checkbox" id="checkFilter" checked={checked} onChange={() => setChecked(!checked)} />{"Mostrar apenas questões não respondidas"}
        </label>

        <div className="box-grid">
          {questionBooks
            .filter(questionBook => !checked || !questionBook.answered)
            .map(questionBook => (
              <div className="box-book" key={questionBook.id}>
                <p className="title-question">{questionBook.title}</p>
                <p>{questionBook.questionAmount} questões</p>

                {questionBook.answered ? <p className="answered">Respondido</p> : <p className="answered">Não respondido</p>}
                <Link to={`/cadernos-de-questoes/${questionBook.id}`} style={{ textDecoration: 'none', color: 'white', width: '100%' }}>
                  <button className="button-style" style={{ opacity: questionBook.answered ? 0.23 : 1 }}>
                    Responder
                  </button>
                </Link>

              </div>
            ))}
        </div >
      </div>
    </div>
  );
};

