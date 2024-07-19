import axios from "axios";

export async function searchApi(query, apiKey) {
  const endpoint = `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${query}"`;
  let resData = [];

  await fetch(endpoint)
    .then((response) => response.json())
    .then((data) => (resData = data))
    .catch((error) => (resData = []));

  return resData;
}
