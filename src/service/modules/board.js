import request from "../request"

export function getTaskList() {
  return request.get(`/task`)
}

export function postTaskList(task) {
  return request.post(`/add`, {
    task
  })
}

export function deleteTaskItem(id) {
  return request.delete(`/delete/${id}`)
}

export function updateTaskItem(id, task) {
  return request.put(`/update/${id}`, {
    task
  })
}