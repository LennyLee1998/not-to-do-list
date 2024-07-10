import React, { useCallback, useState } from 'react'
import InputButton from './InputButton'
import ListTable from './ListTable'

export default function Board() {
  const [doList, setDoList] = useState([])
  // 控制空字符串提交的时候的waring
  const [isWarning, setIsWarning] = useState(false)
  function handleSubmitClick(val) {
      console.log(val)
      const newDoList = [...doList]
      newDoList.push(val)
      setDoList(newDoList)
  }

  if (isWarning) {
    setTimeout(() => {
      setIsWarning(false)
    }, 2000)
  }
  return (
    <div className='p-6 w-80 rounded-lg bg-white h-60 shadow-xl flex flex-col items-center scrollbar-hide overflow-auto'>
      {/* 标题 */}
      <h2 className='text-2xl text-center font-bold text-gray-600 '>Not To Do List</h2>
      {/* 输入框 */}
      <InputButton onSubmitClick={handleSubmitClick} onWarningShow={setIsWarning}/>
      {/* 空值输入tip */}
      {isWarning && <div className='text-red-600'>Please enter your task</div>}
      {/* list */}
      <ListTable doList={doList} />
    </div>
  )
}
