/* Header function to shows the course info */
const Header = ({course}) => {
  console.log(course.name)
  return (
      <h1>{course.name}</h1>
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
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises }</p>
  )
}

/* Course function to show the course info */
const Course = ({course}) => {
  return (
    <div>
      <Header course = {course} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

/* Main Function */
const App = () => {
  // Def const
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  return <Course course={course} />
}

export default App