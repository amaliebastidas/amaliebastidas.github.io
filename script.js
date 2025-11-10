// Collapsible categories
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach(button => {
  button.addEventListener("click", () => {
    const checklist = button.nextElementSibling;
    checklist.style.display = checklist.style.display === "block" ? "none" : "block";
  });
});

// Add item
function addItem() {
  const input = document.getElementById("itemInput");
  if (input.value.trim() === "") return;
  
  const categories = document.querySelectorAll(".checklist");
  const firstVisibleCategory = Array.from(categories).find(c => c.previousElementSibling.style.display === "block");
  
  if (!firstVisibleCategory) {
    alert("Please open a category first!");
    return;
  }
  
  const li = document.createElement("li");
  li.textContent = input.value;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = () => li.remove();
  removeBtn.style.marginLeft = "10px";

  li.appendChild(removeBtn);
  firstVisibleCategory.appendChild(li);
  input.value = "";
}

// Set custom trip name
function setTripName() {
  const tripName = document.getElementById("tripName").value;
  if (tripName.trim() !== "") {
    document.querySelector("h1").textContent = tripName + " Checklist";
  }
}
