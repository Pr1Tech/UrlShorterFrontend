import React,{useContext, useState} from 'react'
import AuthContext from '../context/user/AuthContext'


export default function Register() {
    
    const[userMail,setEmail] = useState('')
    const[userPassword,setPassword] = useState('')
    const[userId,setUserId] = useState('')

    const {register,loading,hata} = useContext(AuthContext);

    
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        await register(userId,userMail,userPassword);
    }
        
    return (
        <div className='h-100 m-5 padding-top'>
            <div className='container h-100'>
                <div className='row h-100 justify-content-sm-center'>
                    <div className='col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9'>
                        <div className='card shadow-lg'>
                            <div className='card-body p-5 '>
                                <h1 className='fs-4 card-title fw-bold mb-4 text-center'>Kayıt Ol</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className='mb-3'>
                                        <label htmlFor='userId' className='form-label'>Kullanıcı Adı</label>
                                        <input type='text' className='form-control' id='userId' placeholder='Kullanıcı Adı' value={userId} onChange={(e) => setUserId(e.target.value)}/>
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor="email" className="form-label">E-mail</label>
                                        <input type="email" className="form-control" id="email" placeholder="name@example.com" value={userMail} onChange={(e)=>setEmail(e.target.value)}/>
                                    </div>
                                    <div className='mb-3'>  
                                        <label htmlFor="userPassword" className="form-label">Şifre</label>
                                        <input type="password" className="form-control" id="userPassword" placeholder="8-16 karakter arası bir şifre giriniz" value={userPassword} onChange={(e)=>setPassword(e.target.value)}/>
                                    </div>
                                    <button disabled={loading} type='submit' className='btn btn-primary mt-3'>Kayıt Ol</button>
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
