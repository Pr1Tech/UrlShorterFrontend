import React,{useState,useContext} from 'react'
import AuthContext from '../context/user/AuthContext'



export default function UrlShorter() {
    
    const {login,hata,loading}=useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async(e) => {
        e.preventDefault();
        await login(email, password);
        
    }
    return (
       <div className='h-100 m-5 padding-top'>
            <div className='container h-100'>
                <div className='row h-100 justify-content-sm-center'>
                    <div className='col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9'>
                        <div className='card shadow-lg'>
                            <div className='card-body p-5'>
                                <h1 className='fs-4 card-title fw-bold mb-4 text-center'>Giriş Yap</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className='mb-3'>
                                        <label htmlFor="email" className="form-label">E-mail</label>
                                        <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                    </div>
                                    <div className='mb-3'>  
                                        <label htmlFor="inputPassword2" className="form-label">Şifre</label>
                                        <input type="password" className="form-control" id="inputPassword2" placeholder="Şifreniz" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                    </div>
                                    
                                    <button disabled={loading} type='submit' className='btn btn-primary mt-3'>Giriş</button>
                                    {hata && 
                                        <div className='alert alert-danger mt-3'>   
                                            {hata}
                                        </div>
                                    }
                                </form>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
       </div>
        
    )
}


