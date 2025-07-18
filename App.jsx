import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './page/Home';
import Create from './page/create';
import Edit from './page/edit';
import Blog from './page/blog';
import LearningUseState  from './page/LearningUseState';



function App() {
  

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/home' element={<Home/>}/>
      <Route path="!" element={<Blog />} />
      <Route path='/blog' element={<Blog/>}/>
      <Route path="@" element={<Create />} />
      <Route path='/create' element={<Create/>}/>
      <Route path="#" element={<Edit />} />
      <Route path='/edit' element={<Edit/>}/>

      <Route path='/LearningUseState' element={<LearningUseState/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App;
