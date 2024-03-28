/* eslint-disable react/prop-types */
import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ value, text }) => (
  <div>
    {value != 0 && !isNaN(value) && (
      <h3>
        {text}: {value}
        {text == "positive" && " %"}
      </h3>
    )}
  </div>
);

const Statistics = ({ good, bad, neutral }) => {
  const all = good + bad + neutral;
  const positive = (good / all) * 100;
  const average = (good - bad) / all;

  return (
    <div>
      <h1>Statistics</h1>
      {all == 0 && <h2>No feedback given</h2>}
      <table>
        <tbody>
          <tr>
            <td>
              <StatisticLine text="good" value={good} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="neutral" value={neutral} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="bad" value={bad} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="all" value={all} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="average" value={average} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="positive" value={positive} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button
        handleClick={() => {
          setGood(good + 1);
        }}
        text="good"
      />
      <Button
        handleClick={() => {
          setBad(bad + 1);
        }}
        text="bad"
      />
      <Button
        handleClick={() => {
          setNeutral(neutral + 1);
        }}
        text="neutral"
      />
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </div>
  );
};
export default App;