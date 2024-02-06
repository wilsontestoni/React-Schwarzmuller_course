import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      {console.log(UserInput.annualInvestment)}
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p className="center">Please enter a duration grater than 0.</p>}
      {inputIsValid && <Result userInput={userInput} />}
    </>
  );
}

export default App;
