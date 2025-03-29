const studentBook = ["Purvi"];
function loadStudents() {
  const studentContainer = document.getElementById("Student-container");

  studentContainer.innerHTML = "";

  for (let i = 0; i < studentBook.length; i++) {
    studentContainer.innerHTML += `<div class="student-list"> ${i + 1}. ${
      studentBook[i]
    }<img src="./imgs/delete-icon.png" id="delete-icon" onclick="removeName(${i})"/>  <br/> </div>`;
  }
}
loadStudents();

const inputElement = document.getElementById("name-input");
function addStudent() {
  studentBook.push(inputElement.value);
  loadStudents();
  inputElement.value = "";
}
function removeName(i) {
  studentBook.splice(i, 1);
  loadStudents();
}
