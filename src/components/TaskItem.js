import React from 'react'
import { useState } from 'react'

export default function TaskItem({item, onItemDelClick}) {
  
  const [isChecked, setIsChecked] = useState(false)
  function handleDeleteClick() {
    console.log('delete')
    onItemDelClick()
  }
  return (
    <div className='flex mt-1 justify-between items-center'>
      <div className='flex items-center'>
      <input type='checkbox' checked={isChecked} onChange={e => {setIsChecked(e.target.checked)}}  className='appearance-none rounded-full mr-2 text-green-700 cursor-pointer '/>
      <div className={`focus:outline-none p-1 ${isChecked && ' text-gray-400'}`}>{item}</div>
      </div>
      <div onClick={handleDeleteClick} className='text-gray-500 cursor-pointer'>
      ✗
      </div>
    </div>
  )
}
