import React from 'react';
import { useState } from 'react'

// Function to handle title
const Title = ({title}) => <h1>{title}</h1>

// Function to handle info div
const Div = ({info}) => <div>{info}</div>

// Function to handle buttons
const Button = ({handleClick, text}) => <button onClick={handleClick}> {text}</button>


// Main Function
const App = () => {
  //Define variables
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

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  // Function to handle the votes
  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  // Check the max points from the array
  const mostVotedAnecdote = points.indexOf(Math.max(...points))
  console.log(mostVotedAnecdote)

  // Main Return
  return (
    <div>
      <Title title='Anecdote of the day'/>
      <Div info={anecdotes[selected]}/>
      <Div info={`has ${points[selected] || 0} votes`}/>
      <Button handleClick={handleVote} text='Vote'/>
      <Button handleClick={() => {setSelected(Math.floor(Math.random() * 7)+1)}} text='Next Anecdote'/>
      <br></br>
      <Title title='Anecdote with most votes'/>
      <Div info={anecdotes[mostVotedAnecdote]} />
      <Div info={`has ${points[mostVotedAnecdote] || 0} votes`} />
    </div>
  )
}

export default App