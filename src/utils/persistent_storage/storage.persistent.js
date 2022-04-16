import UserProfile from "../../models/User"

class PersistentStorage {
  static _PREFIX = 'sneeze-beat'
  static _IS_AUTHENTICATED = 'isAuthenticated'
  static _AUTH_USER_INFO = 'authUserInfo'
  static _USER_ROLE = 'userRole'
  static _USER_HAS_LOGGED_IN = 'userHasLoggedIn'
  /** values */
  static _ERROR_KEY_DOES_NOT_EXIT = `${PersistentStorage._PREFIX}-ERROR-NULL`

  static __generateKey = key => `${PersistentStorage._PREFIX}__${key}`;

  static __setStorageData = (key, value) => {
    localStorage.setItem(PersistentStorage.__generateKey(key), value)
  }

  static __getStorageData = key => {
    try{
      return PersistentStorage.__validateStorageData(key)
    }
    catch(e){
      return PersistentStorage._ERROR_KEY_DOES_NOT_EXIT
    }
  }

  static __validateStorageData = key => {
    const value = JSON.parse(localStorage.getItem(PersistentStorage.__generateKey(key)))
    return value !== null ? value : PersistentStorage._ERROR_KEY_DOES_NOT_EXIT
  }

  static __setUserInfo = info => {
    PersistentStorage.__setStorageData(PersistentStorage._AUTH_USER_INFO, info)
  }
  static getUserInfo = () => PersistentStorage.__getStorageData(PersistentStorage._AUTH_USER_INFO)

  static __setUserRole = (user_role) => {

     return PersistentStorage.__setStorageData(PersistentStorage._USER_ROLE, user_role)
  }
  static getUserRole = () => PersistentStorage.__getStorageData(PersistentStorage._USER_ROLE)


  static __setUserHasLoggedIn = (flag=true) => {
    PersistentStorage.__setStorageData(PersistentStorage._USER_HAS_LOGGED_IN, flag)
  }

  static getUserHasLoggedIn = () =>  {
    return PersistentStorage.__getStorageData(PersistentStorage._USER_HAS_LOGGED_IN) === PersistentStorage._ERROR_KEY_DOES_NOT_EXIT ? false : true;
  }

  static activateUser = (data, user_role) => {
    PersistentStorage.__setUserHasLoggedIn()
    PersistentStorage.__setUserRole(user_role)
    PersistentStorage.__setUserInfo(data)
  }
  static deactivateUser = () => {
    PersistentStorage.__clearStorageData()
  }

  static __clearStorageData = () => 
    localStorage.clear()
}

export default PersistentStorage