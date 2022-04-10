import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomTable from '../../../components/table.custom'
import CustomLayout from '../../../layouts'
import Message from '../../../models/Message'
import messageFetchThunk from '../../../state_management/thunks/message/message.fetch.thunk'

const Messages = () => {
  const dispatch = useDispatch()
  const messageState = useSelector( state => state.message)
  useEffect(() => {
    dispatch(messageFetchThunk())
  }, [dispatch])
  
  return (
    <CustomLayout admin>
      <div className='heading'>
        <h4>Messages</h4>
        <CustomTable dataSource={messageState.list} columns={Message.columns()} />
      </div>
    </CustomLayout>
  )
}

export default Messages