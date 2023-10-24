
const  baseUrl = 'http://localhost:9000';

export const getFetch = async ({url, data}) => {
  let _url = baseUrl + url
  return await fetch(_url, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
   })
}