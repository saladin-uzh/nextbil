import React, { FunctionComponent } from 'react'
import { createGlobalStyle } from 'styled-components'
import { colors, data, typography } from './constants'

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

      a {
        color: ${colors.blue1};
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
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
          <Input label="Enter your name" errorMessage="Please enter a valid name" hasError />
          <Input type="email" label="Email" icon={<Envelope />} errorMessage="Please enter a valid email" hasError />
          <Input
            type="password"
            label="Password"
            icon={<Lock />}
            errorMessage="Please enter a valid password"
            hasError
          />
          <Select
            label="Select country"
            options={data.countries}
            errorMessage="You must select your country"
            hasError
          />
          <Radio options={data.genders} errorMessage="You must select the gender" hasError />
          <Checkbox
            label={
              <>
                Accept <a href="#terms">terms</a> and <a href="#conditions">conditions</a>
              </>
            }
            errorMessage={'You must accept policies'}
            hasError
          />
          <Button label="Sign Up" isDisabled />
        </Form>
      </main>
    </>
  )
}

export default App
