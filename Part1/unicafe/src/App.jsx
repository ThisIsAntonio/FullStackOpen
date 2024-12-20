import React from 'react'
import { useState } from 'react'

// Function to shows the title
const Title = ({value}) => <h1>{value}</h1> 

// Function to create a button
const Button = ({handleClick,text}) => <button onClick={handleClick}>{text}</button>

  // Function to create a list
const StatisticsLine = ({text, value}) => <tr><td>{text}:</td><td>{value}</td></tr>

// Function to calculate average and positive values and shows the list of each
const Statistic = ({good, neutral, bad}) => {
  console.log('Good: ' + good + ', Neutral: ' + neutral + ', Bad: ' + bad)
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good * 100 ) / total
  if (total === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
        <StatisticsLine text="Good" value={good} />
        <StatisticsLine text="Neutral" value={neutral} />
        <StatisticsLine text="Bad" value={bad} />
        <StatisticsLine text="Total" value={total} />
        <StatisticsLine text="Average" value={average} />
        <StatisticsLine text="Positive" value={`${positive} %`} />
      </tbody>
    </table>
  )
}


// Main Function
const App = () => {
  // Save the click of each state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title value='Give Feedback'/>
      <Button handleClick={() => setGood(good + 1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Title value='Statistics' />
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App