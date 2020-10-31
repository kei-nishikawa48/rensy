import React,{useState} from 'react';


const Input = () => {
  const [state,set_state]=useState("")
  const [email,set_email]=useState("")
  const [pass,set_pass]=useState("")
  const [confirmpass,set_confirmpass]=useState("")
  console.log(state)
  const change=(e)=>{
    set_state(e.target.value)
  }
  const handle_submit=()=>{
    console.log(state)
  }
  return ( 
    <>
    <input
    type="text"
    onChange={change}
    />
    <input
    type="text"
    onChange={change}
    />
    <input
    type="text"
    onChange={change}
    />
    <input
    type="text"
    onChange={change}
    />

    <button onClick={handle_submit}>コンソール</button>
    </>
   );
}
 
export default Input;