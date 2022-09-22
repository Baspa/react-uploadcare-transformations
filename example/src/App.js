import React from 'react'

import { UCTransformation } from 'react-uploadcare-transformations'
import 'react-uploadcare-transformations/dist/index.css'

const App = () => {
  return <UCTransformation uuid='abc' preview={{ width: 300, height: 300 }} />
}

export default App
