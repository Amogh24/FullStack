import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [feed,setFeed]=useState(0)
  
  const HandleGood=()=>
{
    setGood(good+1)
    setFeed(feed+1)
}
const HandleBad=()=>
{
  setBad(bad+1)
  setFeed(feed+1)
}
const HandleNeutral=()=>
{
  setNeutral(neutral+1)
  setFeed(feed+1)
}
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={HandleGood}>good</button>
      <button onClick={HandleNeutral}>neutral</button>
      <button onClick={HandleBad}>bad</button>
      <h1>Statistics</h1>
     <Statistics good={good} bad={bad} neutral={neutral} feed={feed}/>
      
        
    </div>
  )
}
const Statistic=(props)=>{

  return <tr><td>{props.text}</td><td> {props.value}</td></tr> 
}
const Statistics=(props)=>
  {
    if(props.feed>=1) 
    {return (<div><table>
      <Statistic text="good" value={props.good}/>
      <Statistic text="neutral" value={props.neutral}/>
      <Statistic text="bad" value={props.bad}/>   
      <Statistic text="all" value= {props.good +props.bad +props.neutral}/>
      <Statistic text="average" value= {(props.good*1+props.bad+(-1))/(props.good+props.bad+props.neutral)}/>
      <Statistic text="positive" value= {((props.good+props.neutral)/(props.good+props.bad+props.neutral))*100}/>
      </table> </div>
  )}else{
    return <div><p>No feedback given</p></div>
  }}


ReactDOM.render(<App />, 
  document.getElementById('root')
)