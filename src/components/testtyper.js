import React, { useEffect, useState } from 'react'
import './test.css'
const Test = () => {
  const [refresh, setrefresh] = useState(false)
  useEffect(() => {
    return () => {
      setrefresh({ refresh: !refresh })
    }
  }, [refresh])
  return (
    <div class="css-typing">
      <p>Typed text 1</p>
      <p>Typed text 2 Longer</p>
      <p>Typed text 3</p>
    </div>
  )
}

export default Test
