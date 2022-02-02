const add = document.querySelector("#add")
const taskinput = document.querySelector("#taskinput")
const tasklist = document.querySelector("#tasklist")
const remove = document.querySelector("#remove")
function removeTask(task) {
  
}
remove.addEventListener("click",e => {
  // let card = e.target.parentElement.parentElement
  let card = e.target.closest('.task')
  card.remove()
})
function createTask(taskcontent,id) {
  let task = `<ul id="tasklist">
  <li class="task">
    <div class="tasktext">
      <span>${taskcontent}</span>
    </div>
    <div class="removetask">
      <a href="" id="${id}">❌</a> 
    </div>
  </li>
  </ul>`
  
}
