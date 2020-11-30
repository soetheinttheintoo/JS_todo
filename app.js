let actionEl = document.getElementById("action");
let DescriptionEl = document.getElementById("description");
let tasksContainerEl = document.getElementById("tasksContainer");
let tasks = [];

function addTask() {
    if (actionEl.value === "") {
        return alert("Pelase fill the task.");
    }

    let task = {
        action: actionEl.value,
        status: true,
    };

    tasks.push(task);
    updateDom(tasks);
    actionEl.value = "";
}

console.log(tasksContainerEl);

function updateDom(data) {
    tasksContainerEl.innerHTML = "";
    data.forEach((v, i) => {
        let element = document.createElement("div");
        element.classList.add("d-flex", 'mb-3');
        element.innerHTML = `
      <div class="mr-auto">${v.action}</div>
                  <div class="mr-2">
                    <button class="btn btn-primary">
                      <i class="fa fa-check"></i>
                    </button>
                  </div>
                  <div>
                    <button class="btn btn-danger">
                      <i class="fa fa-trash"></i>
                    </button>
                  </div>  
      `;
        tasksContainerEl.appendChild(element);
    });

}