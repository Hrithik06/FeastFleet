 export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  export const HOME_API =  "https://thingproxy.freeboard.io/fetch/"+encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9328638&lng=77.6139346&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

  // export const HOME_API = 'https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9328638&lng=77.6139346&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
  
  export const UPDATE_LIST = 'https://corsproxy.org/?' + encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/update')
  // ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9328638&lng=77.6139346&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

  export const MENU_API = "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D12.9073473%26lng%3D77.6011195%26restaurantId%3D"

  
//  const LOGO_URL = "../../icons/logo.png";


// export {CDN_URL}