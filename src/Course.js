import React from 'react'

const Course = ({course}) => {

    
    const Part = ({name, exercises}) => <p>{name} {exercises}</p>
    const Contents = ({course}) => {
        const arr = () => course.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)
        return arr();
    }

    return (
        <Contents course={course}/>
    )
} 

export default Course