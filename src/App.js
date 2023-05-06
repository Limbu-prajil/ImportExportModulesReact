import React from 'react';
import Course from './Course'

const App = ({course}) => {

  const Header = ({course}) => <h1>{course.name}</h1>

  const Total = ({course}) => {
    const arr=course.parts.map(part => part.exercises)
    let sum=0
    arr.forEach(e => sum+=e)
    return <p> Total: {sum} </p>
  }

  return (
    <div>
    <Header course={course}/>
    <hr/>
    <Course course={course}/>
    <hr/>
    <Total course={course}/>
    </div>
  )
}

export default App;
