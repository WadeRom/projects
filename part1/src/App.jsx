const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  const Part = ({ title='Default Title', totalExcercises=1 }) => {
    return (
      <div>
        <h2>{title}</h2>
        <p>Number of exercises {totalExcercises}</p>
      </div>
    )
  }

  const Header = ({ course = 'Default title' }) => {
    return(
      <h1>{course}</h1>
    )
  }

  const Content = () => {
    return(
      <div>
        <Part title={part1} totalExcercises={exercises1} />
        <Part title={part2} totalExcercises={exercises2}/>
        <Part title={part3} totalExcercises={exercises3}/>
      </div>
    )
  }

  const Total = ({ total=0 }) => {
    return(
      <p>Total number of exercises {total}</p>
    )
  }
  

  return (
    <div>
      <Header course={course} />
      <Content/>
      <Total total={( exercises1 + exercises2 + exercises2 )} />
    </div>
  )
}

export default App