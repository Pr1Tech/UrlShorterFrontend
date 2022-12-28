import React, { useEffect, useReducer,useState } from "react"
import authReducer from './AuthReducer'
import AuthContext from './AuthContext'



const AuthState = (props) => {
        
    const [hata,setHata]=useState(null)
    const [loading,setLoading]=useState(null)

    

    const initialState = {
        user: null,
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            dispatch({
                type: 'LOGIN',
                payload: user
            });
        }
    }, []);

    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = async (userMail, userPassword) => {


        setHata(true)
        setLoading(true)

        const response = await fetch('http://localhost:4000/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userMail, userPassword})
        })

        const data = await response.json();

        if (!response.ok) {
            
            setLoading(false)
            setHata(data.message)
            return;

        }

        if(response.ok){
            
            setLoading(false)
            dispatch({
                type: 'LOGIN',
                payload: data
            });
            localStorage.setItem('user', JSON.stringify(data));
            
        }
    }

    const register = async (userId,userMail, userPassword) => {
        

        setHata(true)
        setLoading(true)

        const response = await fetch('http://localhost:4000/api/user/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userId,userMail, userPassword})
        })

        const data = await response.json();

        if(response.ok){

            setLoading(false)
            dispatch({
                type: 'LOGIN',
                payload: data
            });
            localStorage.setItem('user', JSON.stringify(data));
            
        }
        if (!response.ok) {
            
            setLoading(false)
            setHata(data.message)
            return;
        }
    }

    const logout = () => {
        localStorage.removeItem('urls');
        localStorage.removeItem('user');
        dispatch({
            type: 'LOGOUT'
        });
    }
    

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                login,
                logout,
                register,
                hata,
                loading,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState