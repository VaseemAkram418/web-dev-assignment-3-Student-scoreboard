import "./App.css";

import { useState } from "react";
import Header from "./Components/Header";
import StudentTable from "./Components/StudentTable";
import AddStudentForm from "./Components/AddStudentForm";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Vaseem", score: 75 },
    { id: 2, name: "Rahul", score: 30 },
  ]);

  // Add Student
  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
  };

  // Update Score
  const updateScore = (id, newScore) => {
    const updated = students.map((stu) =>
      stu.id === id ? { ...stu, score: Number(newScore) } : stu
    );
    setStudents(updated);
  };

  return (
    <div className="container">
      <Header />
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;