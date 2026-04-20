// ─── F3 — Valutazione chiarezza informativa (PRD §6.3, obbligatoria AGID) ───

const FeedbackWidget = () => {
  const [step, setStep] = React.useState("question"); // question | yes-detail | no-detail | thanks
  const [answer, setAnswer] = React.useState(null);
  const [selected, setSelected] = React.useState([]);
  const [comment, setComment] = React.useState("");

  const yesOptions = [
    "Le informazioni erano chiare e complete",
    "Ho trovato facilmente ciò che cercavo",
    "Il linguaggio era semplice e comprensibile",
    "I passaggi erano ben spiegati",
  ];

  const noOptions = [
    "Le informazioni non erano sufficienti",
    "Il linguaggio era difficile da capire",
    "Non ho trovato quello che cercavo",
    "Le istruzioni non erano chiare",
    "Le informazioni sembrano non aggiornate",
  ];

  const toggleOption = (opt) => {
    setSelected((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt],
    );
  };

  const handlePrimary = (val) => {
    setAnswer(val);
    setSelected([]);
    setComment("");
    setStep(val === "yes" ? "yes-detail" : "no-detail");
  };

  const handleSubmit = () => setStep("thanks");

  const handleReset = () => {
    setStep("question");
    setAnswer(null);
    setSelected([]);
    setComment("");
  };

  const containerStyle = {
    background: "var(--bi-primary-050)",
    borderTop: "3px solid var(--bi-primary)",
    borderRadius: "0 0 8px 8px",
    padding: "32px 40px",
    marginTop: 0,
  };

  if (step === "thanks") {
    return (
      <div style={{ background: "var(--bi-bg-alt)", padding: "40px 0" }}>
        <div className="container">
          <div
            style={{
              ...containerStyle,
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "var(--bi-success, #1A7A4A)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Icon name="check" size={24} />
            </div>
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 17,
                  color: "var(--bi-ink-900)",
                  marginBottom: 4,
                }}
              >
                Grazie per il tuo feedback!
              </div>
              <div style={{ fontSize: 14, color: "var(--bi-ink-500)" }}>
                Il tuo contributo ci aiuta a migliorare la qualità delle
                informazioni sul sito dell'ASL Napoli 3 Sud.
              </div>
            </div>
            <button
              onClick={handleReset}
              style={{
                marginLeft: "auto",
                background: "none",
                border: "none",
                color: "var(--bi-primary)",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4,
                flexShrink: 0,
              }}
            >
              Invia un altro feedback
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "var(--bi-bg-alt)", padding: "40px 0" }}>
      <div className="container">
        <div style={containerStyle}>
          {/* Titolo fisso */}
          <div style={{ marginBottom: step === "question" ? 20 : 24 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1.2,
                textTransform: "uppercase",
                color: "var(--bi-primary)",
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 2,
                  background: "var(--bi-primary)",
                  display: "inline-block",
                }}
              />
              Valutazione della pagina
            </div>
            <div
              style={{
                fontFamily: "var(--ff-serif)",
                fontSize: 22,
                fontWeight: 500,
                color: "var(--bi-ink-900)",
              }}
            >
              Queste informazioni ti sono state utili?
            </div>
          </div>

          {step === "question" && (
            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={() => handlePrimary("yes")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 24px",
                  borderRadius: 4,
                  border: "2px solid var(--bi-primary)",
                  background: "var(--bi-primary)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                <Icon name="check" size={16} />
                Sì
              </button>
              <button
                onClick={() => handlePrimary("no")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 24px",
                  borderRadius: 4,
                  border: "2px solid var(--bi-primary)",
                  background: "transparent",
                  color: "var(--bi-primary)",
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                <Icon name="close" size={16} />
                No
              </button>
            </div>
          )}

          {(step === "yes-detail" || step === "no-detail") && (
            <div>
              <div
                style={{
                  marginBottom: 16,
                  fontWeight: 600,
                  fontSize: 15,
                  color: "var(--bi-ink-700)",
                }}
              >
                {step === "yes-detail"
                  ? "Cosa ti è stato più utile? (puoi scegliere più opzioni)"
                  : "Cosa non ti è risultato chiaro? (puoi scegliere più opzioni)"}
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  marginBottom: 20,
                }}
              >
                {(step === "yes-detail" ? yesOptions : noOptions).map((opt) => (
                  <button
                    key={opt}
                    onClick={() => toggleOption(opt)}
                    style={{
                      padding: "8px 16px",
                      borderRadius: 99,
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.12s",
                      border: selected.includes(opt)
                        ? "2px solid var(--bi-primary)"
                        : "2px solid var(--bi-border)",
                      background: selected.includes(opt)
                        ? "var(--bi-primary-100)"
                        : "var(--bi-surface)",
                      color: selected.includes(opt)
                        ? "var(--bi-primary-800)"
                        : "var(--bi-ink-700)",
                    }}
                  >
                    {selected.includes(opt) && <Icon name="check" size={12} />}{" "}
                    {opt}
                  </button>
                ))}
              </div>

              <div style={{ marginBottom: 20 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--bi-ink-700)",
                    marginBottom: 6,
                  }}
                >
                  Commento libero (opzionale)
                  <span style={{ fontWeight: 400, color: "var(--bi-ink-500)" }}>
                    {" "}
                    — max 500 caratteri. Non inserire dati personali.
                  </span>
                </label>
                <textarea
                  maxLength={500}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={3}
                  style={{
                    width: "100%",
                    maxWidth: 560,
                    padding: "10px 14px",
                    borderRadius: 4,
                    border: "1.5px solid var(--bi-border)",
                    fontFamily: "var(--ff-sans)",
                    fontSize: 14,
                    background: "var(--bi-surface)",
                    color: "var(--bi-ink-900)",
                    resize: "vertical",
                    boxSizing: "border-box",
                  }}
                  placeholder="Descrivi liberamente la tua esperienza…"
                />
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--bi-ink-400)",
                    marginTop: 4,
                  }}
                >
                  {comment.length}/500 caratteri
                </div>
              </div>

              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <button
                  onClick={handleSubmit}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 24px",
                    borderRadius: 4,
                    border: "2px solid var(--bi-primary)",
                    background: "var(--bi-primary)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 15,
                    cursor: "pointer",
                  }}
                >
                  Invia feedback
                  <Icon name="arrow-right" size={16} />
                </button>
                <button
                  onClick={handleReset}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--bi-ink-500)",
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  Annulla
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

window.FeedbackWidget = FeedbackWidget;
