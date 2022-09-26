import axios from 'axios'

const baseUrl='https://api.scripture.api.bible/v1/bibles';

// type Config = {
//   Accept: string,
//   apikey: string
// }


type GetBibleResponse = {
  data: []
}

/* getting all bibles */

// export const getAllBibles = () => {
//   axios.get<GetBibleResponse>(baseUrl, {headers: {
//     'Accept': 'application/json',
//     'api-key': 'dffba9ada7976bca1a1406be0fb94ad0'
//   }})
// }
