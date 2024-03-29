import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <p style={{ fontWeight: "bold", fontSize: 30 }}>give feedback</p>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <p style={{ fontWeight: "bold", fontSize: 30 }}>statistics</p>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <p>average {(good - bad) / (good + neutral + bad)}</p>
          <p>positive {(good / (good + neutral + bad)) * 100} %</p>
        </>
      )}
    </>
  );
};

export default App;
