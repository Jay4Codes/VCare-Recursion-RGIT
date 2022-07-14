import { useState } from "react";
import OutputText from "./OutputText";
import getText from "./getText";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function FirToText() {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [extractedText, setExtractedText] = useState();
  const [error, setError] = useState(null);
  //after upload, get file and display some data, remove possible errors
  const handleChange = (event) => {
    //to prevent typescript null value error
    if (!event.target.files) return;
    setError(null);
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };
  //after submission, set output text and show error element if incorrect file format
  const handleSubmission = () => {
    getText(selectedFile).then(
      (text) => {
        setExtractedText(text);
      },
      (error) => {
        console.error(error);
        setError(`File could not be uploaded due to this error: ${error}`);
      }
    );
  };
  const clearText = () => {
    setIsSelected(false);
    setExtractedText(null);
  };
  const copyToClipboard = () => {
    if (extractedText) {
      navigator.clipboard
        .writeText(extractedText)
        .catch(() => {
          alert("something went wrong");
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="section-lg">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1>FIR to Text</h1>
            <label className="custom-input">
              <input
                type="file"
                name="file"
                data-testid="upload-input"
                onChange={handleChange}
                accept="application/pdf"
              />
              Upload FIR to Extract Text
            </label>

            {isSelected && selectedFile ? (
              <div>
                <br />
                <p>
                  Filename: <strong>{selectedFile.name}</strong>
                </p>{" "}
                <p>
                  Filetype: <strong>{selectedFile.type}</strong>
                </p>
                <p>
                  Size in bytes: <strong>{selectedFile.size}</strong>
                </p>
              </div>
            ) : (
              <p>Select a file to show details</p>
            )}

            {error && <div>{error}</div>}

            <div>
              <button className="btn btn-primary" onClick={handleSubmission}>
                Submit
              </button>
            </div>

            <div>
              {extractedText && (
                <div>
                  <OutputText output={extractedText} />
                  <div>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={copyToClipboard}
                    >
                      Copy to Clipboard
                    </button>
                  </div>
                  <button className="btn btn-secondary" onClick={clearText}>
                    Clear
                  </button>
                  <Link to="/translate">
                    <button className="btn btn-secondary">Translate</button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FirToText;
