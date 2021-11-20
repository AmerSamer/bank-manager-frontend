import React from "react";
import axios from "axios";

const AddNewAcount = ({ accounts, cash, credit, passportId, addItem }) => {
    const [addAccount, setAddAccount] = React.useState({
        passportId,
        cash: 0,
        credit: 0
    });
    const [msg, setMsg] = React.useState('')

    const addHandler = (e) => {
        setAddAccount({
            ...addAccount,
            [e.target.name]: parseInt(e.target.value)
        })
    }
    const addAccountHandler = () => {
        if (addAccount.passportId) {
            if (addAccount.passportId > 0) {
                const find = accounts.find((f) => f.passportId === addAccount.passportId)
                if (!find) {
                    axios.post(`https://bank-manager-backend.herokuapp.com/api/bank/`, addAccount)
                        .then((res) => {
                            if (res.status === 200) {
                                setMsg('Account Added Successfully :)')
                                addItem(addAccount)
                            }
                            else {
                                alert("Something went wrong")
                            }
                        }).catch((err) => {
                            setMsg('Account Exist')
                        })
                } else {
                    setMsg('passportId Exist!')
                }
            } else {
                setMsg('You ID wrong! it should be positive')
            }
        } else {
            setMsg('You Should Fill in your ID')
        }
    }
    return (
        <div>
            <br />
            <span style={{ color: "black", fontSize: "30px" }}> Add New Account</span>
            <div>
                <br />
                passportId: <input type={'number'} name={'passportId'} onChange={addHandler} />
                <input type={'button'} value={'Add'} onClick={addAccountHandler} />
            </div>
            <div>
                {msg ? msg : ''}
            </div>
        </div>
    )
}

export default AddNewAcount