import React from 'react'

const CustomizedCardWrapper = ({children,...props}) => {
  return (
    <div className={'dashboard-card '.concat(props.className)}>
      {children}
  </div>
  )
}

export default CustomizedCardWrapper