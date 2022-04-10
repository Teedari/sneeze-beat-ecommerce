import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addDoc, collection, doc, getDocs } from 'firebase/firestore'
import { db } from '../configs/firebase.config'

class Message {
  static _tb_name = 'tb_message'
  static _collectionRef = collection(db, Message._tb_name)


  static create = (name, email, message, is_user=false) => {
    return addDoc(Message._collectionRef, {
      name,
      email,
      message,
      is_user,
      is_unread: true
    })
  }

  static get = () => {
    return getDocs(Message._collectionRef)
  }

  static convert = snapshots => {
    const data = []
    snapshots.forEach( snapshot =>  {
      data.push({key: snapshot.id, ...snapshot.data()})
    })
    return data
  }

  static columns = () => {
    return [
      {title: 'Name', dataIndex: 'name', key: 'name'},
      {title: 'Email', dataIndex: 'email', key: 'email'},
      {title: 'Status', dataIndex: 'is_unread', key: 'is_unread', render: (_, message) => {
        return message.is_unread ? <td className='text-green-600 font-semiBold'>Unread</td>:
        <td className='text-slate-600 font-semiBold'>Read</td>
      }},
      {title: 'User Status', dataIndex: 'is_user', key: 'is_user'},
    ]
  }
}


export default Message