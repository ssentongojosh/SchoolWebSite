const month = document.getElementById("month");
const dates = document.getElementById("dates");
const dialog = document.getElementById("dialog");
const details = document.getElementById("description");
const closeDialog = document.querySelector(".close");

const events = {
  "2025-4-3": "Sports Day",
  "2025-4-23": "End of Term Exams",
  "2025-5-30": "Breaking off for holidays",
};

let date = new Date();

function showCalender() {
  let currentMonth = date.getMonth();
  let currentYear = date.getFullYear();
  let currentDate = date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  month.textContent = currentDate;

  let firstDay = new Date(currentYear, currentMonth, 1).getDay();
  let lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

  dates.innerHTML = "";

  for (let j = 0; j < firstDay; j++) {
    let emptyDiv = document.createElement("div");
    dates.appendChild(emptyDiv);
  }

  for (let i = 1; i <= lastDay; i++) {
    let dayBox = document.createElement("div");
    dayBox.textContent = i;

    if (
      new Date().toDateString() ===
      new Date(currentYear, currentMonth, i).toDateString()
    ) {
      dayBox.classList.add("today");
    }

    let dateKey = `${currentYear}-${currentMonth + 1}-${i}`;

    if (events[dateKey]) {
      let marker = document.createElement("span");
      dayBox.appendChild(marker);
      marker.classList.add("marker");
      dayBox.classList.add("event");

      dayBox.addEventListener("click", function () {
        dialog.classList.add("show");
        details.textContent = `Event on ${dateKey}: ${events[dateKey]}`;
      });
    }

    dates.appendChild(dayBox);
  }
}

closeDialog.addEventListener("click", () => {
  dialog.classList.remove("show");
});


window.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.classList.remove("show");
  }
});

function previousMonth() {
  date.setMonth(date.getMonth() - 1);
  showCalender();
}

function nextMonth() {
  date.setMonth(date.getMonth() + 1);
  showCalender();
}

showCalender();