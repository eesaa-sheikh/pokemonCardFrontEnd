import LoginForm from "../components/LoginForm";
const LoginContainer = ({logInToAnAccount}) => {

    return ( 

        <>
        <LoginForm logInToAnAccount={logInToAnAccount}/>
        </>
    );
}
 
export default LoginContainer;