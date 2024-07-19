import React, {useState } from "react";
import InputButton from "./InputButton";
import ListTable from "./ListTable";

export default function Board() {

  const LIST_NAME = "doList"
  // item: isChecked
  // localStorage本地存储
  const [doList, setDoList] = useState(JSON.parse(localStorage.getItem(LIST_NAME)) ?? []);
  if (doList == null) {
    setDoList([]);
  } else {
    localStorage.setItem(LIST_NAME, JSON.stringify(doList));
  }

  // 控制空字符串提交的时候的waring
  const [isWarning, setIsWarning] = useState(false);

  function handleSubmitClick(val) {
    const newDoList = [...doList];
    // isChecked状态提升
    newDoList.push({name: val, isChecked: false});
    setDoList(newDoList);
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
      <div className="mt-20 w-full px-8">
        <ListTable doList={doList} onTableClick={setDoList} />
      </div>
    </div>
  );
}
