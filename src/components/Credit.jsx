import React from "react";
import axios from "axios";

const Credit = ({ accounts, cash, credit, passportId, depositOrWithdrawal, addItem }) => {
    const [creditAccount, setCreditAccount] = React.useState({
        passportId,
        credit,
    });
    const [msg, setMsg] = React.useState('')

    const addCreditHandler = (e) => {
        setCreditAccount({
            ...creditAccount,
            [e.target.name]: parseInt(e.target.value)
        })
    }
    const addAccountCreditHandler = () => {
        if (creditAccount.credit && creditAccount.passportId) {
            const find = accounts.find((f) => f.passportId === creditAccount.passportId)
            if (find) {
                if (creditAccount.credit > 0) {
                    axios.put(`https://bank-manager-backend.herokuapp.com/api/bank/credit`, creditAccount)
                        .then((res) => {
                            if (res.status === 200) {
                                setMsg(`The credit is changed to NIS ${creditAccount.credit}, at ${new Date()}`)
                                addItem(creditAccount)
                            }
                            else {
                                alert("Something went wrong")
                            }
                        }).catch((err) => {
                            setMsg('ERROR')
                        })
                } else {
                    setMsg('You should put a possitive credit amount')
                }
            } else {
                setMsg('passportId Does not Exist!')
            }
        } else {
            setMsg('You Should Fill in all the inputs')
        }

    }
    return (
        <div>
            <br />
            <span style={{ color: "black", fontSize: "30px" }}> Account Credit</span>
            <div>
                <br />
                passportId:<input type={'number'} name={'passportId'} onChange={addCreditHandler} />
                credit:<input type={'number'} name={'credit'} onChange={addCreditHandler} />
                <input type={'button'} value={'Add Credit'} onClick={addAccountCreditHandler} />
            </div>
            <div style={{ color: 'green', fontSize: '20px' }}>
                {msg ? msg : ''}
            </div>
        </div>
    )
}

export default Credit