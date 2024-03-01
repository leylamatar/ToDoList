let toDoInput = document.querySelector(`#task`);
let toDoButton = document.querySelector(".addTask");
let newLiDom = document.querySelector("#list");



const toggleComplate = (event) =>{
    event.currentTarget.parentElement.classList.add('checked')
}


const removeItem = (event) =>{
    newLiDom.removeChild(event.currentTarget.parentElement);
}



const newElement = (todoText) => {
  let liDom = document.createElement("li");
  liDom.classList.add('toDoItem','todoText');
  //liDom.innerHTML = `${item} `;
  const textElement = document.createElement("span");
  textElement.innerText = todoText;
  textElement.classList.add("todoText");
  liDom.append(textElement)

  const completeButton = document.createElement("button");
  completeButton.classList.add("completeButton");
  completeButton.innerText = "🗹";
  completeButton.addEventListener("click", toggleComplate)
  liDom.append(completeButton)

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.innerText = "X";
 deleteButton.addEventListener("click", removeItem)
  liDom.append(deleteButton)
  
  newLiDom.append(liDom);
  toDoInput.value = " ";
  toDoInput.focus();
};

const addTask = () => {
    const taskValue = toDoInput.value.trim();
    if ( taskValue === "") {
      alert("Input Boş Olamaz, Lütfen Task Girin");
    } else {
      newElement(taskValue);
    }
};


toDoButton.addEventListener("click", addTask);

