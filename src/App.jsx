import React from 'react'
import { useEffect,useRef } from 'react'

function App() {
  const inputref = useRef(null)
  const inputref1 = useRef(null)
  const inputref2 = useRef(null)

  useEffect (() =>{
    console.log("render");
    
  })

  const handler1 = ()=>{
    inputref.current.focus();
    inputref.current.style.background="blue"
    inputref1.current.style.background=""
    inputref2.current.style.background =""
    
  }
  const handler2 = ()=>{
    inputref1.current.focus();
    inputref.current.style.background=""
    inputref1.current.style.background="red"
    inputref2.current.style.background =""

    
  }
  const handler3 = ()=>{
    inputref2.current.focus();
    inputref.current.style.background=""
    inputref1.current.style.background=""
    inputref2.current.style.background ="yellow"
    
  }
  return (
    <div>
      <input type="text" ref={inputref} />
      <button onClick={handler1}>
        click me
      </button>
      <input type="text" ref={inputref1} />
      <button onClick={handler2}>
        click me1
      </button>
      <input type="text" ref={inputref2} />
      <button onClick={handler3}>
        click me3
      </button>
    </div>
  )
}

export default App