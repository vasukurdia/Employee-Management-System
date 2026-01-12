import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {

  const [userData, setUserData] = useContext(AuthContext)

  const updateTaskStatus = (taskIndex, status) => {
    const updated = userData.map(user => {

      if (user.firstname === data.firstname) {
        user.tasks = user.tasks.map((t, idx) => {
          if (idx === taskIndex) {
            return {
  ...t,
  newTask: status === "new",
  ["new Task"]: false,
  active: status === "active",
  completed: status === "completed",
  failed: status === "failed",
}

          }
          return t
        })

        user.taskNumbers = {
          newTask: user.tasks.filter(t => t.newTask).length,
          active: user.tasks.filter(t => t.active).length,
          completed: user.tasks.filter(t => t.completed).length,
          failed: user.tasks.filter(t => t.failed).length,
        }
      }

      return user
    })

    setUserData(updated)
  }

  const fixedData = data.tasks.map(t => {
    if (t["new Task"] === true && !t.newTask) {
      return { ...t, newTask: true }
    }
    return t
  })

  return (
    <div
      id='tasklist'
      className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'
    >
      {fixedData.map((elem, idx) => {

        if (elem.active) {
          return (
            <AcceptTask key={idx}data={elem}onComplete={() => updateTaskStatus(idx, "completed")}
            onFail={() => updateTaskStatus(idx, "failed")}/>
          )
        }

        if (elem.newTask) {
          return (
            <NewTask key={idx}data={elem}onAccept={() => updateTaskStatus(idx, "active")}/>
          )
        }

        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />
        }

        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />
        }
        return null
      })}
    </div>
  )
}

export default TaskList
