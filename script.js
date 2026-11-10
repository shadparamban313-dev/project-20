
// // Get HTML Elements

// let nameInput = document.getElementById("employeeName");
// let idInput = document.getElementById("employeeId");
// let departmentInput = document.getElementById("department");
// let attendanceInput = document.getElementById("attendance");

// let addButton = document.querySelector(".add-button");
// let searchInput = document.querySelector(".search-add input");

// let table = document.querySelector("tbody");

// let totalCount = document.querySelectorAll(".summary-card h2")[0];
// let presentCount = document.querySelectorAll(".summary-card h2")[1];
// let absentCount = document.querySelectorAll(".summary-card h2")[2];


// // 1. ADD EMPLOYEE

// addButton.addEventListener("click", function() {

//     let name = nameInput.value.trim();
//     let id = idInput.value.trim();
//     let department = departmentInput.value;
//     let attendance = attendanceInput.value;

//     if (name === "" || id === "" || department === "") {

//         alert("Please fill all employee details");

//     } else {

//         // Create New Row
//         let row = document.createElement("tr");

//         // Create Table Cells
//         let cell1 = document.createElement("td");
//         let cell2 = document.createElement("td");
//         let cell3 = document.createElement("td");
//         let cell4 = document.createElement("td");
//         let cell5 = document.createElement("td");
//         let cell6 = document.createElement("td");

//         // Insert Employee Details
//         cell1.textContent = table.rows.length + 1;
//         cell2.textContent = name;
//         cell3.textContent = id;
//         cell4.textContent = department;

//         // 2. ATTENDANCE STATUS USING IF ELSE

//         let status = document.createElement("span");

//         if (attendance === "Present") {

//             status.textContent = "Present";
//             status.className = "present";

//         } else {

//             status.textContent = "Absent";
//             status.className = "absent";

//         }

//         cell5.appendChild(status);

//         // Create Delete Button
//         let deleteButton = document.createElement("button");

//         deleteButton.textContent = "▤";
//         deleteButton.className = "delete";

//         cell6.appendChild(deleteButton);

//         // Add Cells to Row
//         row.appendChild(cell1);
//         row.appendChild(cell2);
//         row.appendChild(cell3);
//         row.appendChild(cell4);
//         row.appendChild(cell5);
//         row.appendChild(cell6);

//         // Add Row to Table
//         table.appendChild(row);

//         // Clear Input Fields
//         nameInput.value = "";
//         idInput.value = "";
//         departmentInput.value = "";
//         attendanceInput.value = "Present";

//         // Update Statistics
//         updateStatistics();

//         // Update Search Results
//         searchEmployees();

//         alert("Employee Added Successfully!");

//     }

// });


// // 3. SEARCH EMPLOYEE

// searchInput.addEventListener("input", function() {

//     searchEmployees();

// });

// function searchEmployees() {

//     let searchValue = searchInput.value.toLowerCase();

//     let rows = table.querySelectorAll("tr");

//     rows.forEach(function(row) {

//         let name = row.cells[1].textContent.toLowerCase();

//         if (name.includes(searchValue)) {

//             row.style.display = "";

//         } else {

//             row.style.display = "none";

//         }

//     });

// }


// // 4. DASHBOARD STATISTICS

// function updateStatistics() {

//     let rows = table.querySelectorAll("tr");

//     let total = 0;
//     let present = 0;
//     let absent = 0;

//     rows.forEach(function(row) {

//         total++;

//         let status = row.cells[4].textContent.trim();

//         if (status === "Present") {

//             present++;

//         } else if (status === "Absent") {

//             absent++;

//         }

//     });

//     // Update Dashboard Cards

//     totalCount.textContent = total;
//     presentCount.textContent = present;
//     absentCount.textContent = absent;

//     // Update Row Numbers

//     rows.forEach(function(row, index) {

//         row.cells[0].textContent = index + 1;

//     });

// }


// // 5. DELETE EMPLOYEE

// table.addEventListener("click", function(event) {

//     if (event.target.classList.contains("delete")) {

//         let confirmDelete = confirm(
//             "Are you sure you want to delete this employee?"
//         );

//         if (confirmDelete) {

//             let row = event.target.closest("tr");

//             row.remove();

//             // Update Statistics
//             updateStatistics();

//             // Update Search Results
//             searchEmployees();

//         }

//     }

// });


// // INITIAL DASHBOARD UPDATE

// updateStatistics();


// // HEADER ADD EMPLOYEE BUTTON

// let topAddButton = document.querySelector(".search-add button");

// topAddButton.addEventListener("click", function() {

//     document.querySelector(".register-section")
//         .scrollIntoView({ behavior: "smooth" });

//     nameInput.focus();

// });
