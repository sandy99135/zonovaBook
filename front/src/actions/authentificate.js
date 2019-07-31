import axios from 'axios';
import { GET_ERRORS,SET_CURRENT_USER } from './type';
import setAuthToken from '../setAuthtoken';
import jwt_decode from 'jwt-decode';
import store from '../store';
export const registerUser = (user, history) => dispatch => {
    axios.post('https://sandycuis.herokuapp.com/registercuisinier', user)
            .then(res => {
                if(res.data.email== 'Email already exists'){
                    localStorage.setItem("mail","email existante")
                }
                history.push('/login')})
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const loginUser = (user,history) => dispatch => {
    axios.post('https://sandycuis.herokuapp.com/logincuisinier', user)
            .then(res => {
                // console.log(res.data);
                const { token } = res.data;
                localStorage.setItem('jwtToken', res.data.nom);
                localStorage.setItem('id', res.data.id);
                
                console.log(res.data)
                setAuthToken(token);
                // const decoded = jwt_decode(token);
                // dispatch(setCurrentUser(decoded));
                if(res.data.password!== 'Incorrect Password')
                {
                    localStorage.setItem('login', true);
                  window.location='/profil';
               }
               else{
                localStorage.setItem('login', "Mot de passe Incorrect");
                   setTimeout(()=>{alert("mot de passe incorrect")},3000)}
                // if(localStorage.jwtToken) {
                //       setAuthToken(localStorage.jwtToken);
                //       const decoded = jwt_decode(localStorage.jwtToken);
                //       store.dispatch(setCurrentUser(decoded));
                    
                //       const currentTime = Date.now() / 1000;
                //       if(decoded.exp < currentTime) {
                //         store.dispatch(loginUser());
                //         window.location.href = '/'
                //       } 
                //     }
                
            })
            // .catch(err => {
            //     dispatch({
            //         type: GET_ERRORS,
            //         payload: err.response.data
            //     });
            // });
}
export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('id');
    localStorage.removeItem('login');
    localStorage.setItem('login', "Mot de passe Incorrect");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/login');
}
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}