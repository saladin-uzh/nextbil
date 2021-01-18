import React, { FunctionComponent } from 'react'
import { createGlobalStyle } from 'styled-components'
import { Formik } from 'formik'
import * as Yup from 'yup'

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

const App: FunctionComponent = () => (
  <>
    <AppStyles />
    <main>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          country: undefined,
          gender: undefined,
          arePoliciesAccepted: false,
        }}
        onSubmit={values => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string()
            .matches(/[a-zA-Z]+/, 'Please enter a valid name')
            .required('This field is required'),
          email: Yup.string().email('Please enter a valid email').required('This field is required'),
          password: Yup.string().min(6, 'Please enter a valid password').required('This field is required'),
          country: Yup.string().required('You must select your country'),
          gender: Yup.string().required('You must select the gender'),
          arePoliciesAccepted: Yup.boolean().isTrue('You must accept policies').required('You must accept policies'),
        })}
        validateOnBlur
      >
        {({ values, touched, errors, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (
          <Form onSubmit={handleSubmit}>
            <h1>Create a new account</h1>
            <Input
              name="name"
              label="Enter your name"
              value={values.name}
              onInputChange={handleChange}
              onInputBlur={handleBlur}
              error={touched.name && errors.name}
            />
            <Input
              name="email"
              type="email"
              label="Email"
              value={values.email}
              onInputChange={handleChange}
              onInputBlur={handleBlur}
              icon={<Envelope />}
              error={touched.email && errors.email}
            />
            <Input
              name="password"
              type="password"
              label="Password"
              value={values.password}
              onInputChange={handleChange}
              onInputBlur={handleBlur}
              icon={<Lock />}
              error={touched.password && errors.password}
            />
            <Select name="country" label="Select country" options={data.countries} />
            <Radio name="gender" options={data.genders} />
            <Checkbox
              name="arePoliciesAccepted"
              label={
                <>
                  Accept <a href="#terms">terms</a> and <a href="#conditions">conditions</a>
                </>
              }
              onInputChange={handleChange}
              onInputBlur={handleBlur}
              error={touched.arePoliciesAccepted && errors.arePoliciesAccepted}
            />
            <Button label="Sign Up" isDisabled={!dirty || !isValid} />
          </Form>
        )}
      </Formik>
    </main>
  </>
)

export default App
