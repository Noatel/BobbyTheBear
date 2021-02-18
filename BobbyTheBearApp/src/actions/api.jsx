import axios from "axios";

// TODO: This needs to be in a .env file and not hardcoded,
// (Since the azure devops pipeline got a different url)
const baseURL = "https://localhost:44376/api/";

export default {

    user(url=baseURL + 'user/'){
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id),
        };
    }
}