import Home from './Pages/Home'
import Header from './components/Header'
import SingleVideo from './components/SingleVideo'

import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App bg-black">
      <Header />
      {
        <Routes>
          <Route path="/" element={<Home />} exact={true} />
          <Route path="/item/:id" element={<SingleVideo />} exact={true} />
        </Routes>
      }
    </div>
  )
}

export default App
