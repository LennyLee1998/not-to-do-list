import React, { useState } from 'react'
import TaskItem from '../components/TaskItem'
import { deleteTaskItem, updateTaskItem } from '../service/modules/board'

export default function ListTable({doList=[], onQueryCB}) {
  // 点击X的时候修改doList
  async function handleItemDelClick(id) {
    await deleteTaskItem(id)
    // 发起get请求
    onQueryCB()
  }

  function handleUpdateClick(item, upItem) {
    updateTaskItem(item._id, {...item, ...upItem}).then(_ => {
    // 发起get请求
      onQueryCB()
    })
  }

  return (
    <div className='mt-2 w-full px-4'>
      {doList.map((item) => {
        return (
          <TaskItem onItemDelClick={() => handleItemDelClick(item._id)} onUpdateClick={(isChecked=item.isChecked, name=item.name) => handleUpdateClick(item, {isChecked, name})} item={item} key={item.name}/>
        )
      })}
    </div>
  )
}
