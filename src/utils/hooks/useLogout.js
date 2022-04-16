import { message } from "antd"
import { signOut } from "firebase/auth"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../../configs/firebase.config"
import PersistentStorage from "../persistent_storage/storage.persistent"
import urls from "../routes/page.routes"

const useLogout = () => {
  const navigate = useNavigate()
  const logout = useCallback(() => {
    signOut(auth).then(success => {
      PersistentStorage.deactivateUser()
      navigate(urls.homepage)
      message.success("User logout successfully")
    })
    .catch( err => {
      message.error('Something occured, please try again!!')
    })

  }, [navigate])

  return () => logout()
}

export default useLogout