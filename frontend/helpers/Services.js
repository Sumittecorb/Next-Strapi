import { API_URL } from "./api_url";
import Http from "./HTTPRequest";

export const product_listing = async () => {
  let response = await Http.get(API_URL.Product + `?populate=img`, {});
  return response;
};
export const product_detail = async (_id) => {
  let response = await Http.get(API_URL.Product + `/${_id}?populate=img`, {});
  return response;
};