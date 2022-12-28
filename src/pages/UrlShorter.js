import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom';
import  urlContext  from '../context/url/urlContext';
import AuthContext from '../context/user/AuthContext';


export default function UrlShorter() {
    
    const [original_url, setOriginalUrl] = useState('');
    const [specialURL, setSpecialUrl] = useState('');
    const [end_time, setEnd_time] = useState('');


    const {createUrl,hata,loading} = useContext(urlContext);
    const {user} = useContext(AuthContext);

    const handleSubmit = async(e) => {
        e.preventDefault();
        await createUrl (original_url, specialURL, end_time,user.userMail);
        
        
    }


    return (

       <div className='h-100 m-5 padding-top'>
            <div className='container h-100'>
                <div className='row h-100 justify-content-sm-center'>
                    <div className='col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9'>
                        <div className='card shadow-lg'>
                            <div className='card-body p-5'>
                                <h1 className='fs-4 card-title fw-bold mb-4 text-center'>URL Kısalt</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className='mb-3'>
                                        <label htmlFor='original_url' className='form-label'>Orjinal URL</label>
                                        <input type='text' className='form-control' id='original_url' placeholder='https://www.google.com' value={original_url} onChange={(e) => setOriginalUrl(e.target.value)}/>
                                    </div>
                                    <div className='mb-3'>  
                                        <label htmlFor='specialURL' className='form-label'>Özel URL</label>
                                        <input type='text' className='form-control' id='specialURL' placeholder='10 karaktere kadar özelleştirme yapabilirsiniz' value={specialURL} onChange={(e) => setSpecialUrl(e.target.value)}/>
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor='end_time' className='form-label'>Bitiş Tarihi</label>
                                        <input type='date' className='form-control' id='end_time' value={end_time} onChange={(e) => setEnd_time(e.target.value)}/>
                                    </div>
                                    <button disabled={loading} type='submit' className='btn btn-primary mt-3'>Kısalt</button>
                                    
                                    <Link to="/ShortUrl" className="btn btn-primary mt-3">Git</Link>
                                    
                                </form>
                                {hata &&
                                    <div className='alert alert-danger mt-3'>
                                        {hata}
                                    </div>
                                }
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
       </div>
        
    )
}