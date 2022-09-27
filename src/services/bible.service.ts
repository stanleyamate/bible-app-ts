import axios from "axios";
import { baseUrl } from '../config/api';
import { config } from '../config/axiosConfig';



export default { 
    getAllBibles:() => axios.get(baseUrl, config)
}
      
    


