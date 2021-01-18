import styled from 'styled-components'

import { radii, spacings } from '../constants'

export const Form = styled.form`
  width: 400px;
  padding: ${spacings.large};
  box-sizing: border-box;

  background: white;
  border-radius: ${radii.normal};

  h1 {
    font-size: 2em;
    text-align: center;
    margin: 0 0 ${spacings.xLarge};
  }
`
