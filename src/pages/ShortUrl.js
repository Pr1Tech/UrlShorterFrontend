import React,{useContext} from 'react'
import urlContext  from '../context/url/urlContext';



export default function ShortUrl() {



    const {url} = useContext(urlContext);


    const {shortened_url}=url;




    return (
        <div className='h-100 m-5 padding-top'>
            <div className='container h-100'>
                <div className='row h-100 justify-content-sm-center'>
                    <div className='col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9'>
                        <div className='card shadow-lg'>
                            <div className='card-body p-5'>
                                <h5 className='card-title mb-4 text-center'>Url'niz Başarıyla oluşturulmuştur</h5>
                                <div className='mt-5 mb-3 text-center'>
                                    {"http://localhost:3000/"+shortened_url}
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}