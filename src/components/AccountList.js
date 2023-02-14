import AccountCard from "./AccountCard";

const AccountList = ({allAccounts, setOpps}) => {

    return ( 
        <>
            {allAccounts.map((acc) => {
                return <AccountCard acc={acc}/>
            })}
        </>
    );
}
 
export default AccountList;