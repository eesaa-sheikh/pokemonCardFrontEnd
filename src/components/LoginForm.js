import { useState } from "react";

const LoginForm = ({logInToAnAccount}) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
      event.preventDefault();
      const result = await logInToAnAccount(userName,password)
      if(result != true){
          setError("Incorrect combination of details")
      }
      else{
      setError("")
      }
  }

    return (
        <>
            <div >
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
                
            </div>
        </>
    );
}
 
export default LoginForm;