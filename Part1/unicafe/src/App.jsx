import React from 'react'
import { useState } from 'react'

  const Title = (props) => {
    return (
      <h1>{props.value}</h1>
    )
  }
  const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

const Statistic = (props) => {
  console.log(props)
    const total = props.good + props.neutral + props.bad
    const average = total === 0 ? 0 : (props.good - props.bad) / total
    const positive = total === 0 ? 0 : (props.good * 100 ) / total

  return (
    <ul>
      <li>Good: {props.good} </li>
      <li>Neutral: {props.neutral} </li>
      <li>Bad: {props.bad}</li>
      <li>Averange:{average}</li>
      <li>Positive: {positive} %</li>
    </ul>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const values = [good, neutral, bad]
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