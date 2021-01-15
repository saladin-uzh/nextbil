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
import { Formik, useFormik } from 'formik'

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
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      country: undefined,
      gender: null,
      arePoliciesAccepted: false,
    },
    onSubmit: values => console.log(values),
    validateOnBlur: true,
    validationSchema: null, // TODO: Check out yup package
  })

  return (
    <>
      <AppStyles />
      <main>
        <Form onSubmit={handleSubmit}>
          <h1>Create a new account</h1>
          <Input
            name="name"
            label="Enter your name"
            value={values.name}
            onInputChange={handleChange}
            hasError
            errorMessage="Please enter a valid name"
          />
          <Input
            name="email"
            type="email"
            label="Email"
            value={values.email}
            onInputChange={handleChange}
            icon={<Envelope />}
            errorMessage="Please enter a valid email"
            hasError
          />
          <Input
            name="password"
            type="password"
            label="Password"
            value={values.password}
            onInputChange={handleChange}
            icon={<Lock />}
            errorMessage="Please enter a valid password"
            hasError
          />
          <Select
            name="country"
            label="Select country"
            value={values.country}
            onInputChange={handleChange}
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
