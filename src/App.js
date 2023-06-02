import React from "react"
import "./App.css"
import ListOfGifs from "./Components/ListOfGifs"
import { Link, Route } from "wouter"

export default function App() {  

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link href="/gif/colombia">Gifs de Colombia</Link>
        <Link href="/gif/chile">Gifs de Chile</Link>
        <Link href="/gif/argentina">Gifs de Argentina</Link>
        <Route path="/gif/:keyword"component={ListOfGifs} />
      </section>
    </div>
)}
