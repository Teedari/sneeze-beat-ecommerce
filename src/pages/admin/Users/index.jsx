import React from 'react'
import CustomTable from '../../../components/table.custom'
import CustomLayout from '../../../layouts'

const Users = () => {
  return (
    <CustomLayout admin>
      <div className='heading'>
        <h4>Users</h4>
        <CustomTable />
      </div>
    </CustomLayout>
  )
}

export default Users