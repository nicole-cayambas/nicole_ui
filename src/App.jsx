import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ButtonGroup from './demo/ButtonGroup'
import Article from './demo/Article'

function App() {
  const page = {
    ["/"]: <Article />,
    ['/buttons']: <ButtonGroup />
  }
  return (
    <>
      {page[location.pathname]}
    </>
  )
}

export default App
