import React from 'react'

import { UCTransformation } from 'react-uploadcare-transformations'
import 'react-uploadcare-transformations/dist/index.css'

const App = () => {
  return (
    <UCTransformation
      uuid='83c3bad4-b4bc-4cea-8702-88ee61b0b015'
      preview={{ width: 300, height: 300 }}
      setFill={{ color: 'ff0000' }}
    />
  )
}

export default App
