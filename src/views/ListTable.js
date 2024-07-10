import React, { useState } from 'react'
import TaskItem from '../components/TaskItem'

export default function ListTable({doList=[]}) {
  
  return (
    <div className='mt-2 w-full px-4'>
      {doList.map((item) => {
        return (
          <TaskItem item={item} key={item}/>
        )
      })}
    </div>
  )
}
