import { useState } from "react"
import Alert from "./components/Alert"
import Login from "./components/Login"
const App = () => {
  const [alert, setAlert] = useState({ m: "", c: "" })
  return (
    <div>
      <Login setAlert={setAlert} />
      <Alert alert={alert} />
    </div>
  )
}

export default App
