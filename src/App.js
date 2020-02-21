import React from 'react'
import { css, Global } from '@emotion/core'

const App = () => {
  return (
    <div
      css={css`
        display: grid;
        place-items: center;
        height: 100vh;
      `}
    >
      <Global
        styles={css`
          html,
          body{
            overflow: hidden;
          }
        `}
      />
      这是一个eslint+prettier的实践Demo
    </div>
  )
}

export default App
