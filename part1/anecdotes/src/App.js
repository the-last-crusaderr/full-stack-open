import React,{useState} from 'react';



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0);
  const [points,setPoints] = useState([0,0,0,0,0,0,0]);
  const [maxValue,setMaxValue] = useState(0);


  const handleMaxValue = () => {

    let max = maxValue;
    if ((points[selected] + 1) > points[maxValue])
        max = selected;
    for(let i=0;i<points.length;i++){
      if(points[i] > points[maxValue])
        max = i;
    }

    setMaxValue(max);

  }


  const handleVotes = () => {
    
    let newPoints = [...points];
    newPoints[selected]++;
    setPoints(newPoints);
    handleMaxValue();
  }


  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br/> has {points[selected]} votes <br/>
      <button onClick={handleVotes}>vote</button>
    <button onClick={ () => { let random = Math.floor((Math.random() * anecdotes.length));
                                  setSelected(random)}}>next anecdote</button>

       <h1>Anecdote with most votes</h1>

        <p>
          {anecdotes[maxValue]} <br/>  has {points[maxValue]} votes.
        </p>

    </div>
  )
}

export default App

