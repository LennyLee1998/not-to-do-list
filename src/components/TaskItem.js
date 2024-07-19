import React, { useState } from 'react'
import { FiEdit, FiDelete } from "react-icons/fi";

export default function TaskItem({item, onItemDelClick, onUpdateClick}) {
  const [isEdit, setIsEdit] = useState(false)
  
  const [editValue, setEditValue] = useState(item.name)

  function handleDeleteClick() {
    onItemDelClick()
  }
  function handleEditClick() {
    setIsEdit(!isEdit)
  }

  function handleUpdateClick(e) {
    onUpdateClick(undefined, editValue)
    setIsEdit(false)
    e.preventDefault()
  }

  return (
    <div className='flex mt-1 justify-between items-center'>
      <div className='flex items-center'>
      <input type='checkbox' checked={item.isChecked} onChange={e => {onUpdateClick(e.target.checked)}}  className='appearance-none rounded-full mr-2 text-green-700 cursor-pointer '/>
      {
        isEdit ? <div><input onChange={e => setEditValue(e.target.value)} value={editValue} className='appearance-none w-full rounded-full  h-8'/></div> : <div className={`focus:outline-none p-1 ${item.isChecked && ' text-gray-400'}`}>{item.name}</div>
      }
      </div>
      {isEdit ? <div><button onClick={(e) => {handleUpdateClick(e)}}  className='bg-green-700 hover:bg-green-900 text-white  px-1 rounded focus:outline-none focus:shadow-outline ml-2'>Update</button></div> : <div className="flex items-center ml-2">
        <div className='mr-2 cursor-pointer'onClick={handleEditClick}>
        <FiEdit color='#666' /></div>
        <div onClick={handleDeleteClick} className='text-gray-500 cursor-pointer'>
        <FiDelete />
        </div>
      </div>}
    </div>
  )
}
