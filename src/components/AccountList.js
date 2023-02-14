import AccountCard from "./AccountCard";

const AccountList = ({allAccounts, setOpp}) => {

    return ( 
        <>
            {allAccounts.map((acc) => {
                return <AccountCard acc={acc} setOpp={setOpp}/>
            })}
        </>
    );
}
 
export default AccountList;