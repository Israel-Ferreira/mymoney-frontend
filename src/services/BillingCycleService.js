import axios from 'axios'
import BASE_URL from './baseUrl'


const URL = `${BASE_URL}/billingCycles`

export default  {
    getAll: async () => {
        const resp = await axios.get(URL)
        return resp.data
    },

    create: async (data) => {
        try{
            const resp = await axios.post(URL, data)
            return resp.data
        }catch(err){
            console.error(err.message)
        }
    }
}