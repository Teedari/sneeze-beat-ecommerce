import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../configs/firebase.config";

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
}


export default UserProfile;