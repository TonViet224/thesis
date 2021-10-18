import { useState, Suspense } from 'react'
import Header from './Component/Header'
import Tasks from './Component/Tasks'
import AddTask from './Component/AddTask'
import { Canvas } from '@react-three/fiber';
import Box from './Component/Box'
import { Environment, OrbitControls } from "@react-three/drei";
import Model from './Component/Model'
function App() {
  const name = 'Viet';
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor appointment",
      day: "20-11-2021",
      reminder: true
    },
    {
      id: 2,
      text: "School meeting",
      day: "22-11-2021",
      reminder: true
    }
  ])
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const toggleRemider = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ?
        { ...task, reminder: !task.reminder } : task
      )
    )
  }
  return (
    <div className="container">
      <Header />
      <AddTask />
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
    </div >
  )
}

export default App;
