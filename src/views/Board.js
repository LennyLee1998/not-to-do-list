import React, {useEffect, useState } from "react";
import InputButton from "./InputButton";
import ListTable from "./ListTable";
import { getTaskList, postTaskList } from "../service/modules/board";

export default function Board() {
  const LIST_NAME = "doList"
  // localStorage本地存储
  // const [doList, setDoList] = useState(JSON.parse(localStorage.getItem(LIST_NAME)) ?? []);
  // localStorage.setItem(LIST_NAME, JSON.stringify(doList))
  const [doList, setDoList] = useState([])
  async function getAllTasklist() {
    const res = await getTaskList()
    setDoList(res)
  }
  useEffect(() => {
    getAllTasklist()
  }, [])
  // 控制空字符串提交的时候的waring
  const [isWarning, setIsWarning] = useState(false);

  function handleSubmitClick(val) {
    console.log("handleSubmitClick", val)
    // post以后要重新请求,刷新页面/更新doList
    postTaskList({name: val, isChecked: false}).then(_ => {
      getAllTasklist()
    })
  }

  if (isWarning) {
    setTimeout(() => {
      setIsWarning(false);
    }, 2000);
  }
  return (
    <div className=" w-80 rounded-lg bg-white h-60 shadow-xl flex flex-col items-center scrollbar-hide overflow-auto relative">
      {isWarning && <div className="text-red-600 absolute z-10 top-7 left-9">Please enter your task</div>}
      <div className="fixed bg-white pt-2">
        {/* 标题 */}
        <h2 className="text-2xl text-center font-bold text-gray-600 ">
          Not To Do List
        </h2>
        {/* 输入框 */}
        <InputButton
          onSubmitClick={handleSubmitClick}
          onWarningShow={setIsWarning}
        />
      </div>
      {/* 空值输入tip */}
      {/* list */}
      {doList.length === 0 ? <div className="absolute top-1/2 text-gray-600 text-xl">Please enter your done</div> : <div className="mt-20 w-full px-8">
        <ListTable doList={doList} onQueryCB={getAllTasklist}/>
      </div>}
    </div>
  );
}
