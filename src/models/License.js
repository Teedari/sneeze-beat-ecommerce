import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../configs/firebase.config"

class License {
  static _tb_name = 'tb_license'
  static _collectionRef = collection(db, License._tb_name)
  static _docRef = key => doc(db, License._tb_name, key)


  static create = (license_content, price_tag) => {
    return addDoc(License._collectionRef, {
      license_content,
      price_tag,
      created_at: serverTimestamp()
    })
  }

  static get = () => {
    return getDocs(License._collectionRef)
  }

  static update = (key, license_content, price_tag) => {
    return updateDoc(License._docRef(key), {
      license_content,
      price_tag,
    })
  }
  static delete = key => {
    return deleteDoc(License._docRef(key))
  }

  static convert = snapshots => {
    const data = []
    snapshots.forEach( snaphot => {
      data.push({
        key: snaphot.id,
        ...snaphot.data()
      })
    })
    return data
  }

  static columns = () => ([
    {title: 'Price'}
  ])
}


export default License