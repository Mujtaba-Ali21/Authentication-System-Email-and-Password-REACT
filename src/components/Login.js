import React, { useRef } from 'react'

function Login() {
    
    const email = useRef()
    const password = useRef()
    
    function submitFunc(e) {
        e.preventDefault()   
        console.log(email.current.value);
        console.log(password.current.value);
    } 
    return (
    <div>
        <input type="email" ref={email} />
        <input type="password" ref={password} />
        <button type="submit" onClick={submitFunc}>Submit</button>
    </div>
  )
}

export default Login