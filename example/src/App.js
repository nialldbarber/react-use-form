import React from 'react'
import { useMyHook } from '@nialldbarber/react-use-form'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App