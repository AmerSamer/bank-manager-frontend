import React from 'react';
import Home from './Home';
import AddNewAcount from './AddNewAcount';
import AccountsDepositOrWithdrawal from './AccountsDepositOrWithdrawal';
import Credit from './Credit';
import Transfer from './Transfer';
import GetAccountById from './GetAccountById';
import Route from './Route';
import Header from './Header';
import axios from 'axios';
import Spinner from './Spinner';
import './style.css';

const Main = () => {
    const [accounts, setAccounts] = React.useState([]);

    React.useEffect(() => {
        getDataAccounts();
    }, [])

    const getDataAccounts = async () => {
        const response = await axios.get(`http://127.0.0.1:4001/api/bank/`);
        setAccounts(response.data);
    }
    const addAcctHandler = (acct) => {
        const accountsArrayHelper = [...accounts, acct]
        setAccounts(accountsArrayHelper)
    }
    const updateAcctHandler = (acct) => {
        const find = accounts.find((f) => f.passportId === acct.passportId)
        if (acct.depositOrWithdrawal === "deposit") {
            find.cash = find.cash + acct.cash
        } else if (acct.depositOrWithdrawal === "withdrawal") {
            find.cash = find.cash - acct.cash
        }
        const accountsArrayHelper = [...accounts]
        setAccounts(accountsArrayHelper)
    }
    const creditAccountHandler = (acct) => {
        const find = accounts.find((f) => f.passportId === acct.passportId)
        find.credit = acct.credit
        const accountsArrayHelper = [...accounts]
        setAccounts(accountsArrayHelper)
    }
    const TransferAccountHandler = (acct) => {
        const find = accounts.find((f) => f.passportId === acct.passportId)
        const find2 = accounts.find((f) => f.passportId === acct.passportIdReciever)
        find.cash = find.cash - acct.cash
        find2.cash = find2.cash + acct.cash
        const accountsArrayHelper = [...accounts]
        setAccounts(accountsArrayHelper)
    }

    return (
        <div className="ui container">
            <div className="ui segment">

                {/* main menu */}
                <Header />

                <div className="ui segment">
                    <Route path="/">
                        <span style={{ color: "black", fontSize: "30px" }}> All Accounts</span>
                        {
                            accounts.length !== 0 ? accounts.map((item) => {
                                return <Home key={item.passportId} cash={item.cash} credit={item.credit} passportId={item.passportId} />
                            }) : <div><Spinner /></div>
                        }
                    </Route>
                    <Route path="/getAccountById">
                        {
                            accounts ? <GetAccountById accounts={accounts} /> : <div>Loading...</div>
                        }
                    </Route>
                    <Route path="/newAccount">
                        {
                            accounts ? <AddNewAcount accounts={accounts} addItem={addAcctHandler} /> : <div>Loading...</div>
                        }
                    </Route>
                    <Route path="/accountsDepositOrWithdrawal">
                        {
                            accounts ? <AccountsDepositOrWithdrawal accounts={accounts} addItem={updateAcctHandler} /> : <div>Loading...</div>
                        }
                    </Route>
                    <Route path="/credit">
                        {
                            accounts ? <Credit accounts={accounts} addItem={creditAccountHandler} /> : <div>Loading...</div>
                        }
                    </Route>
                    <Route path="/transfer">
                        {
                            accounts ? <Transfer accounts={accounts} addItem={TransferAccountHandler} /> : <div>Loading...</div>
                        }
                    </Route>
                </div>
            </div>
        </div>
    );
}

export default Main;