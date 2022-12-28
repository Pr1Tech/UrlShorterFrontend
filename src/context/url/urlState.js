import React, { useReducer,useEffect,useState,useContext } from "react"
import urlReducer from './urlReducer'
import UrlContext from './urlContext'
import AuthContext from "../user/AuthContext"


const UrlState = (props) => {

    const [hata,setHata]=useState(null)
    const [loading,setLoading]=useState(null)

    const {user} = useContext(AuthContext);

    const initialState = {
        url: {},
        urls: [],
    }
        

    const [state, dispatch] = useReducer(urlReducer, initialState);


    useEffect (()=>{
        const urls = JSON.parse(localStorage.getItem('urls'));
        if (urls) {
            dispatch({
                type: 'GET_URLS',
                payload: urls
            });
        }
    },[]);
    
    const createUrl = async (original_url, specialURL, end_time, created_by) => {


        setHata(true)
        setLoading(true)

        const response = await fetch('http://localhost:4000/api/url', {
            method: 'POST',
            headers:{
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({original_url, specialURL, end_time, created_by})
        })

        const data = await response.json();

        if (!response.ok) {
            
            setLoading(false)
            setHata(data.message)
            return;

        }

        if(response.ok){
            
            setLoading(false)
            setHata(null)
            dispatch({
                type: 'SET_URL',
                payload: data
            });
            localStorage.setItem('urls', JSON.stringify(data));
            
        }
    }

    const getUrls = async (userMail) => {

        setHata(true)
        setLoading(true)

        const response = await fetch(`http://localhost:4000/api/url/list/${userMail}`,{
            headers:({
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json',
                
            }),

        })
        const data = await response.json();

        if (!response.ok) {

            setLoading(false)
            setHata(data.message)
            return;

        }

        if(response.ok){

            setLoading(false)
            setHata(null)
            dispatch({
                type: 'GET_URLS',
                payload: data
            });
            localStorage.setItem('urls', JSON.stringify(data));

        }
    }

    return (
        <UrlContext.Provider
            value={{
                url: state.url,
                urls: state.urls,
                createUrl,
                getUrls,
                hata,
                loading

            }}
        >
            {props.children}
        </UrlContext.Provider>
    )
}

export default UrlState