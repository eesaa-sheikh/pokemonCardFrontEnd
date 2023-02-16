import AccountCard from "./AccountCard";

const AccountList = ({allAccounts, setOpp}) => {

    const trainers = allAccounts.filter ((acc) => {return acc.computer === true})

    console.log(allAccounts);



    return ( 
        <div className="flex gap-5 overflow-x-scroll">
            {trainers.map((acc) => {
                return <AccountCard acc={acc} setOpp={setOpp}/>
            })}
        </div>
    );
}
 
export default AccountList;