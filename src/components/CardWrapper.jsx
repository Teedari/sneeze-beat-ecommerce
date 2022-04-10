import React from 'react'

const CardWrapper = ({children, className}) => {
  return (
    <div className={'bg-slate-900 rounded-2xl shadow-xl p-8 relative before:absolute before:contents-[""] before:w-2 before:h-full before:bg-red-700 before:left-0 before:top-0 before:rounded-l-2xl '.concat(className)}>{children}</div>
  )
}

export default CardWrapper