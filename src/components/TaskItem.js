import React from 'react'
import { useState } from 'react'

export default function TaskItem({item}) {
  
  const [isChecked, setIsChecked] = useState(false)
  function handleDeleteClick() {
    console.log('delete')
  }
  return (
    <div className='flex mt-1 justify-between items-center'>
      <div className='flex items-center'>
      <input type='checkbox' checked={isChecked} onChange={e => {setIsChecked(e.target.checked)}}  className='appearance-auto rounded-full w-4 h-4 mr-2 border'/>
      <div className={`focus:outline-none p-1 ${isChecked && 'line-through text-gray-400'}`}>{item}</div>
      </div>
      <div onClick={handleDeleteClick} className='text-gray-500 cursor-pointer'>
        x
      </div>
    </div>
  )
}
