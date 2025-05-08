document.addEventListener("DOMContentLoaded", () => {
    const resultTable = document.getElementById("result-table");
    const cgpaTable = document.getElementById("cgpa-table");
  
    const students = [
      { name: "Alice", result: "Pass", cgpa: 3.8 },
      { name: "Bob", result: "Fail", cgpa: 2.5 },
      { name: "Charlie", result: "Pass", cgpa: 3.6 }
    ];
  
    function renderTables() {
      resultTable.innerHTML = "";
      cgpaTable.innerHTML = "";
  
      students.forEach((student) => {
        resultTable.innerHTML += `<tr><td>${student.name}</td><td>${student.result}</td></tr>`;
        cgpaTable.innerHTML += `<tr><td>${student.name}</td><td>${student.cgpa}</td></tr>`;
      });
    }
  
    renderTables();
  
    window.addStudent = function() {
      const name = document.getElementById("studentName").value.trim();
      const result = document.getElementById("result").value.trim();
      const cgpa = parseFloat(document.getElementById("cgpa").value.trim()).toFixed(2);
      if (name && result && !isNaN(cgpa)) {
        students.push({ name, result, cgpa });
        document.getElementById("studentName").value = "";
        document.getElementById("result").value = "";
        document.getElementById("cgpa").value = "";
        renderTables();
      }
    }
  });
  