import { useState } from "react";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import Table from "./components/Table";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [initialInvestment, setInitialInvestiment] = useState(0);
  const [annualInvestment, setAnnualInvestiment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  const durationIsValid = duration >= 1;

  const result = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  return (
    <>
      <Header />

      <section id="user-input">
        <div className="input-group">
          <InputSection
            idContent="initial-investiment"
            inputType="number"
            labelText="Initial Investiment"
            setData={setInitialInvestiment}
          />
          <InputSection
            idContent="anual-investiment"
            inputType="number"
            labelText="Anual Investiment"
            setData={setAnnualInvestiment}
          />
        </div>
        <div className="input-group">
          <InputSection
            idContent="expected-return"
            inputType="number"
            labelText="Expected Return"
            setData={setExpectedReturn}
          />
          <InputSection
            idContent="duration"
            inputType="number"
            labelText="Duration"
            setData={setDuration}
          />
        </div>
      </section>

      {!durationIsValid && <p style={{ textAlign: "center" }}>Invalid duration</p>}
      {durationIsValid && (
        <Table dataResult={result} initialInvestment={initialInvestment} />
      )}
    </>
  );
}

export default App;
