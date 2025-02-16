import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Todo from './components/Todo'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title="TO-DO - LIST" />
      <div className='center'>
      <Todo one="Learn React" two="Build a To-Do List" three="Master JavaScript" four="Apply for Jobs"/>
      </div>
      <Button add="Add" del="Delete"/>
    </>
  )
}

export default App