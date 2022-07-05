//selectors
const inputToDos = document.querySelector(".todos-input")
const addBtn = document.querySelector(".submitBtn")
const todoListOutput = document.querySelector(".toDo-list")
let theToDo =[] 
//eventlisteners
document.addEventListener("DOMContentLoaded",getToDos)
addBtn.addEventListener("click",renderToDO)
todoListOutput.addEventListener("click",completeTaskBtn)


function renderToDO(event) {
    //prevent form from submitting
    event.preventDefault();

    //ToDo Div
    let listContainer = document.createElement("div")
    listContainer.classList.add("todoListContainer")

    //ToDo List
    let list = document.createElement("li")
    list.classList.add("todoItem")
    list.innerText = inputToDos.value
    listContainer.append(list)      
    //Saving To Local Storage
    saveListLocalStorage(inputToDos.value)
    inputToDos.value =""

    //completeBtn
    const checkBtn = document.createElement("button")
    checkBtn.innerHTML = `<i class="fa fa-check"></i>`
    checkBtn.classList.add("completeBtn")
    listContainer.prepend(checkBtn)

    
 

      //deleteBtn
      const deleteBtn = document.createElement("button")
      deleteBtn.innerHTML =`<i class="fa fa-trash"></i>`
      deleteBtn.classList.add("deleteBtn")
      deleteBtn
      listContainer.append(deleteBtn)

      //appending to the ul
      todoListOutput.append(listContainer)
      

}
function completeTaskBtn(e) {
  let checkOut = e.target
    if(checkOut.classList[0] === "completeBtn"){
      const toDo = checkOut.parentElement
      toDo.classList.toggle("doneToDo") 

    }
    if (checkOut.classList[0] === "deleteBtn") {
      const toDo = checkOut.parentElement
      toDo.classList.toggle("deletedListBtn")  
    }
}
function saveListLocalStorage(allToDos) {
 
  if (localStorage.getItem("allToDos") === null) {
    
        
  }
  else{
    JSON.parse(localStorage.getItem('allToDos'));
  }
       theToDo.push(allToDos)
      localStorage.setItem("allToDos",JSON.stringify(theToDo))
}

function getToDos(params) {
  
  if (localStorage.getItem("allToDos") === null) {
        
  }
  else{
    JSON.parse(localStorage.getItem('allToDos'));
  }
  theToDo.forEach(allToDos => {
        //ToDo Div
        let listContainer = document.createElement("div")
        listContainer.classList.add("todoListContainer")
    
        //ToDo List
        let list = document.createElement("li")
        list.classList.add("todoItem")
        list.innerText = allToDos.value
        listContainer.append(list)      
        inputToDos.value =""
    
        //completeBtn
        const checkBtn = document.createElement("button")
        checkBtn.innerHTML = `<i class="fa fa-check"></i>`
        checkBtn.classList.add("completeBtn")
        listContainer.prepend(checkBtn)
    
          //deleteBtn
          const deleteBtn = document.createElement("button")
          deleteBtn.innerHTML =`<i class="fa fa-trash"></i>`
          deleteBtn.classList.add("deleteBtn")
          deleteBtn
          listContainer.append(deleteBtn)
    
          //appending to the ul
          todoListOutput.append(listContainer)
          
  });
  
}


  
