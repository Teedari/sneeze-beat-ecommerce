import { message } from "antd"
import { signOut } from "firebase/auth"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { auth } from "../../configs/firebase.config"
import { deactivateUser } from "../../state_management/slices/auth.slice"
import PersistentStorage from "../persistent_storage/storage.persistent"
import urls from "../routes/page.routes"

const useLogout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logout = useCallback(() => {
    signOut(auth).then(success => {
      dispatch(deactivateUser())
      PersistentStorage.deactivateUser()
      navigate(urls.homepage)
      message.success("User logout successfully")
    })
    .catch( err => {
      message.error('Something occured, please try again!!')
    })

  }, [navigate, dispatch])

  return () => logout()
}

export default useLogout