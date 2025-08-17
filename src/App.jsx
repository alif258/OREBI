import './App.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Shop from './components/pages/Shop'
import Journal from './components/pages/Journal'
import Contacts from './components/pages/Contacts'
import Error from './components/pages/Error'
import RootLayOut from './components/layout/RootLayOut'
import { Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<RootLayOut />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="journal" element={<Journal />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<Error />} />


        </Route>
      </Routes>

    </>
  )
}

export default App
