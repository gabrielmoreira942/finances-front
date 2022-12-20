import axios from '@/axios';

export default {

    request(method, route, value) {
        return new Promise((resolve, reject) => {
            axios({ method: method, url: route, data: value })
                .then(({ data }) => {
                    resolve(data.data ? data.data : data)
                }).catch(error => reject(error));
        })
    },    
}
