import React from "react";

export default function Statistics({ good, neutral, bad }) {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <p style={{ fontWeight: "bold", fontSize: 30 }}>statistics</p>
        <p>No feedback given</p>
      </>
    );
  }
  return (
    <>
      <p style={{ fontWeight: "bold", fontSize: 30 }}>statistics</p>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {(good - bad) / (good + neutral + bad)}</p>
      <p>positive {(good / (good + neutral + bad)) * 100} %</p>
    </>
  );
}
