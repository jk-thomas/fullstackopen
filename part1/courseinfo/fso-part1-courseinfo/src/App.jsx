const Header = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Part = ({ name, ex }) => {
  return (
    <p>
      {name} {ex}
    </p>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part, index) => (
        <Part key={index} name={part.name} ex={part.exercises} />
      ))}
    </div>
  )
}

const Total = ({ course }) => {
  return (
    <p>
      Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

export default App;
