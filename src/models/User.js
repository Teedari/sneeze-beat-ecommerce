import { addDoc, collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../configs/firebase.config";
import PersistentStorage from "../utils/persistent_storage/storage.persistent";

class UserProfile {
  static _prefix = 'sneeze-beat'
  static ADMIN_ROLE = `${UserProfile._prefix}-admin`
  static USER_ROLE = `${UserProfile._prefix}-user`
  static _collectionRef = collection(db, 'tb_user_profile')
  static _docRef = uid => doc(db, 'tb_user_profile', uid)
  
  static createUser = (uid, username, email, type) => {
    return setDoc(UserProfile._docRef(uid), {
      username,
      email,
      userRole: type === 'user' ? UserProfile.USER_ROLE : type === 'admin' ? UserProfile.ADMIN_ROLE : '',
      photo: ""
    })
  }
  static getUser = uid => {
    return getDoc(UserProfile._docRef(uid))
  }
  static getUsers = () => {
    return getDocs(UserProfile._collectionRef)
  }
  
  static convert = snaphots => {
    const data = []
    snaphots.forEach( snapshot => {
      data.push({key: snapshot.id, ...snapshot.data()})
    })
    return data
  }
  static isAdmin = () => PersistentStorage.getUserRole() === UserProfile.ADMIN_ROLE
  static isUser = user_role => user_role === UserProfile.USER_ROLE

  static columns = () => ([
    {title: 'Username', dataIndex: 'username', key: 'username'},
    {title: 'Email', dataIndex: 'email', key: 'email'},
    {title: 'Role', dataIndex: 'userRole', key: 'userRole',
    render: (_, user) => {
      if(user?.userRole === UserProfile.ADMIN_ROLE){
        return <strong className="text-green-500">ADMIN</strong>
      }
      if(user?.userRole === UserProfile.USER_ROLE){
        return <strong className="text-primary">USER</strong>
      }
      return <strong className="text-red-500">UNSPECIFIED USER</strong>
    }
  },
  ])
}


export default UserProfile;