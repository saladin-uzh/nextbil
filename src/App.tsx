import React, { FunctionComponent } from 'react'
import { createGlobalStyle } from 'styled-components'
import { colors } from './constants'

import { Form } from './components/Form.sc'
import Input from './components/Input'
import ArrowSvg from './components/Icons/Arrow.svg'
import Select from './components/Select'
import Radio from './components/Radio'
import Checkbox from './components/Checkbox'
import Button from './components/Button'

const AppStyles = createGlobalStyle`
  body {
    margin: 0;
    background: ${colors.blue0};
    font-family: Roboto;
    font-size: 14px;

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

const App: FunctionComponent = () => (
  <>
    <AppStyles />
    <main>
      <ArrowSvg />
      <Form>
        <h1>Create a new account</h1>
        <Input />
        <Input type="email" />
        <Input type="password" />
        <Select options={['option 1', 'option 2', 'option 3']} />
        <Radio />
        <Radio />
        <Checkbox />
        <Button label="Sign Up" />
      </Form>
    </main>
  </>
)

export default App
