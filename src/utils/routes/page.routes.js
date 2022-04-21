const BASE_PAGE_URL = '/'
const BASE_DASHBOARD_URL = `${BASE_PAGE_URL}dashboard`

export const user_urls = {
  'homepage': BASE_PAGE_URL,
  '404': `${BASE_PAGE_URL}404`,
  'signup': `${BASE_PAGE_URL}register`,
  'signin': `${BASE_PAGE_URL}login`,
  'contact': `${BASE_PAGE_URL}contact-us`,
  'beat': `${BASE_PAGE_URL}beats`,
  'beat_detail': `${BASE_PAGE_URL}beats/:beatID`,
  'checkout': `${BASE_PAGE_URL}checkout`,
}


export const admin_urls = {
  'dashboard': BASE_DASHBOARD_URL,
  'genre': `${BASE_DASHBOARD_URL}/genre`,
  'genre_list': `${BASE_DASHBOARD_URL}/genre/list`,

  'dashboard_beat_create':  `${BASE_DASHBOARD_URL}/beat`,
  'dashboard_beat_list':  `${BASE_DASHBOARD_URL}/beat/list`,
  'dashboard_beat_update':  `${BASE_DASHBOARD_URL}/beat/update/:ID`,

  'dashboard_messages':  `${BASE_DASHBOARD_URL}/messages`,

  'dashboard_license':  `${BASE_DASHBOARD_URL}/license`,
  'dashboard_license_create':  `${BASE_DASHBOARD_URL}/license/create`,

  'dashboard_user':  `${BASE_DASHBOARD_URL}/user`,
  'dashboard_user_create_admin':  `${BASE_DASHBOARD_URL}/user/create/admin`,
  
  'dashboard_settings':  `${BASE_DASHBOARD_URL}/settings`,
}
const urls = {
 ...user_urls, ...admin_urls
}



export default urls;