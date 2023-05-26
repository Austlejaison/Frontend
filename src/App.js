import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Student from './components/Student';

import Add from './components/Add';

function App() {

 


  return (
    <><Navbar /><div className="App">

      <Routes>
        <Route path='/' element={<Student />}></Route>
        <Route path='/Add' element={<Add data={sname:'',sgrade:''}}></Route></Routes>
      </Routes>


    </div></>
  );
}

export default App;