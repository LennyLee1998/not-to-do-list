import React, { useState } from 'react'
import TaskItem from '../components/TaskItem'

export default function ListTable({doList=[], onTableClick}) {
  // 点击X的时候修改doList
  function handleItemDelClick(index) {
    console.log(index)
    const newDoList = [...doList]
    newDoList.splice(index, 1)
    onTableClick(newDoList)
  }
  return (
    <div className='mt-2 w-full px-4'>
      {doList.map((item, index) => {
        return (
          <TaskItem onItemDelClick={() => handleItemDelClick(index)} item={item} key={item}/>
        )
      })}
    </div>
  )
}
