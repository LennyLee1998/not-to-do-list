import React from 'react'

export default function TaskItem({item, onItemDelClick, onCheckClick}) {
  
  function handleDeleteClick() {
    onItemDelClick()
  }
  return (
    <div className='flex mt-1 justify-between items-center'>
      <div className='flex items-center'>
      <input type='checkbox' checked={item.isChecked} onChange={e => {onCheckClick(e.target.checked)}}  className='appearance-none rounded-full mr-2 text-green-700 cursor-pointer '/>
      <div className={`focus:outline-none p-1 ${item.isChecked && ' text-gray-400'}`}>{item.name}</div>
      </div>
      <div onClick={handleDeleteClick} className='text-gray-500 cursor-pointer'>
      ✗
      </div>
    </div>
  )
}
