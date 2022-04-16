import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../configs/firebase.config";

class UserProfile {
  static _prefix = 'sneeze-beat'
  static ADMIN_ROLE = `${UserProfile._prefix}-admin`
  static USER_ROLE = `${UserProfile._prefix}-user`
  static _collectionRef = collection(db, 'tb_user_profile')
  static _docRef = doc(collection(db, 'tb_user_profile'))
  
  static createUser = (username, email) => {
    return addDoc(UserProfile._collectionRef, {
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