import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div>
            <div className="ui secondary pointing menu">
                <Link className="item" href="/">
                    Home
                </Link>
                <Link className="item" href="/getAccountById">
                 Account By Id
                </Link>
                <Link className="item" href="/newAccount">
                    New Account
                </Link>
                <Link className="item" href="/accountsDepositOrWithdrawal">
                    Deposit / Withdrawal
                </Link>
                <Link className="item" href="/credit">
                    Credit
                </Link>
                <Link className="item" href="/transfer">
                    Transfer
                </Link>
                {/* <div className="right menu">
                    <a className="ui item" href="www.google.com">
                        Logout
                    </a>
                </div> */}
            </div>
            <div className="ui segment">
                <p style={{ textAlign: 'center' }}>Welcome to Amer's Bank</p>
            </div>
        </div>
    );
};

export default Header;