import AccountCard from "./AccountCard";

const AccountList = ({allAccounts, setOpp}) => {

    const trainers = allAccounts.filter ((acc) => {return acc.computer === true})

    console.log(allAccounts);



    return ( 
        <div className="h-screen">
        <div className="flex flex-col items-center font-mono text-3xl text-white mt-20">
        <h1>Pick Your Opponent!</h1>
        </div>
        <div className="flex gap-5 overflow-x-scroll h-[80vh] pl-12">
            {trainers.map((acc) => {
                return <div className="my-auto"> 
                    <AccountCard acc={acc} setOpp={setOpp}/>
                    </div>
            })}
        </div>
        </div>
    );
} 
 
export default AccountList;