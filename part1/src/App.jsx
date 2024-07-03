import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const Header = (props) => {
       return(
        <>
          <h1>{props.course}</h1>
        </>
       ) 
	}	

const Total = (props) => {
	return (
	 <>
	  <p>Number of exercises is {props.parts[0].exercises +
	                             props.parts[1].exercises +
				     props.parts[2].exercises}
          </p>	
         </>
	)
	}

const Part = (props) => {
     return (
	<>
          <p>
           {props.part} {props.exercises}
          </p>
        </>
     )
	}

const Content = (props)=> {
      return (
        <>
	<Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
	<Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
	<Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
        </>
      )
	}


function App() {
 console.log("Constructing pages with the help of Vite");
  
  const course = 'Half Stack application development'
  const parts =[ { name: 'Fundamentals of React',
                  exercises: 10},
                 {name: 'Using props to pass data',
                   exercises : 7},
                 {name: 'State of a component',
                   exercises : 14}
               ]
  return (
    <div>
      <Header course={course}/>

      <Content parts = {parts}/>

      <Total parts = {parts}/>
    </div>
  )
}

export default App
