import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [IsSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true)

    console.log([
      "Username: " +
      username +
      " " +
      "Email: " +
      email +
      " " +
      "Password: " +
      password
    ]);
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
        <h2 className="mt-3">Login</h2>
          <div className="mb-3 mt-4">
            <label className="form-label">
              Username:
              <input type="text" className="form-control" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
              {IsSubmitted && !username && (
                <div className="error-block text-danger h6 mt-3">Userame is required!</div>
              )}
            </label>
          </div>
          <div className="mb-3">
          <label className="form-label">
            Email:
            <input type="email" className="form-control" placeholder="name@example.com" autoComplete="on" value={email} onChange={(event) => setEmail(event.target.value)} />
            {IsSubmitted && !email && (
                <div className="error-block text-danger h6 mt-3">Email is required!</div>
              )}
              {IsSubmitted &&
              email &&
              !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && (
                <div className="error-block text-danger h6 mt-3">Email is not valid!</div>
              )}
          </label>
          </div>
          <div className="mb-3">
          <label className="form-label">
            Password:
            <input type="password" className="form-control" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
            {IsSubmitted && !password && (
                <div className="error-block text-danger h6 mt-3">Password is required!</div>
              )}
              {IsSubmitted && password && password.length <= 6 && (
              <div className="error-block text-danger h6 mt-3">
                Password must contain 6 characters!
              </div>
            )}
          </label>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
    </>
  )
}

export default Login
