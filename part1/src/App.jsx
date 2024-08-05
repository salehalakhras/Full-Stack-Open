

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
    <div>
      <Header courseName={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total totalExercises={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}></Total>
    </div>
  )
}


export const Header = (props) => {
  return (
    <div>
      <h1>{props.courseName}</h1>
    </div>
  )
}

export const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]}  partNum={1}></Part>
      <Part part={props.parts[1]}  partNum={2}></Part>
      <Part part={props.parts[2]}  partNum={3}></Part>
   </div>
  )
}

export const Total = (props) => {
  return (
    <div>
      <p><strong>Total number of Exercises: {props.totalExercises}</strong></p>
    </div>
  )
}



export const Part = (props) => {
  return (
    <div>
        <p>Part {props.partNum}: {props.part.name}</p>
        <p>Number of Exercises: {props.part.exercises}</p>
    </div>
  )
}



export default App