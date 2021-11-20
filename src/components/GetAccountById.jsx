import React from "react";

const GetAccountById = ({ accounts, cash, credit, passportId }) => {
    const [selectAccount, setSelectAccount] = React.useState(0)
    const [showAccount, setShowAccount] = React.useState(null)

    const [selecterFilterBy, setSelecterFilterBy] = React.useState(0)
    const [showFilterByAccount, setShowFilterByAccount] = React.useState(null)

    const [selecterFilterByLeeser, setSelecterFilterByLeeser] = React.useState(0)

    const [selecterFilterByCredit, setSelecterFilterByCredit] = React.useState(0)

    const [selecterFilterByCreditLesser, setSelecterFilterByCreditLesser] = React.useState(0)

    //
    const selecterHandle = (e) => {
        setSelectAccount(parseInt(e.target.value))
        showSelecterHandle(parseInt(e.target.value))
    }
    const showSelecterHandle = (ee) => {
        const find = accounts.find((f) => f.passportId === ee)
        setShowAccount(find)
    }
    //
    const selecterFilterByHandle = (e) => {
        setSelecterFilterByLeeser(parseInt(0))
        setSelecterFilterByCredit(parseInt(0))
        setSelecterFilterByCreditLesser(parseInt(0))
        setSelecterFilterBy(parseInt(e.target.value))
        showSelecterFilterBy(parseInt(e.target.value))
    }
    const showSelecterFilterBy = (ee) => {
        const result = accounts.filter(f => f.cash >= ee);
        setShowFilterByAccount(result)
    }
    //
    const selecterFilterByLeeserHandle = (e) => {
        setSelecterFilterBy(parseInt(0))
        setSelecterFilterByCredit(parseInt(0))
        setSelecterFilterByCreditLesser(parseInt(0))
        setSelecterFilterByLeeser(parseInt(e.target.value))
        showSelecterFilterBy2(parseInt(e.target.value))
    }
    const showSelecterFilterBy2 = (ee) => {
        const result = accounts.filter(f => f.cash <= ee);
        setShowFilterByAccount(result)
    }
    //
    const selecterFilterByCreditHandle = (e) => {
        setSelecterFilterBy(parseInt(0))
        setSelecterFilterByLeeser(parseInt(0))
        setSelecterFilterByCreditLesser(parseInt(0))
        setSelecterFilterByCredit(parseInt(e.target.value))
        showSelecterFilterBy3(parseInt(e.target.value))
    }
    const showSelecterFilterBy3 = (ee) => {
        const result = accounts.filter(f => f.credit >= ee);
        setShowFilterByAccount(result)
    }
    //
    const selecterFilterByCreditLesserHandle = (e) => {
        setSelecterFilterBy(parseInt(0))
        setSelecterFilterByLeeser(parseInt(0))
        setSelecterFilterByCredit(parseInt(0))
        setSelecterFilterByCreditLesser(parseInt(e.target.value))
        showSelecterFilterBy4(parseInt(e.target.value))
    }
    const showSelecterFilterBy4 = (ee) => {
        const result = accounts.filter(f => f.credit <= ee);
        setShowFilterByAccount(result)
    }
    return (
        <div>
            <div>
                <br />
                <label htmlFor="accounts" style={{ color: "black", fontSize: "30px" }}>Choose an account:</label><br /><br />
                <select name="accounts" id="accounts" value={selectAccount} onChange={selecterHandle} >
                    {
                        accounts ? accounts.map((acct) => {
                            return (
                                <option key={acct.passportId} value={acct.passportId} >{acct.passportId}</option>
                            )
                        }) : <div>Loading...</div>
                    }
                </select>
            </div>
            <div style={{ color: "blue", fontSize: "20px" }}>
                {showAccount ? <div><br />passportId:{showAccount.passportId} , cash:{showAccount.cash} , credit:{showAccount.credit}</div> : ''}
            </div>

            <div>
                <br />
                <label htmlFor="filterBy" style={{ color: "black", fontSize: "30px" }}>Filter Account By:</label><br /><br />
                <div>Cash Greater than:</div>
                <input type="number" value={selecterFilterBy} onChange={selecterFilterByHandle} />
                <div><br />Cash Lesser than:</div>
                <input type="number" value={selecterFilterByLeeser} onChange={selecterFilterByLeeserHandle} />
                <div><br />Credit Greater than:</div>
                <input type="number" value={selecterFilterByCredit} onChange={selecterFilterByCreditHandle} />
                <div><br />Credit Lesser than:</div>
                <input type="number" value={selecterFilterByCreditLesser} onChange={selecterFilterByCreditLesserHandle} />
            </div>
            <div style={{ color: "blue", fontSize: "20px" }}>
                {
                    showFilterByAccount ? showFilterByAccount.map((acct) => {
                        return (
                            <div key={acct.passportId}><br />passportId:{acct.passportId} , cash:{acct.cash} , credit:{acct.credit}</div>
                        )
                    }) : ''
                }
            </div>

        </div>
    )
}

export default GetAccountById