import React from 'react';


const Part = ({part}) => {
    return(
      <>
        {part.name} {part.exercises}
      </>
    )
}


const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}


const Content = ({parts}) => {
  return(
    <div>
      { parts.map( (part,index) => <p key={index}> <Part part={part}/>  </p>) } 
    </div>
  )
}


const Total = ({parts}) => {
  return(
    <p>
      Number of exercises {parts.reduce( (accum,currentValue) => accum + currentValue.exercises,0 )}
    </p>
  )
}




const Course = ({course}) => {

    return (
      <>
          <Header course={course.name} />
          <Content parts = {course.parts}  />
          <Total parts = {course.parts} />
      </>
  
    )
  }



export default Course;  