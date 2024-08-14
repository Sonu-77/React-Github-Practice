import { useState } from 'react'
import GrocerryInput from './component/GrocerryInput'
import GrocerryItems from './component/GrocerryItems'
import Container from './component/Container'

function App() {

  const [inputEnter,setInputEnter]=useState("")

  const [bgcolor,setBgColor]=useState("white")

  const [buybtn,setbuybtn]=useState("Buy")

  const [grocerry,setGrocerry]=useState([
    "Atta","Rice","Dal","Sugar","Oil"
  ])
 


  const onchangegrocery= (event) => {
    setInputEnter(event.target.value)
  }

  

  const onclickbutton = (e) => {
    
    e.preventDefault()


      let newGrocerryAdded=inputEnter
      let newGrocerry = [...grocerry,newGrocerryAdded]
      console.log(newGrocerry)
      setGrocerry(newGrocerry)
    
  }

  let buyOnClick= ()=>{
    setBgColor(bgcolor==="white"?"#219ebc":"white")
    setbuybtn(buybtn==="Buy"?"Remove":"Buy")

  }
  return (
   
      <Container>
        <GrocerryInput onchangegrocery={onchangegrocery}  onclickbutton={onclickbutton} />
        <GrocerryItems grocerry={grocerry} buyOnClick={buyOnClick} bgcolor={bgcolor} buybtn={buybtn}/>
      </Container>
  
  )
}

export default App
