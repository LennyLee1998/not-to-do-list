import React, { useCallback, useState } from "react";
import InputButton from "./InputButton";
import ListTable from "./ListTable";

export default function Board() {
  // item: isChecked
  const [doList, setDoList] = useState([]);
  // 控制空字符串提交的时候的waring
  const [isWarning, setIsWarning] = useState(false);
  function handleSubmitClick(val) {
    console.log(val);
    const newDoList = [...doList];
    newDoList.push(val);
    setDoList(newDoList);
  }

  if (isWarning) {
    setTimeout(() => {
      setIsWarning(false);
    }, 2000);
  }
  return (
    <div className=" w-80 rounded-lg bg-white h-60 shadow-xl flex flex-col items-center scrollbar-hide overflow-auto">
      {isWarning && <div className="text-red-600">Please enter your task</div>}
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
