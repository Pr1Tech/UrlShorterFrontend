import { Link } from "react-router-dom"
import { useContext} from "react"
import AuthContext from "../context/user/AuthContext"

export default function Navbar() {

  const {logout,user} = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }

  return (
    <nav className="navbar navbar-expand-sm navbark-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand navitem">URL SHORTENER</Link>
          {!user && 
            <div>
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item">
                  <Link to="/Login" className="nav-link">
                    <button className="btn btn-sm btn-outline-primary">
                      Giriş Yap
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Register" className="nav-link">
                    <button className="btn btn-sm btn-outline-primary">
                      Kayıt Ol
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          }
          {user &&
            <div>
              <ul className="navbar-nav justify-content-end">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <button className="btn btn-sm btn-outline-primary">
                    Url Kısalt
                  </button>
                </Link>
              </li>
              
              <li className="nav-item">
                <Link to="/Links" className="nav-link">
                  <button className="btn btn-sm btn-outline-primary">
                    Linkleri Gör
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Login" className="nav-link">
                  <button onClick={handleLogout} className="btn btn-sm btn-outline-danger">
                    Çıkış Yap
                  </button>
                </Link>
              </li>
            </ul>
            </div>
          }
          
        
      </div>
    </nav>
  )
}
