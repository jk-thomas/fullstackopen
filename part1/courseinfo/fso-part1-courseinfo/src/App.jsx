const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <p key={index}>
          {part.name} {part.ex}
        </p>
      ))}
    </div>

    // <div>
    //   <p>
    //     {parts[0].name} {parts[0].ex}
    //   </p>
    //   <p>
    //     {parts[1].name} {parts[1].ex}
    //   </p>
    //   <p>
    //     {parts[2].name} {parts[2].ex}
    //   </p>
    // </div>
  )
}

const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises {parts[0].ex + parts[1].ex + parts[2].ex}
    </p>
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

  const parts = [
    { name: part1, ex: exercises1 },
    { name: part2, ex: exercises2 },
    { name: part3, ex: exercises3 }
  ]

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

export default App;
