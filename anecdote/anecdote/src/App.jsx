import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Button = (props) => {
	   console.log(props);
           return(
             <>
              <button onClick={props.onClick}>
                Next Anecdote
              </button>
             </>
	   )
	}


const MaxVoteSelector = ({votes,anecdotes}) => {
	let index = votes.indexOf(Math.max(...votes))
	return (
          <>
	  <p>
           {anecdotes[index]}
	  </p>
	  <p>It has {votes[index]} votes</p>
          </>
	)
	}


const App = () => {
   const [selected, setSelected] = useState(0)
   const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const [votes,setVotesCount] = useState(Array(anecdotes.length).fill(0))
  const handleClick = () => {
          let random = Math.floor(Math.random()*anecdotes.length)
          console.log("Button Clicked")
          setSelected(random)
  }

  const handleVotes = () => {
        let temp = [...votes]
        temp[selected]++
	setVotesCount(temp)
	console.log("It has ",temp[selected]," votes")
	  }

  console.log("The value of selected",selected);

  return (
    <div>
      <h3>Anecdote of the Day</h3>
      {anecdotes[selected]}
      <br/>
      <button onClick={handleVotes}>Vote</button>
      <p>It has {votes[selected]} votes.</p>		      
      <Button onClick={handleClick}/>

      <h3>Anecdote with most upvote</h3>
      <MaxVoteSelector votes={votes} anecdotes={anecdotes}/>
    </div>

  )
}

export default App












