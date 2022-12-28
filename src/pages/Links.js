import React, { useContext, useEffect} from 'react'
import AuthContext from '../context/user/AuthContext'
import UrlContext from '../context/url/urlContext';


export default function Links() {

    

    const {user} = useContext(AuthContext);
    const {urls,getUrls,hata}= useContext(UrlContext);


    useEffect(()=>{
        getUrls(user.userMail)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user])

    
    return (
        <div>
            {!hata &&
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope='col'>Orjinal Url</th>
                            <th scope='col'>Kısa Url</th>
                            <th scope='col'>Özel Url</th>
                            <th scope='col'>Bitiş Zamanı</th>
                            <th scope='col'> Tıklanma</th>
                            <th scope='col'> Başlangıç Tarihi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            urls.map((url,index)=>{

                                return(
                                    <tr key={index}>
                                        <th>{url.original_url}</th>
                                        <th>{url.shortened_url}</th>
                                        <th>{url.specialURL}</th>
                                        <th>{url.end_time}</th>
                                        <th>{url.clicks}</th>
                                        <th>{url.date}</th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            }
            
            

        </div>
    )
}
