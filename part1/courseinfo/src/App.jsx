import { useState } from "react";
import StatisticLine from "./StatisticLine";
import Button from "./Button";

const Statistics = ({ good, neutral, bad }) => {
  return good === 0 && neutral === 0 && bad === 0 ? (
    <p>No feedback given</p>
  ) : (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={good + neutral + bad} />
        <StatisticLine
          text="average"
          value={(good - bad) / (good + neutral + bad)}
        />
        <StatisticLine
          text="positive"
          value={(good / (good + neutral + bad)) * 100 + " %"}
        />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <p style={{ fontWeight: "bold", fontSize: 30 }}>give feedback</p>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <p style={{ fontWeight: "bold", fontSize: 30 }}>statistics</p>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
