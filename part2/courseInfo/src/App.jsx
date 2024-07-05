import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Course from './components/courses'

/*
  App
   Course
    Header
    Content
     Part
     Part ...
*/

/* Moved courses and other subcomponets to other modules  

const Total = ({subj}) => {
        let sum = 0
	
	const total  = subj.reduce( (sum,sub) =>{
		       return sum += sub.exercises},0)
//	console.log(current,sum)
	return (
          <div>
	    Total {total} 
          </div>
	)
	}


const Part = ({subj}) => {
      return (
	<div>
	  
	    {subj.name} {subj.exercises}
	 
        </div>
      )
	}


const Content = ({course}) => {
      return (
	<>	
	 
          {course.parts.map( (subj) => <Part key={subj.id} subj ={subj}/>)}
          <Total subj={course.parts}/> 
	</>
      )
	}



const Course = ({course}) => {
      return(
	<>
         <h1>{course.name}</h1>
         <Content course={course}/>
        </>
      ) 
	}


*/



function App() {
  
  const course = [{
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
        },
	{
	 name: 'CORS',
	 exercises: 13,
	 id: 3
	}
      ]
    }



  ]

  return (course.map( (item) => 
    <Course key={item.id} course={item} />))

  
}

export default App
