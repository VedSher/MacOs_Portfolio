import { Dock, Navbar, Welcome } from '#components'
import { Finder, Resume, Safari, Text, Image, Contact } from '#windows'
import Terminal from '#windows/Terminal'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import React from 'react'

gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Text />
      <Image />
      <Finder />
      <Contact />
    </main>
  )
}

export default App