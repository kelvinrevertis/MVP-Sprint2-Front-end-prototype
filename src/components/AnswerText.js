export const AnswerText = (props) => {
  const { localResponse, handleResponse, time, index } = props;
  return (
    <>
      <textarea type="text" placeholder="Responda aqui" onChange={handleResponse} value={localResponse[index] || ""} />
      <div id="char-timer">
        <p>Caracteres: {(localResponse[index] || "").length}</p>
        <p>{time}</p>
      </div>
    </>
  );
};
