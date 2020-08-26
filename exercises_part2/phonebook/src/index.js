import React, { useState,useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
const App = () => {
  const [persons, setPersons] = useState([])
 
  const [ newName, setNewName ] = useState('') 
  const [newNumber,setNewNumber]= useState('')
  const [newCheck,setCheck]=useState('')
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons').then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  

  const names=persons.map(p=>p.name)
  
  const Addname=(event)=>
  {
    event.preventDefault()
    console.log(event.target)
    const newperson = 
    {
     name: newName,
     number:newNumber
    }
    var n
    n=names.includes(newperson.name)
    if(n){
      window.alert (`${newperson.name} is already added to phonebook`)
    }
   else{
     axios.post( 'http://localhost:3001/persons',newperson).then(
       response=>{
        setPersons(persons.concat(newperson))
        setNewName('')
        setNewNumber('')
       }
     )

     
    
   }
  }
  const handlechange=(event)=>
  {
  console.log(event.target.value)
  setNewName(event.target.value)
  
  }
  const Handlenew=(event)=>
  {
    setNewNumber(event.target.value)
  }
  

  const handlecheck=(event)=>
  {
    //event.preventDefault()
    setCheck(event.target.value)
    
    const mnames=names.filter(name => 
      name.includes(newCheck)===true)
    
    setPersons(persons.filter(p=>mnames.includes(p.name)))
    console.log(persons)
    //console.log(mnames)
    return mnames
  }


  const Persons=(props)=>
  {
    const {person}=props
    return( person.map((p)=>
    {
    return(<div key={p.name}>
    <p> {p.name} {p.number}</p>
      </div>
      )
    }
    )
    
    )
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with <input type="text"
      onChange={handlecheck}
      /></p>
      
      <form onSubmit={Addname}>
        <div>
          name: <input value={newName}
          onChange={handlechange}/>
          </div>
          <div>number: <input value={newNumber}
          onChange={Handlenew}/>
          </div>
          
        
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons person={persons}/>
    </div>
  )
}
ReactDOM.render(<App />, 
  document.getElementById('root'))
//export default App