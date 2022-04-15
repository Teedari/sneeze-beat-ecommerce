import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@firebase/auth";
import { message } from "antd";
import { auth } from '../configs/firebase.config'
import PersistentStorage from "../utils/persistent_storage/storage.persistent";

class Auth {
  static signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  static signUpWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  static logoutUser = async () => {
    try {
      const response = await signOut(auth)
      PersistentStorage.deactivateUser()
      message.success('User logout successfully')
    } catch (error) {
      message.error('Something occured!, try again')
    }
  }
}

export default Auth