const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
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

const Content = ({ parts }) => {
  return (
    <div>
      <Part name={parts[0].name} ex={parts[0].exercises} />
      <Part name={parts[1].name} ex={parts[1].exercises} />
      <Part name={parts[2].name} ex={parts[2].exercises} />
    </div>

    // <div>
    //   {parts.map((part, index) => (
    //     <p key={index}>
    //       {part.name} {part.ex}
    //     </p>
    //   ))}
    // </div>

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
      Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  // const parts = [
  //   part1, part2, part3
  // ]

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

export default App;
