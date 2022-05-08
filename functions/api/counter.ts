// const endpoint = 'REPLACE_UPSTASH_REST_ENDPOINT'
// const token = 'REPLACE_UPSTASH_REST_TOKEN'

// async function recordRequest(request) {
//   let d = new Date();
//   let datestr = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
//   let data = [["url", request.url], ...request.headers]
//   let url = endpoint + '/lpush/' + datestr
//   const init = {
//     body: JSON.stringify(data),
//     method: "POST",
//     headers: {
//       "Authorization": "Bearer " + token
//     },
//   }
//   return await fetch(url, init);
// }

export async function onRequestGet({ params }) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/1`)
  const data = await res.json()
  const info = JSON.stringify(data, null, 2)
  return new Response(info)
}

export async function onRequestPost(context) {
  // ...
}

export const onRequestPut = onRequestPost

