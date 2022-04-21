import React from 'react'
import { useSelector } from 'react-redux'
import CustomTable from '../../../components/table.custom'
import CustomLayout from '../../../layouts'
import UserProfile from '../../../models/User'

const Users = () => {
  const authUserState = useSelector( state => state.auth.users)
  return (
    <CustomLayout admin>
      <div className='heading'>
        <h4>Users</h4>
        <CustomTable dataSource={authUserState.list} columns={UserProfile.columns()} />
      </div>
    </CustomLayout>
  )
}

export default Users