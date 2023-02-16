import LoginForm from "../components/LoginForm";
const LoginContainer = ({logInToAnAccount}) => {

    return ( 

        <div className="login">
        <LoginForm logInToAnAccount={logInToAnAccount}/>
        </div>
    );
}
 
export default LoginContainer;