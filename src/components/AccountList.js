import AccountCard from "./AccountCard";

const AccountList = ({allAccounts, setOpp}) => {

    const trainers = allAccounts.filter ((acc) => {return acc.computer === true})

    console.log(allAccounts);



    return ( 
        <>
            {trainers.map((acc) => {
                return <AccountCard acc={acc} setOpp={setOpp}/>
            })}
        </>
    );
}
 
export default AccountList;