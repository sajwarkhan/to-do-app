const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const dateTask = document.getElementById("date-time");

let now = new Date();

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    listContainer.appendChild(li);
    const now = new Date();
    // const currentYear = now.getFullYear();
    // const currentMonth = now.getMonth() + 1; // Adding 1 to get the month in the 1-12 range
    // const currentDay = now.getDate();
    // let drake = new Date(month, year);
    listContainer.append(now.toLocaleDateString());
    // let a = document.createElement("p");
    // a = new Date();
    // dateTask.append(a.toLocaleDateString());
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");

      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();

      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function displayData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

// function updateDateTime() {
//   const dateTimeElement = document.getElementById("date-time");
//   const now = new Date();
//   const dateTimeString = now.toLocaleString();
//   dateTimeElement.innerText = "Current Date and Time: " + dateTimeString;
// }
