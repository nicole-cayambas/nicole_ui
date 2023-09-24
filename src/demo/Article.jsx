import { Fragment } from "react"
import { Button } from "../lib"

const Article = () => {
  return (
    <Fragment>
      <div style={{ padding: '3rem', maxWidth: '500px' }}>
        <h1>Hello, World!</h1>
        <p>Welcome to nicole_ui! A simple package of UI components for simple websites.</p>
        <Button color="info" onClick={() => location = 'buttons'}>Buttons -></Button>
      </div>
    </Fragment>
  )
}

export default Article