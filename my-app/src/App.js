import { useState,useEffect, Suspense } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Component/Header'
import Tasks from './Component/Tasks'
import AddTask from './Component/AddTask'
import { Canvas } from '@react-three/fiber';
import Box from './Component/Box'
import { Environment, OrbitControls } from "@react-three/drei";
import Model from './Component/Model'
import Footer from './Component/Footer'
import About from './Component/About'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)  
  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = res.json()
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = res.json()
    return data
  }

  useEffect(()=>{
    const getTasks = async() =>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  const addTask = async(task) => {
    const res = await fetch('http://localhost:5000/tasks',{
      method:'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])

    // const id = Math.floor(Math.random()*10000)+1
    // const newTask = {id,...task}
    // setTasks([...tasks, newTask])
  }

  const deleteTask = async(id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))

  }

  const toggleRemider = async(id) => {
    const taskToToggle = await fetchTask(id)
    const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(updateTask)
    })
    const data = await res.json()
    setTasks(
      tasks.map((task) => task.id === id ?
        { ...task, reminder: data.reminder } : task
      )
    )
  }

  return (
    <Router>
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAdd = {showAddTask}/>
      <Route path='/' exact render={(props)=>(
      <>
      {showAddTask &&<AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        < Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleRemider}
        />
      ) : (
        'Empty Note'
      )}
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10 - 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[2.5, 0, 0]} />
      </Canvas>
      <div className='App'>
        <Canvas>
          <Suspense fallback={null}>
            <Model />
            <OrbitControls />
            <Environment preset='sunset' background />
          </Suspense>
        </Canvas>
      </div>
      </>)}  />
      <Route path='/about' component={About} />
      <Footer />
    </div >
    </Router>
  )
}

export default App;
