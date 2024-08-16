import { useState } from 'react'
import GrocerryInput from './component/GrocerryInput'
import GrocerryItems from './component/GrocerryItems'
import Container from './component/Container'

function App() {

  const [inputEnter,setInputEnter]=useState("")
  const [errorMessage,setErrorMessage]=useState("")
  const [bought,setBought]=useState([])
  
  const [grocerry,setGrocerry]=useState([
    "Atta","Rice","Dal","Sugar","Oil"
  ])
 



  const onchangegrocery= (event) => {
    setInputEnter(event.target.value)
  }


  

  const onclickbutton = (e) => {
    
    e.preventDefault()

    if(!grocerry.includes(inputEnter)){

      let newGrocerryAdded=inputEnter
      let newGrocerry = [...grocerry,newGrocerryAdded]
      console.log(newGrocerry)
      setGrocerry(newGrocerry)
      setErrorMessage("")
    }else{
      setErrorMessage("Item already Exist")
    } 
  }

  let buyOnClick= (item)=>{
    if(bought.includes(item)){
      setBought(bought.filter(boughtitem=>boughtitem!=item))
    }else{
      setBought([...bought,item])
    }

  }
  return (
   
      <Container>
        <GrocerryInput onchangegrocery={onchangegrocery}  onclickbutton={onclickbutton} />
        <h2 className="text-red-500">{errorMessage}</h2>
        <GrocerryItems grocerry={grocerry} bought={bought} buyOnClick={buyOnClick} />
      </Container>
  
  )
}

export default App
