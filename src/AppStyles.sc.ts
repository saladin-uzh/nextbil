import { createGlobalStyle } from 'styled-components'
import { colors, typography } from './constants'

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

export default AppStyles
