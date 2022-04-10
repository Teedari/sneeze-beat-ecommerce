import { doc, collection, addDoc, serverTimestamp, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../configs/firebase.config";
class Genre {
  static _table_name = "tb_genre";
  static _genreCollectionRef = collection(db, Genre._table_name);

  static create =  (name, description = "") => {
    return addDoc(Genre._genreCollectionRef, {
      name,
      description,
      created_at: serverTimestamp()
    });
  };
  static all = () => {
    return getDocs(Genre._genreCollectionRef)
  }

  static convert_to_genre = (snapshots) => {
    let data = []
    // return snapshots.map( snapshot => ({key: snapshot.id, ...snapshot.data()}))
    snapshots.forEach( snapshot => {
      data.push({
        key: snapshot.id,
        ...snapshot.data()
      })
    })
  
    return data
  }

  static delete = (key) => {
    return deleteDoc(doc(db, Genre._table_name, key.toString()))
  }
  
}

export default Genre;
