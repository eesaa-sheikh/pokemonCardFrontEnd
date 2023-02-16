import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginForm = ({logInToAnAccount}) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();
      const result = await logInToAnAccount(userName,password)
      if(result !== true){
          setError("Incorrect combination of details")
      }
      else{
      setError("")
      navigate("/")
      }
  }

    return (
        <>

        <div className="am">

       
            <div className="loginForm"> 


                <h1 className="title"> Please log in</h1>
                <img src="https://cdn-icons-png.flaticon.com/512/287/287226.png" className="iconAccount" width={200}></img>
                <form  role="search" onSubmit={handleSubmit}>
                    <li className="login_label" htmlFor="login_input">Username:
                    <input 
                        type="text" 
                        placeholder="Type username here..." className="login_input" 
                        value={userName}
                        onChange={event => setUserName(event.target.value)} />
                        </li>

                    <li className="login_label" htmlFor="login_input">Password:
                    <input 
                        type="password"
                        placeholder="Type password here..." className="login_input" 
                        value={password}
                        onChange={event => setPassword(event.target.value)} />
                    </li>
                    <input type="submit" value="OK" className="okButton"/>
                </form>
                <p className="error">{error}</p>
                
                
            </div>
            </div>
        </>
    );
}
 
export default LoginForm;