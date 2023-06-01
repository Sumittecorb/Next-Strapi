import { API_URL } from "./api_url";
import Http from "./HTTPRequest";


export const listing_resource = async () => {
   
    let response = await Http.get(API_URL.LOREM_IPSUM, {})
    return response
}
// export const listing_postType = async (data) => {
//     console.log("data",data)
//     let response = await Http.post(API_URL.Gaurav, {...data},{})
//     return response
// }
// console.log("data",response)