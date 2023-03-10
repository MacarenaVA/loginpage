import { useState } from "react"

const Login = ({ setAlert }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault()
    if (
      email.trim() === "prueba@email.com" &&
      password.trim() === "123456789"
    ) {
      setAlert({ m: "Sesión Iniciada correctamente", c: "success" })
    } else {
      setAlert({ m: "Datos Incorrectos", c: "danger" })
    }
  }

  return (
    <div>
      <h1>Inicia sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button
          className="btn btn-dark"
          disabled={!email.trim() || !password.trim()}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
