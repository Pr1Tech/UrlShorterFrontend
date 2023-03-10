import { useParams } from "react-router-dom";


const Redirect = async() => {
    const {shortURL}=useParams();
    const response = await fetch(`https://yazlab-url-api.herokuapp.com/api/redirect/${shortURL}`)

    const data =  await response.json();
    console.log(data);

    if (!response.ok) {
        console.log(data.message)
        return;
    }
    if (response.ok) {
        
        window.location.href = data;

    }

}



export default Redirect;