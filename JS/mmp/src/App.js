import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Logo from './components/header/Logo'
import Menu from './components/header/Menu'
import BasketAndUser from './components/header/BasketAndUser'
import ASide from './components/main/ASide'
import Content from './components/main/Content'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Logo />
          <Menu />
          <BasketAndUser />
        </header>

        <main>
          <ASide />
          <Content />
        </main>

        {/* <footer></footer> */}
      </div>
    </BrowserRouter>
  )
}

export default App
