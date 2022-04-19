import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../configs/firebase.config";
import PersistentStorage from "../utils/persistent_storage/storage.persistent";

class UserProfile {
  static _prefix = 'sneeze-beat'
  static ADMIN_ROLE = `${UserProfile._prefix}-admin`
  static USER_ROLE = `${UserProfile._prefix}-user`
  static _collectionRef = collection(db, 'tb_user_profile')
  static _docRef = uid => doc(db, 'tb_user_profile', uid)
  
  static createUser = (uid, username, email) => {
    return setDoc(UserProfile._docRef(uid), {
      username,
      email,
      userRole: UserProfile.USER_ROLE,
      photo: ""
    })
  }
  static createAdminUser = (username, email) => {
    return addDoc(UserProfile._collectionRef, {
      username,
      email,
      userRole: UserProfile.ADMIN_ROLE,
      photo: ""
    })
  }
  static getUser = uid => {
    return getDoc(UserProfile._docRef(uid))
  }
  static convert = snaphots => {
    const data = []
    snaphots.forEach( snapshot => {
      data.push({...snapshot.data()})
    })
    return data
  }
  static isAdmin = () => PersistentStorage.getUserRole() === UserProfile.ADMIN_ROLE
  static isUser = user_role => user_role === UserProfile.USER_ROLE
}


export default UserProfile;