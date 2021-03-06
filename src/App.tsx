import React, { FunctionComponent, useState } from 'react'
import { Formik, FormikValues } from 'formik'
import * as Yup from 'yup'
import { useMutation } from '@apollo/client'

import AppStyles from './AppStyles.sc'

import { genders, countries } from './data'

import { Form } from './components/Form.sc'
import Input from './components/Input'
import Select from './components/Select'
import Radio from './components/Radio'
import Checkbox from './components/Checkbox'
import Button from './components/Button'
import Envelope from './components/Icons/Envelope.svg'
import Lock from './components/Icons/Lock.svg'

import { SIGNUP } from './gql/mutations'

const initialValues = {
  name: '',
  email: '',
  password: '',
  country: undefined,
  gender: undefined,
  arePoliciesAccepted: false,
}

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/[a-zA-Z]+/, 'Please enter a valid name')
    .required('This field is required'),
  email: Yup.string().email('Please enter a valid email').required('This field is required'),
  password: Yup.string().min(6, 'Please enter a valid password').required('This field is required'),
  country: Yup.string().required('You must select your country'),
  gender: Yup.string().required('You must select the gender'),
  arePoliciesAccepted: Yup.boolean().isTrue('You must accept policies').required('You must accept policies'),
})

const App: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [signup] = useMutation(SIGNUP)

  const handleSubmit = ({ name, email, password, country, gender }: FormikValues) => {
    setIsLoading(true)
    signup({
      variables: { userData: { name, email, password, country, gender } },
    }).then(
      ({
        data: {
          signup: { id },
        },
      }) => {
        setIsLoading(false)
        alert(`Signup successful!\r\nUser ID: ${id}`)
      },
      error => {
        setIsLoading(false)
        alert(error.message)
      }
    )
  }

  return (
    <>
      <AppStyles />
      <main>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
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
                dataTestId="input-name"
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
                dataTestId="input-email"
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
                dataTestId="input-password"
              />
              <Select name="country" label="Select country" options={countries} dataTestId="select-country" />
              <Radio name="gender" options={genders} dataTestId="radio-gender" />
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
                dataTestId="checkbox-policies"
              />
              <Button
                label="Sign Up"
                isDisabled={!dirty || !isValid}
                isLoading={isLoading}
                dataTestId="button-signup"
              />
            </Form>
          )}
        </Formik>
      </main>
    </>
  )
}

export default App
