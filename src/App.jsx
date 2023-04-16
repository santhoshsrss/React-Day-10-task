import './App.css'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { Student } from './component/Student'
import { Routes, Route, Link } from "react-router-dom";
import { Teacher } from "./component/Teacher";
function App() {

  return (
    <div className="App">
      <AppBar position="static">
        <nav className="navbar">
          <Link to="/" className="studentclass">
          <Button variant="contained" color="success">Home</Button>
          </Link>
          <Link to="/student" className="studentclass">
          <Button variant="contained" color="success">Student</Button>
          </Link>
          <Link to="/teacher" className="studentclass">
          <Button variant="contained" color="success">Teacher</Button>
          </Link>
        </nav>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
      </Routes>
    </div>
  )
}


function Home() {
  return (
    <div>
      <h1>Welcome to Student and Teacher Management </h1>
    </div>
  );
}

export default App
