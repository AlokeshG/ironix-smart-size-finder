
import { useState } from "react";
import { RotateCcw, Ruler, CheckCircle } from "lucide-react";

function SizeFinder({ onRecommend }) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [fit, setFit] = useState("Regular");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const findSize = () => {
    setError("");
    setResult("");

    const h = Number(height);
    const w = Number(weight);

    if (!height || !weight) {
      setError("Please enter both height and weight.");
      return;
    }

    if (!Number.isFinite(h) || !Number.isFinite(w)) {
      setError("Please enter valid numbers.");
      return;
    }

    if (h < 130 || h > 220) {
      setError("Height must be between 130 and 220 cm.");
      return;
    }

    if (w < 30 || w > 180) {
      setError("Weight must be between 30 and 180 kg.");
      return;
    }

    // Illustrative demo logic, not an official IRONIX size chart.
    const bmi = w / ((h / 100) ** 2);

    let recommendedSize;

    if (bmi < 19) {
      recommendedSize = "S";
    } else if (bmi < 23) {
      recommendedSize = "M";
    } else if (bmi < 27) {
      recommendedSize = "L";
    } else {
      recommendedSize = "XL";
    }

    const sizes = ["S", "M", "L", "XL"];
    let index = sizes.indexOf(recommendedSize);

    if (fit === "Loose" && index < 3) {
      index++;
    }

    if (fit === "Tight" && index > 0) {
      index--;
    }

    const finalSize = sizes[index];

    setResult(finalSize);

    if (onRecommend) {
      onRecommend(finalSize);
    }
  };

  const resetForm = () => {
    setHeight("");
    setWeight("");
    setFit("Regular");
    setResult("");
    setError("");
  };

  return (
    <section id="size-finder" className="size-section">
      <div className="size-container">

        <div className="size-heading">
          <span className="section-label">FIND YOUR PERFECT FIT</span>
          <h2>THE SIZE FINDER</h2>
          <p>
            A simple demo to help you explore your
            recommended clothing size.
          </p>
        </div>

        <div className="size-card">

          <div className="size-card-header">
            <Ruler size={28} />
            <h3>YOUR BODY DETAILS</h3>
          </div>

          <div className="form-group">
            <label>Height (cm)</label>
            <input
              type="number"
              placeholder="Example: 175"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Weight (kg)</label>
            <input
              type="number"
              placeholder="Example: 70"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Preferred Fit</label>

            <div className="fit-options">
              {["Tight", "Regular", "Loose"].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={
                    fit === option ? "fit-btn active" : "fit-btn"
                  }
                  onClick={() => setFit(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {result && (
            <div className="result-box">
              <CheckCircle size={28} />
              <p>YOUR DEMO SIZE RECOMMENDATION</p>
              <h2>{result}</h2>
              <span>
                Based on your entered details and preferred fit.
              </span>
            </div>
          )}

          <button
            type="button"
            className="recommend-btn"
            onClick={findSize}
          >
            FIND MY SIZE
          </button>

          <button
            type="button"
            className="reset-btn"
            onClick={resetForm}
          >
            <RotateCcw size={16} />
            RESET
          </button>

          <p className="disclaimer">
            Demo recommendation only. This is not an official
            IRONIX sizing chart or a guarantee of fit.
          </p>

        </div>
      </div>
    </section>
  );
}

export default SizeFinder;
