import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../configs/firebase.config";

class User {
  static usersDocRef = doc(collection(db, 'users'))
  static async create(user_role, name, uid){
    const save  = await setDoc(User.usersDocRef, {user_role, name, uid})
    console.log(save)
  }
}


export default User;