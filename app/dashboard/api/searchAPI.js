import axios from "axios";

export async function searchApi(query, apiKey){
    const endpoint = `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${query}"`;
    let data = []

    await axios.get(endpoint)
    .then((response)=>(
        data = response.data
    ))
    .catch((err)=> (data = err))

    return data;
}