import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/home/HomePage';

import { Route, Routes } from 'react-router-dom';
import StudentPage from './pages/students/StudentPage';
import TeacherPage from './pages/teachers/TeacherPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='student' element={<StudentPage />} />
        <Route path='teacher' element={<TeacherPage />} />
      </Routes>
    </>
  );
}

export default App;
