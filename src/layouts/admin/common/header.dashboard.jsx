import { Avatar, Input } from 'antd'
import React from 'react'
import JcoleImg from '../../../assets/images/people/people02.jpeg'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
const HeaderDashboard = () => {
  const authState = useSelector( state => state.auth)
  return (  
    <div className='md:h-full w-full flex flex-row  items-center justify-center md:justify-between'>
      <Input.Search className='hidden md:block input-search w-6/12 bg-slate-900  rounded-full' />
      <div>
      <Avatar size='large' className='bg-dark-300 mr-4 text-primary' icon={<FontAwesomeIcon className='text-xl' icon={faBell} />} />
        <span className='font-thin text-slate-200'><Avatar size='large' src={JcoleImg} />  {authState.userInfo.username}</span>
      </div>
    </div>
  )
}

export default HeaderDashboard