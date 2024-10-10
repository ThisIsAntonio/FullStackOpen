const Header = (props) => {
  console.log(props.course)
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Content = ({props}) => {
  console.log(props)
  return (
    <div>
      <p>{props.part1.name}: {props.part1.exercises}</p>
      <p>{props.part2.name}: {props.part2.exercises}</p>
      <p>{props.part3.name}: {props.part3.exercises}</p>
    </div>
  )
}

const Total = ({ex}) => {
  console.log(ex.ex1, ex.ex2, ex.ex3)
  return(
    <div>
      <p>Number of exercises {ex.ex1 + ex.ex2 + ex.ex3}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content props={{
        part1: {name:part1, exercises: exercises1},
        part2: {name:part2, exercises: exercises2},
        part3: {name:part3, exercises: exercises3},
      }}/>
      <Total ex={{ex1:exercises1, ex2:exercises2, ex3:exercises3}}/>
    </div>
  )
}

export default App