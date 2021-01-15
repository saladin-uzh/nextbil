import React, { FunctionComponent } from 'react'
import { createGlobalStyle } from 'styled-components'
import { colors, typography } from './constants'

import { Form } from './components/Form.sc'
import Input from './components/Input'
import Select from './components/Select'
import Radio from './components/Radio'
import Checkbox from './components/Checkbox'
import Button from './components/Button'
import Envelope from './components/Icons/Envelope.svg'
import Lock from './components/Icons/Lock.svg'

const AppStyles = createGlobalStyle`
  body {
    margin: 0;
    background: ${colors.blue0};
    font-family: Roboto;
    font-size: ${typography[1].fontSize};

    main {
      width: 100vw;
      height: 100vh;
      padding: 0;
      margin: 0;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

const App: FunctionComponent = () => {
  return (
    <>
      <AppStyles />
      <main>
        <Form>
          <h1>Create a new account</h1>
          <Input label="Enter your name" />
          <Input type="email" label="Email" icon={<Envelope />} />
          <Input type="password" label="Password" icon={<Lock />} />
          <Select label="Select country" options={['option 1', 'option 2', 'option 3']} />
          <Radio options={['Male', 'Feemale']} />
          <Checkbox label="Accept terms and conditions" />
          <Button label="Sign Up" />
        </Form>
      </main>
    </>
  )
}

export default App
