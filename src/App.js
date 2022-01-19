import LoginPage from "./pages/LoginPage";
import DashBoard from "./components/Dashboard";
import { useState, useEffect } from "react";
import { setToken, setUser } from "./reducers/user";
import { useSelector, useDispatch } from "react-redux";
import './App.css'
import { store } from "./store";
import userService from "./services/userService";

const App = () => {
    const token = useSelector(state => state.token)
    const dispatch = useDispatch();

    useEffect(() => {
        const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
        if(loggedUser === null){
            return;
        }
        if(!loggedUser.hasOwnProperty('userToken')) {
            return;
        }
        try{
            userService.verify(loggedUser.userToken).then( response => {
                const verifiedUser = response.data;
                dispatch(setToken(loggedUser.userToken));
                dispatch(setUser(verifiedUser));
            })
        }
        catch(error){
            console.log(error.response.data);
            return;
        }
    });

    return (
        <div id="App">
            {
                (token === null || token === undefined) ? <LoginPage/> : <DashBoard/>
            }
        </div>
    );
}

export default App;
