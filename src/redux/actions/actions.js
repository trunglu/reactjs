import axios from 'axios'

//const url = "http://localhost:5000/api/"
const url = process.env.NODE_ENV === 'production' ?
    "/api/" : "http://localhost:5000/api/";
export function loadMessages () {
    return (dispatch) => {
        axios.get(`${url}message`)
            .then((res) => {
                let messages = res.data;
                dispatch({type:'LOAD_MESSAGES', messages});
            }).catch((err) => {
            console.log(err);
        });
    }
}