/* Header function to shows the course info */
const Header = (props) => {
  console.log(props.course)
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}

/* Part info function to shows each name and exercise of the course */
const Part = ({name, exercises}) => {
  console.log("name: " + name + " exeercise: " + exercises)
  return(
    <p>{name}: {exercises}</p>
  )

}

/* Content function that shows the list of exercises and course created into the Part */
const Content = ({parts}) => {
  console.log(parts)
  return (
    <div>
      { parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}


/* Total function to calculate the sum of each exercise */
const Total = ({ex}) => {
  console.log(ex.ex1, ex.ex2, ex.ex3)
  return(
    <div>
      <p>Number of exercises {ex.ex1 + ex.ex2 + ex.ex3}</p>
    </div>
  )
}

/* Main Function */
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts=[
        {name:part1, exercises: exercises1},
        {name:part2, exercises: exercises2},
        {name:part3, exercises: exercises3}
      ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total ex={{ex1:exercises1, ex2:exercises2, ex3:exercises3}}/>
    </div>
  )
}

export default App