/* Header function to shows the course info */
const Header = ({title}) => {
  console.log(title)
  return (
      <h1>{title}</h1>
  )
}

/* Subtitle function to shows the course name */
const Subtitle = ({name}) => {
  console.log(name)
  return(
    <h2>{name}</h2>
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
    // Using map to show the list of exercises
    <div>
      { parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

/* Course component to handle and display a single course */
const Course = ({course}) => {
  console.log(course)
  return ( 
    <div>
      <Subtitle name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

/* Total function to calculate the sum of each exercise */
const Total = ({parts}) => {
  // Using reduce to calculate the total sum of exercises
  const totalExercises = parts.reduce((sum, part) => {
    console.log('Current sum:', sum, 'Adding exercises from:', part);
    return sum + part.exercises;
  }, 0) // Initialize the sum with 0

  return (
    <h3>Number of exercises {totalExercises}</h3>
  )
}

/* Courses component to handle and display multiple courses */
const Courses = ({ courses }) => {
  console.log(courses)
  return (
    <div>
      <Header title={courses[0].name} />
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
}

/* Main Function */
const App = () => {
  // Def const
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return <Courses courses={courses} />
}

export default App