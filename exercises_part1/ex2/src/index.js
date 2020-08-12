import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const Statistics=(props)=>
  
    //const good=props.good
    //const bad=props.bad
    //const neutral=props.neutral
    {return
    (<div>
      <p>good {props.good}</p>
      <p> neutral {props.neutral}</p>
      <p>bad {props.bad}</p>   
      <p>all {props.good +props.bad +props.neutral}</p>
      <p>average {(props.good*1+props.bad+(-1))/(props.good+props.bad+props.neutral)}</p>
      <p>positive {((props.good+props.neutral)/(props.good+props.bad+props.neutral))*100}%</p>
      </div>
  );};
  
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={()=>setGood(good+1)}>good</button>
      <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick={()=>setBad(bad+1)}>bad</button>
      <h1>Statistics</h1>
     <Statistics good={good}bad={bad}neutral={neutral}/>
      
        
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)