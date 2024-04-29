import { useState } from "react";

import Inputs from "./components/Inputs/Inputs";
import Results from "./components/Results/Results";
import { calculateBirth } from "./components/util/calculateBirth";

function App() {
  const [date, setDate] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [showResult, setShowResult] = useState({
    age: "--",
    months: "--",
    days: "--",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const newDate = {
      day: date.day,
      month: date.month,
      year: date.year,
    };

    const newDateFormatted = `${newDate.day}/${newDate.month}/${newDate.year}`;

    const newResult = calculateBirth(newDateFormatted);

    setShowResult(newResult);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <Inputs
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        date={date}
      />
      <Results results={showResult} />
    </div>
  );
}

export default App;
