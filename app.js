let myLeads = [];
const inputEL = document.querySelector(".input");
const printEl = document.querySelector(".content");
const saveButtonEl = document.querySelector(".save__button");
const deleteButtonEl = document.querySelector(".delete__button");
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
deleteButtonEl.addEventListener("dblclick", () => {
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
