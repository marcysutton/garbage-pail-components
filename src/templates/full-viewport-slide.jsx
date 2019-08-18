import React from 'react'
import Slide from './slide'

export default ({ className = '', children }) => (
  <div className={`${className} full-screen-slide`}
    style={{
        alignItems: 'center',
        display: 'flex',
        width: '100vw',
        height: '100vw'
    }}
  >
    <Slide>
      {children}
      </Slide>
  </div>
)
