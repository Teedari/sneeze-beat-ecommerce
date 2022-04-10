import { addDoc, collection, deleteDoc, doc, getDocs, serverTimestamp, setDoc, updateDoc } from "firebase/firestore"
import { db } from "../configs/firebase.config"

class Beat {
  static _tb_name = 'tb_beat'
  static _collectionRef = collection(db, Beat._tb_name)
  static _docRef = key => doc(db, Beat._tb_name, key)


  static create = (name, genre, bpm, general_price, exclusive_price, path, coverUrl="", beatUrl="", exclusive_url="") => {
    return addDoc(Beat._collectionRef, {
      name,
      genre,
      bpm,
      path,
      exclusive: {
        label: 'EXCLUSIVE',
        price: exclusive_price,
        url: exclusive_url 
      },
      general: {
        label: 'MP3',
        price: general_price,
      },
      assets: {
        cover: coverUrl,
        beat: beatUrl,
      },
      created_at: serverTimestamp()
    })
  }

  static get = () => {
    return getDocs(Beat._collectionRef)
  }

  static update = (key, name, genre, bpm, general_price, exclusive_price, exclusive_url="") => {
    return updateDoc(Beat._docRef(key), {
      name,
      genre,
      bpm,
      exclusive: {
        label: 'EXCLUSIVE',
        price: exclusive_price,
        url: exclusive_url
      },
      general: {
        label: 'MP3',
        price: general_price,
      },
    })
  }
  static delete = key => {
    return deleteDoc(Beat._docRef(key))
  }

  static convert = snapshots => {
    const data = []
    snapshots.forEach( snaphot => {
      data.push({
        key: snaphot.id,
        ...snaphot.data(),
      })
    })
    return data
  }
  static convertToState = ({key, name, genre, bpm, general_price, exlusive_price, path, coverUrl, beatUrl, exclusive_url=""}) => ({
    name,
    genre,
    bpm,
    exclusive: {
      label: 'EXCLUSIVE',
      price: exlusive_price,
    },
    general: {
      label: 'MP3',
      price: general_price,
    }
  })
}


export default Beat