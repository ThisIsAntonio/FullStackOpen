/* Header function to shows the course info */
const Header = ({course}) => {
  console.log(course.name)
  return (
    <div>
      <p>{course.name}</p>
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
const Total = ({parts}) => {
  console.log(parts[0].exercises + parts[1].exercises + parts[2].exercises)
  return(
    <div>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises }</p>
    </div>
  )
}

/* Main Function */
const App = () => {
  // Def const
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises:7 },
      { name: 'State of a component', exercises: 14 }
    ]
  }
  return (
    <div>
      <Header course = {course} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

export default App