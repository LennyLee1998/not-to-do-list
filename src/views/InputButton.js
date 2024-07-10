import React, { useState } from 'react'

export default function InputButton({onSubmitClick, onWarningShow}) {
  const [inputValue, setInputValue] = useState('')
  
  // button点击将value传给父组件
  function handleButtonClick(e) {
    // 只有当有值的时候才需要传回给父组件并reset
    if(inputValue) {
      onSubmitClick(inputValue)
      setInputValue("")
    } else{
      onWarningShow(true)
    }
    //  button这里的点击会导致页面刷新,需要阻止默认行为
    e.preventDefault()
  }
  return (
  <div className='mt-3 flex justify-between'>
    {/* <form className=''> */}
      <input type="text" value={inputValue}  onChange={(e) => setInputValue(e.target.value)}  className='border-b-2 border-red-400 rounded-md focus:outline-none p-1' placeholder='add your NOT TO DO'/>
      <button onClick={(e) => {handleButtonClick(e)}} className='bg-green-700 hover:bg-green-900 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ml-2'>Add</button>
    {/* </form> */}
  </div>
  )
}
