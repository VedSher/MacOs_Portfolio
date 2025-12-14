import { Dock, Navbar, Welcome } from '#components'
import { Safari } from '#windows'
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
    </main>
  )
}

export default App