import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Logo from './components/header/Logo'
import Menu from './components/header/Menu'
import BasketAndUser from './components/header/BasketAndUser'
import ASide from './components/main/ASide'
import Content from './components/main/Content'
import ContentBody from './components/content/ContentBody'

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
