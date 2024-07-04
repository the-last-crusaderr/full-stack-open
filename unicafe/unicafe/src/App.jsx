import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const StatiticsLine = ({text, value}) => {
        return (
          <>
	   <p>{text} {value}</p>
          </>
	)
	}



const Statistics = ({good,neutral,bad}) => {
	const all = good+bad+neutral
	if(all == 0){
	  return (
           <>
             <p>No feedback given</p>
	   </>
	  )	
		}
       return (
         <>
	   <StatiticsLine text="good" value={good}/>
	   <StatiticsLine text="neutral" value={neutral}/>
 	   <StatiticsLine text="bad" value={bad}/>
	   <StatiticsLine text="all" value={all}/>
   	   <StatiticsLine text="average" value={(good-bad)/all}/>
	   <StatiticsLine text="positive" value={(good/all)*100}/>
         </>
       )
	}


const Button = ({handleClick, text}) => {
       return (
         <>
           <button onClick= {handleClick} >
	     {text}
           </button>
         </>
       )
	}


const Feedback = ({good,neutral,bad,setGood,setNeutral,setBad}) => {
       
       const handleGood = () => setGood(good+1);
       const handleBad = () => setBad(bad+1);
       const handleNeutral = () => setNeutral(neutral+1);


	return(
         <div>
           <h5>give feedback</h5>
           <Button handleClick={handleGood} text="good"/>
           <Button handleClick={handleNeutral} text="neutral"/>
	   <Button handleClick={handleBad} text="bad"/>
	 </div>
	)
}




function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <Feedback good={good} neutral={neutral} bad={bad} setGood={setGood} 
                setNeutral={setNeutral} setBad={setBad}/>
      <h5> statistics  </h5>	
      <Statistics good={good} neutral={neutral} bad={bad}  />
    </>
  )
}

export default App
