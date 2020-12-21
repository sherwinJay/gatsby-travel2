/** @jsx jsx */
import { Global, css, jsx } from "@emotion/react"

export const GlobalStyle = () => {
  return(
    <Global
      styles={css`
        body {
          font-family: 'Roboto', sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          position: relative;
          min-height: 100vh;
        }
      `}
    />
  )
};

export const pageWrappper = css`
  min-height: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;