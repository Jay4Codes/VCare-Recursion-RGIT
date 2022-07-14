import "./OutputText.css";

function OutputText({ output }) {
  return (
    <div
      data-testid="output-text"
      className="output-text-container"
    >
      <p className="output-text">{output && output}</p>
    </div>
  );
}

export default OutputText;
