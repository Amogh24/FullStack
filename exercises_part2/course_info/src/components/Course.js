import React from 'react';
const Header=(props)=>
{
  console.log(props)
  return <h1>{props.name}</h1>
  
}
const Part=(props)=>
{
  return <p>{props.partname} {props.exercises}</p>
}
const Content=(props)=>
{
  const {parts}=props
  return(
      parts.map((x)=>
      
      <Part key={parts.id}partname={x.name} exercises={x.exercises}/>
      
     )
      )       
}
const Total=(props)=>
{
  const {parts}=props
  const total=parts.reduce((sum,part)=>sum+part.exercises,0)
  
  return <p>Number of exercises {total}</p>
}
const Course=(props)=>
{
 
return(
  
   props.courses.map((c)=> <div key={c.id}>
     
  <Header name={c.name}/>
  <Content parts={c.parts}/>
  <Total parts={c.parts}/>
  </div>
  )
  
)
}
export default Course