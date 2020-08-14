import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
 const [votes,setVote]= useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))
 const [maxv,setMax]=useState(0)
  const handleclick=()=>
  {
    
    const t=anecdotes.length
    const idx=Math.floor((Math.random()*t))
    console.log("idx is",idx)
    return setSelected(idx)
  }
  const handlevote=()=>
  {
    const copy =[...votes]
    copy[selected]+=1
    setVote(copy) 
    var max=votes[0]
   var idxmax=0
   for(var i=1;i<votes.length;i++)
   {
     if(max<votes[i])
     {
       max=votes[i]
       idxmax=i
     }
   }
   setMax(idxmax)
  
  }
  /*const Maxvote=()=>
  {
   var max=props.arr[0]
   var idxmax=0
   for(var i=1;i<props.arr.length;i++)
   {
     if(max<props.arr[i])
     {
       max=props.arr[i]
       idxmax=i
     }
   }
   setMax(idxmax)
  }
  */
  console.log("final",selected)
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p> {props.anecdotes[selected]}</p>
      <p>  has {votes[selected]} votes</p>
      <button onClick={handleclick}>next anecdote</button>
      <button onClick={handlevote}>vote</button>
      <p>Anecdote with most votes </p>
      <p>{props.anecdotes[maxv]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
