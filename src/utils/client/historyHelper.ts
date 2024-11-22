import axios from "axios"

export function getHistoryChat () {
    return new Promise(() => {
        axios.get('/api/chat-history/get-all')
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    })
}