
import './App.css'
import Template from './components/Template'

function App(props) {
  const cars = props.cars
  return (
    <Template cars={cars}/>
  )
}

export default App
