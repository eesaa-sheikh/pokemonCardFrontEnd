import AccountCard from "./AccountCard";

const AccountList = ({allAccounts, setOpp}) => {

    const trainers = allAccounts.filter ((acc) => {return acc.computer === true})

    console.log(allAccounts);



    return ( 
        <>
        <div className="flex flex-col items-center font-mono text-lg text-slate-800">
        <h1>Pick Your Opponent!</h1>
        </div>
        <div className="flex gap-5 overflow-x-scroll">
            {trainers.map((acc) => {
                return <AccountCard acc={acc} setOpp={setOpp}/>
            })}
        </div>
        </>
    );
} 
 
export default AccountList;