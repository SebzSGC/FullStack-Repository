/* eslint-disable react/prop-types */
import { useState } from "react";

//Manejo de estado sencillo y creacion de componentes
// const Display = ({ counter }) => <div>{counter}</div>

// const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <Display counter={counter}/>

//       <Button
//         onClick={increaseByOne}
//         text='plus'
//       />
//       <Button
//         onClick={setToZero}
//         text='zero'
//       />
//       <Button
//         onClick={decreaseByOne}
//         text='minus'
//       />
//     </div>
//   )
// }

//Manejo de estados complejos
// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   const handleLeftClick = () =>
//   setClicks({ ...clicks, left: clicks.left + 1 })

// const handleRightClick = () =>
//   setClicks({ ...clicks, right: clicks.right + 1 })

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }

//Manejo de matrices y conocimiento de llamados asincronos
// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )
// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     const updatedLeft = left + 1
//     setLeft(updatedLeft)
//     setTotal(updatedLeft + right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     const updatedRight = right + 1
//     setRight(updatedRight)
//     setTotal(updatedRight + left)
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' />
//       {right}
//       <History allClicks={allClicks} />
//       <p>total {total}</p>
//     </div>
//   )
// }

//Manejo de funciones dentro de funciones y estados
// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

// const Display = ({value}) => <div>{value}</div>

// const App = () => {
//   const [value, setValue] = useState(0)

//   const setToValue = (newValue) => () => {
//     console.log('value now', newValue)  // imprime el nuevo valor en la consola
//     setValue(newValue)
//   }

//   return (
//     <div>
//       <Display value={value} />
//       <Button handleClick={setToValue(value + 1000)} text="thousand" />
//       <Button handleClick={setToValue(0)} text="reset" />
//       <Button handleClick={setToValue(value + 1)} text="increment" />
//     </div>
//   )
// }

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
  // guarda los clics de cada botón en su propio estado
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