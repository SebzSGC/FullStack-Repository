/* eslint-disable react/prop-types */
import { useState } from 'react'

const Button = ({evt, text}) => <button onClick={evt}>{text}</button>

const DisplayAnecdotes = ({data, position}) => <div>{data[position]}</div>
const DisplayVotes = ({data, position}) => <div><h2>has {data[position]} {data[position] === 1 ? "vote" : "votes"}</h2></div>
const DisplayWithMostVotes = ({anecdotes, votes}) => {
  const mostVotesIndex = votes.indexOf(Math.max(...votes));
  return(
    <div>
      <h1>Anecdote with most votes</h1>
      <DisplayAnecdotes data={anecdotes} position={mostVotesIndex}/>
      <DisplayVotes data={votes} position={mostVotesIndex}/>
    </div>
  );
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const votes = [...anecdotes]
  for(let x = 0; x < anecdotes.length; x++){
    votes[x] = 0
  }

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(votes)

  const getAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const putVote = () => {
    const newVotes = [...vote];
    newVotes[selected] += 1;
    setVote(newVotes);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <DisplayAnecdotes data={anecdotes} position={selected} />
      <DisplayVotes data={vote} position={selected}/>
      <Button evt={putVote} text="Vote" />
      <Button evt={getAnecdote} text="next anecdote" />
      <DisplayWithMostVotes anecdotes={anecdotes} votes={vote} />
    </div>
  )
}

export default App