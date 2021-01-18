import React from 'react'
import { render } from '@testing-library/react'

import App from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://homework.nextbil.com/graphql',
  cache: new InMemoryCache(),
})

it('App render', () => {
  const { getByTestId } = render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )

  expect(getByTestId('checkbox-policies')).not.toBeChecked()
  expect(getByTestId('button-signup')).toBeDisabled()
  expect(getByTestId('input-name')).toHaveValue('')
  expect(getByTestId('input-email')).toHaveValue('')
  expect(getByTestId('input-password')).toHaveValue('')
  expect(getByTestId('radio-gender')).toBeValid()
  expect(getByTestId('select-country')).toBeValid()
})
