import React,{useState} from 'react';



const Title = ({text}) => {
  return (
    <h2>
      {text}
    </h2>
  )
}


const Button = ({text,value,setValue}) => {

  return (
    <button onClick = {() => setValue(value+1) } >
        {text}
    </button>
  )
}

const StatsLine = ({text,value}) => {

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>

  )
}

const Statistics = ({good,neutral,bad,setGood,setNeutral,setBad,all}) => {

  if(good === 0 && neutral === 0 && bad === 0){
    return(
      <p>
        No feedback given
      </p>
    )
  }


  return (
    <table>
      <tbody>
        <StatsLine text={"good"} value={good}/>
        <StatsLine text={"neutral"} value={neutral}/>
        <StatsLine text={"bad"} value={bad}/>
        <StatsLine text={"all"} value={all}/>
        <StatsLine text={"average"} value={(good-bad)/all}/>
        <StatsLine text={"positive"} value={ ( (good/all) * 100)+" %"}/>    
      </tbody>
    </table>
  )
}



function App() {

  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);
  const all = good + bad + neutral;



  return (
    <div>
      <Title text={'give feedback'}/>
      <Button text= {"good"} value={good} setValue={setGood}/>
      <Button text= {"neutral"} value={neutral} setValue={setNeutral}/>
      <Button text= {"bad"} value={bad} setValue={setBad}/>
      <Title text={'statistics'}/>
      <Statistics good={good} neutral={neutral} bad={bad} setGood={setGood} setNeutral={setNeutral} setBad={setBad} all={all}/>
      

    </div>
  );
}

export default App;
