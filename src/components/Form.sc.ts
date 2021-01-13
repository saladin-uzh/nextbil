import styled from 'styled-components'
import { spacings } from '../constants'

export const Form = styled.form`
  width: 20%;
  min-width: 400px;
  height: 70vh;
  /* min-height: 605px; */
  padding: ${spacings.large};

  background: white;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2em;
    text-align: center;
    margin: 0 0 ${spacings.xLarge};
  }
`
