import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Person = (props) => {
	console.log(props);
	return (
	  <>
	    <p>I am {props.name} and I am {props.age} years old.</p>
          </>
	)
	}


function App() {
  const [count, setCount] = useState(10);
  const now = new Date();
  console.log("Constructing pages with the help of Vite");
  return (
    <>
      <p>
        The current time is {now.toString()};  <br/>
        This is restarted career on web development....
      </p>
      <Person name="Jack" age="15"/>
      <Person name="Jill" age="20"/>
    </>
  )
}

export default App
