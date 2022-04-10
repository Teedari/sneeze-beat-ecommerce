import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const CustomLink = ({to, children, ...props}) => {
  const resolvedPath = useResolvedPath(to);
  const match = useMatch({path: resolvedPath.pathname, end:true})
  return (
    <Link to={to} {...props} className={match && 'custom-menu-selected-item'}>
      {children}
    </Link>
  )
}

export default CustomLink