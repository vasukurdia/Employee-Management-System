import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='grid grid-cols-2 lg:flex mt-10 gap-4 sm:gap-5'>
        <div className='rounded-xl w-full lg:w-[45%] py-4 sm:py-6 px-5 sm:px-9 bg-blue-400'>
            <h2 className='text-2xl sm:text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-lg sm:text-xl font-medium'>New Task</h3>
        </div>

        <div className='rounded-xl w-full lg:w-[45%] py-4 sm:py-6 px-5 sm:px-9 bg-green-400'>
            <h2 className='text-2xl sm:text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-lg sm:text-xl font-medium'>Completed Task</h3>
        </div>

        <div className='rounded-xl w-full lg:w-[45%] py-4 sm:py-6 px-5 sm:px-9 bg-yellow-400'>
            <h2 className='text-2xl sm:text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-lg sm:text-xl font-medium'>Accepted Task</h3>
        </div>

        <div className='rounded-xl w-full lg:w-[45%] py-4 sm:py-6 px-5 sm:px-9 bg-red-400'>
            <h2 className='text-2xl sm:text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-lg sm:text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers