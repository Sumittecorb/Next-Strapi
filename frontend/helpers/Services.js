import { API_URL } from "./api_url";
import Http from "./HTTPRequest";

export const listing_resource = async () => {
  let response = await Http.get(API_URL.Product, {});
  return response;
};

