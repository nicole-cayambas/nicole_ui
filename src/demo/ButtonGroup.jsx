import { Fragment } from "react"
import { Button } from "../lib"

const ButtonGroup = () => {
  return (
    <Fragment>
      <div style={{ width: '100vw', height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Buttons</h1>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
          <Button color={'success'} variant='outlined' size='small'>Button</Button>
          <Button color={'success'} variant='outlined' size='medium'>Button</Button>
          <Button color={'success'} variant='outlined' size='large'>Button</Button>
          <Button color={'success'} variant='contained' size='small'>Button</Button>
          <Button color={'success'} variant='contained' size='medium'>Button</Button>
          <Button color={'success'} variant='contained' size='large'>Button</Button>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
          <Button color={'error'} variant='outlined' size='small'>Button</Button>
          <Button color={'error'} variant='outlined' size='medium'>Button</Button>
          <Button color={'error'} variant='outlined' size='large'>Button</Button>
          <Button color={'error'} variant='contained' size='small'>Button</Button>
          <Button color={'error'} variant='contained' size='medium'>Button</Button>
          <Button color={'error'} variant='contained' size='large'>Button</Button>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
          <Button color={'info'} variant='outlined' size='small'>Button</Button>
          <Button color={'info'} variant='outlined' size='medium'>Button</Button>
          <Button color={'info'} variant='outlined' size='large'>Button</Button>
          <Button color={'info'} variant='contained' size='small'>Button</Button>
          <Button color={'info'} variant='contained' size='medium'>Button</Button>
          <Button color={'info'} variant='contained' size='large'>Button</Button>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
          <Button color={'warning'} variant='outlined' size='small'>Button</Button>
          <Button color={'warning'} variant='outlined' size='medium'>Button</Button>
          <Button color={'warning'} variant='outlined' size='large'>Button</Button>
          <Button color={'warning'} variant='contained' size='small'>Button</Button>
          <Button color={'warning'} variant='contained' size='medium'>Button</Button>
          <Button color={'warning'} variant='contained' size='large'>Button</Button>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
          <Button color={'neutral'} variant='outlined' size='small'>Button</Button>
          <Button color={'neutral'} variant='outlined' size='medium'>Button</Button>
          <Button color={'neutral'} variant='outlined' size='large'>Button</Button>
          <Button color={'neutral'} variant='contained' size='small'>Button</Button>
          <Button color={'neutral'} variant='contained' size='medium'>Button</Button>
          <Button color={'neutral'} variant='contained' size='large'>Button</Button>
        </div>
      </div>
    </Fragment>
  )
}

export default ButtonGroup