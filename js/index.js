let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let list_container = document.querySelector(".list_container");


btn.addEventListener("click", () => {
    if (input.value == "") {
        alert("please enter your task")
    } else {
        let list = document.createElement("li");
        list.innerHTML = `${input.value} <span><button id="deleteBtn"><i class="fa-solid fa-trash"></i></button></span>`;
        list_container.appendChild(list);
        input.value = "";
        list.querySelector("span").addEventListener("click", () => {
            list.remove();
            savedata()
        })
        list.addEventListener("click", (e) => {
            if (e.target.tagName !== "SPAN") {
                list.classList.toggle("completed");
            }
            savedata();
        })
    }

})
function savedata(){
    localStorage.setItem("data", list_container.innerHTML)
}

function showTasks() {
    list_container.innerHTML = localStorage.getItem("data")
}
showTasks()