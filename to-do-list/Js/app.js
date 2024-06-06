function addChore() {
  const choreInput = document.getElementById("newChore");
  const choreText = choreInput.value.trim();
  if (choreText === "") return;

  const choreList = document.getElementById("choreList");

  const listItem = document.createElement("li");
  listItem.textContent = choreText;

  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.onclick = () => {
    listItem.classList.toggle("completed");
  };

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => {
    choreList.removeChild(listItem);
  };

  listItem.appendChild(completeButton);
  listItem.appendChild(deleteButton);

  choreList.appendChild(listItem);

  choreInput.value = "";
}
