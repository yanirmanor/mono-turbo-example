import Card from './components/Card'
import './App.css'

export function Test ({ children }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px' }}>
      <h2>TTT</h2>
      <div>{children}</div>
    </div>
  )
}

function App () {
  return (
    <div className='App'>
      <Card>
        <h1>Hello World</h1>
        <span>Again..</span>
      </Card>
    </div>
  )
}

export default App
