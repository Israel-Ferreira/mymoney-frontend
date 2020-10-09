import axios from 'axios'
import BASE_URL from './baseUrl'

class DashboardService {
    async getSummary() {
        try {
            const resp = await axios.get(`${BASE_URL}/billingCycles/summary`)

            if(resp.status === 200){
                return resp.data
            }

        } catch (err) {
            return {errors: [err]}
        }

    }
}


export default new DashboardService()