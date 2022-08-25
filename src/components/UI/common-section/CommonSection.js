import React from 'react'
import '../../../styles/common-section.css'

function CommonSection(props) {
  return (
    <div className='common-section'>
      <h2 className='title-section'>{props.title}</h2>
    </div>
  )
}

export default CommonSection
