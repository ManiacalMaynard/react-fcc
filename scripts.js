import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './Menu.js'

const root = document.getElementById('root')

const Logo = () => {
  return ( 
    <img src="./images/react-logo.png" className = "nav-logo" />
  )
}


const Header = () => {
  return (
    <header>
      <Logo />
      <Menu />
    </header>
  )
}

const List = () => {
  return (
    <div className = "copy">
      <h1>Why I'm learning React</h1>
      <ol>
        <li>I wanna job you jabroni</li>
        <li>UI Devs need to know it</li>
        <li>Expands my opportunities</li>
        <li>It's fun to learn new things!</li>
      </ol>
    </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <small>I am not a teapot!</small>
    </footer>
  )
}

const Page = () => {
  return (
    <div>
      <Header />
      <List />
      <Footer />
    </div>
  )
}


ReactDOM.render(
  <Page />,
  root
 )