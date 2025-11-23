import './App.css';
import NavigationBar from './components/NavigationBar';
import AddFile from './pages/AddFile';
import Home from './pages/Home';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
   <div>
    <NavigationBar/>
    <Routes>
      <Route path='/*' element={<Home/>}/>
      <Route path='/addFile/*' element={<AddFile/>}/>
    </Routes>
   </div>
  );
}

export default App;
