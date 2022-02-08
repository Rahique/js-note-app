let leads = [];
const inputEL = document.querySelector(".input");
const printEl = document.querySelector(".content");
const saveButtonEl = document.querySelector(".save__button");
const deleteButtonEl = document.querySelector(".delete__button");
// -----------------------------------------------------
const getData = JSON.parse(localStorage.getItem("myLeads"));
if (getData) {
  leads = getData;
  renderLead();
}
// Function & Listener
saveButtonEl.addEventListener("click", () => {
  leads.push(inputEL.value);
  inputEL.value = null;
  saveData();
  renderLead();
});
deleteButtonEl.addEventListener("dblclick", () => {
  printEl.innerHTML = null;
  localStorage.clear();
  leads = [];
});

function renderLead() {
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
function saveData() {
  let sLeads = JSON.stringify(leads);
  localStorage.setItem("myLeads", sLeads);
}
