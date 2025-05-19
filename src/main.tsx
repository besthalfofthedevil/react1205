import React from 'react';
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
} 
const appRoot = createRoot(rootElement)

const data = [1,2,3,4,5]

const reactElement = <ul>
  {data.map((item) => (
    <li key={item}>{item}</li>
  ))}
</ul>

appRoot.render(reactElement)
