let myLeads = [];
const inputEL = document.querySelector(".input");
const printEl = document.querySelector(".content");
const saveButtonEl = document.querySelector(".save__button");
const deleteButtonEl = document.querySelector(".delete__button");
const tabButtonEl = document.querySelector(".tab__button");

tabButtonEl.addEventListener("click", () => {
  // chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {});
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    render(myLeads);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
  });
});

// -----------------------------------------------------
const gettingData = JSON.parse(localStorage.getItem("dataStore"));

if (gettingData) {
  myLeads = gettingData;
  render(myLeads);
}
// Function & Listener
function render(leads) {
  let listItem = "";
  for (let i = 0; i < leads.length; i++) {
    listItem += `
    <li>
      <a class="link" href="${leads[i]}" target="_blank">
        ${leads[i]}
      </a>
    </li>`;
  }
  printEl.innerHTML = listItem;
}
deleteButtonEl.addEventListener("click", () => {
  printEl.innerHTML = null;
  localStorage.clear();
  myLeads = [];
});
saveButtonEl.addEventListener("click", () => {
  myLeads.push(inputEL.value);
  inputEL.value = "";
  saveData();
  render(myLeads);
});
function saveData() {
  let dataSaved = JSON.stringify(myLeads);
  localStorage.setItem("dataStore", dataSaved);
}
