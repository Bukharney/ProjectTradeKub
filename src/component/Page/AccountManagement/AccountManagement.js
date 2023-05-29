import React, { useContext, useState } from 'react';
import './AccountManagement.css'; // Import the CSS file for additional styles
import axios from 'axios';
import TokenContext from "../../../Context/TokenContext";
import { async } from 'q';

export const AccountManagement = () => {
    const [selectedButton, setSelectedButton] = useState('Add'); // Initial selection is 'Add'
    const [InputBox0, setInputBox0] = useState('');
    const [InputBox1, setInputBox1] = useState('');
    const [InputBox2, setInputBox2] = useState('');
    const [InputBox3, setInputBox3] = useState('');
    const [InputBox4, setInputBox4] = useState('');
    const [InputBox5, setInputBox5] = useState('');

    const Token = useContext(TokenContext);
    let retreiveValue = [{}];

    const handleReset = () => {
        setInputBox1('');
        setInputBox2('');
        setInputBox3('');
        setInputBox4('');
        setInputBox5('');
    };


    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
        setInputBox1('');
        setInputBox2('');
        setInputBox3('');
        setInputBox4('');
        setInputBox5('');
    };


    // Function to handle input change
    const handleInputChange0 = (event) => {
        setInputBox0(event.target.value);
    };

    const handleInputChange1 = (event) => {
        setInputBox1(event.target.value);
    };
    const handleInputChange2 = (event) => {
        setInputBox2(event.target.value);
    };
    const handleInputChange3 = (event) => {
        setInputBox3(event.target.value);
    };
    const handleInputChange4 = (event) => {
        setInputBox4(event.target.value);
    };
    const handleInputChange5 = (event) => {
        setInputBox5(event.target.value);
    };


    const BrokerExist = async (b) => {
        try {
            const response = await axios.get(`https://www.tradekub.me/broker/${b}`, {
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + Token.token,
                },
            });

            console.log(response.data);
            return 1; // Resolving the Promise with the desired value
        } catch (error) {
            console.error(error);
            return 0; // Resolving the Promise with the desired value
        }
    };

    const UserExist = async (u) => {
        try {
            const response = await axios.get(`https://www.tradekub.me/users/username/${u}`, {
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + Token.token,
                },
            });
            console.log(response.data);
            return 1; // Resolving the Promise with the desired value
        } catch (error) {
            console.error(error);
            return 0; // Resolving the Promise with the desired value
        }
    };

    const Get_user_data = async (u) => {
        await axios
            .get(`https://www.tradekub.me/users/username/${u}`, {
                headers: {
                    accept: "application/json",
                    Authorization: "Bearer " + Token.token,
                },
            })
            .then((response) => {
                console.log(response.data);
                retreiveValue = response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const Get_account_data = async (a) => {
        await axios
            .get(`https://www.tradekub.me/account/${a}`, {
                headers: {
                    accept: "application/json",
                    Authorization: "Bearer " + Token.token,
                },
            })
            .then((response) => {
                console.log(response.data);
                retreiveValue = response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    };


    const AccountExist = async (b) => {
        try {
            const response = await axios.get(`https://www.tradekub.me/account/${b}`, {
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + Token.token,
                },
            });

            console.log(response);
            return 1; // Resolving the Promise with the desired value
        } catch (error) {
            console.error(error);
            return 0; // Resolving the Promise with the desired value
        }
    };


    const CreateAccount = async ({ InputBox0, InputBox2, InputBox3 }) => {
        const data = {
            user_id: Number(retreiveValue.id),
            broker_id: Number(InputBox0),
            cash_balance: 0,
            line_available: 0,
            credit_limit: Number(InputBox3),
            pin: Number(InputBox2)
        };

        await axios
            .post("https://www.tradekub.me/account/", data, {
                headers: {
                    accep: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + Token.token,
                },
            })
            .then((response) => {
                console.log(response);
                alert("Create account successfull");
                window.location.reload();
            })
            .catch((error) => {
                console.error(error.data);
                alert("Create account failed please try again");
            });
    };

    const UpdateAccount = async (b) => {
        let data = {
            user_id: retreiveValue.user_id,
            broker_id: retreiveValue.broker_id,
            cash_balance: retreiveValue.cash_balance,
            line_available: retreiveValue.line_available,
            credit_limit: retreiveValue.credit_limit,
            pin: retreiveValue.pin
        };

        if (InputBox2 !== '') { data.pin = Number(InputBox2) }// ยัด InputBox2 อัพเดทค่า pin ของ accountID}
        if (InputBox3 !== '') { data.cash_balance = Number(InputBox3) }// ยัด InputBox3 อัพเดทค่า cash balance ของ accountID}
        if (InputBox4 !== '') { data.line_available = Number(InputBox4) }// ยัด InputBox4 อัพเดทค่า line available ของ accountID}
        if (InputBox5 !== '') { data.credit_limit = Number(InputBox5) }// ยัด InputBox5 อัพเดทค่า credit limit ของ accountID

        await axios
            .put(`https://www.tradekub.me/account/${InputBox1}`, data, {
                headers: {
                    accep: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + Token.token,
                },
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error.data);
                alert("Update account balance failed please try again");
                window.location.reload();
            });
    };


    const DeleteAccoount = async (a) => {
        await axios
            .delete(`https://www.tradekub.me/account/${a}`, {
                headers: {
                    accept: "application/json",
                    Authorization: "Bearer " + Token.token,
                },
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };


    // Function to handle form submission
    const handleSubmit1 = (event) => {
        event.preventDefault();

        (async () => {
            if (await BrokerExist(InputBox0) === 0) {
                alert('Cannot find your broker ID')
                window.location.reload();
            }
            else if (await UserExist(InputBox1) === 0) {
                alert('Cannot find the username')
                window.location.reload();
            }
            else if (isNaN(InputBox2) || !Number.isInteger(Number(InputBox2)) || InputBox2.length !== 6) {
                alert('Wrong format of pin')
                window.location.reload();
            }
            else if (isNaN(InputBox3)) {
                alert('Wrong format of credit limit')
                window.location.reload();
            }
            else {
                await Get_user_data(InputBox1).then(() => { CreateAccount({ InputBox0, InputBox2, InputBox3 }) })
                // 
            }

        })();

        /*
       if(InputBox0 ไม่เจอใน databases)
       {
           alert('Cannot find your broker ID')
           window.location.reload();

       }
       else if(InputBox1 ไม่เจอใน database){
           alert('Cannot find the username')
           window.location.reload();
       }
       else if(isNaN(InputBox2) || !Number.isInteger(InputBox2) || InputBox2.length !== 6)
       {
           alert('Wrong format of pin')
           window.location.reload();
       }
       else if(isNaN(InputBox3))
       {
           alert('Wrong format of credit limit')
           window.location.reload();
       }
       else{ // เตรียมยัดข้อมูลตรงนี้}
       InputBox1 //username สำหรับสร้าง account ของ user เพิ่ม โดยมี InputBox0 คือ broker
       InputBox2 //pin
       InputBox3 //credit limit
       //******************** ADD*/
        // window.location.reload();
    };
    const handleSubmit2 = (event) => {
        event.preventDefault();
        (async () => {
            await Get_account_data(InputBox1);
            if (await BrokerExist(InputBox0) === 0) {
                alert('Cannot find your broker ID')
                window.location.reload();
            }
            else if (await AccountExist(Number(InputBox1)) === 0) {
                alert('Cannot find the Account')
                window.location.reload();
            }
            else if (retreiveValue.broker_id !== Number(InputBox0)) {
                alert("the account isn't belong to your broker")
                window.location.reload();
            }
            else if (isNaN(InputBox2) || !Number.isInteger(Number(InputBox2)) || InputBox2.length !== 6) {
                alert('Wrong format of pin')
                window.location.reload();
            }
            else if (isNaN(InputBox3)) {
                alert('Wrong format of credit limit')
                window.location.reload();
            }
            else if (isNaN(InputBox4)) {
                alert('Wrong format of line available')
                window.location.reload();
            }
            else if (isNaN(InputBox5)) {
                alert('Wrong format of credit limit')
                window.location.reload();
            }
            else {
                await UpdateAccount()
                window.location.reload();
            }
        })();

        // Perform any necessary actions with the input value
        /*
         if(InputBox1 ไม่เจอใน database){
            alert('Cannot find the account id')
            window.location.reload();
        }
        else if(InputBox1(account) มี แต่ broker_id ไม่ตรงกับ InputBox0 (broker ID))
        {
            alert('the account isn't belong to your broker')
            window.location.reload();
 
        }
        else if(isNaN(InputBox2) || !Number.isInteger(์NumberInputBox2) || InputBox2.length !== 6)
        {
            alert('Wrong format of pin')
            window.location.reload();
        }
        else if(isNaN(InputBox3))
        {
            alert('Wrong format of cash balance')
            window.location.reload();
        }
        else if(isNaN(InputBox4))
        {
            alert('Wrong format of line available')
            window.location.reload();
        }
        else if(isNaN(InputBox5))
        {
            alert('Wrong format of credit limit')
            window.location.reload();
        }            
        else {
         //เตรียมยัดข้อมูลตรงนี้ ถ้า Input2,3,4,5 มันว่าง ไม่ต้องอัพ}
            if(InputBox2 !== ''){// ยัด InputBox2 อัพเดทค่า pin ของ accountID}
            if(InputBox3 !== ''){// ยัด InputBox3 อัพเดทค่า cash balance ของ accountID}
            if(InputBox4 !== ''){// ยัด InputBox4 อัพเดทค่า line available ของ accountID}
            if(InputBox5 !== ''){// ยัด InputBox5 อัพเดทค่า credit limit ของ accountID
        /*InputBox1 //account Id ที่ต้องการอัพเดท
        InputBox2 //pin ที่ต้องการอัพเดท
        InputBox3 //cash balance ที่ต้องการอัพเดท 
        InputBox4 //line available ที่ต้องการอัพเดท
        InputBox5 //credit limit ที่ต้องการอัพเดท*/
        //******************** Edit*/
    };

    const handleSubmit3 = (event) => {
        event.preventDefault();
        (async () => {
            await Get_account_data(InputBox1);
            if (await BrokerExist(InputBox0) === 0) {
                alert('Cannot find your broker ID')
                window.location.reload();
            }
            else if (await AccountExist(Number(InputBox1)) === 0) {
                alert('Cannot find the Account')
                window.location.reload();
            }
            else if (retreiveValue.broker_id !== Number(InputBox0)) {
                alert("the account isn't belong to your broker")
                window.location.reload();
            }
            else {
                await DeleteAccoount(InputBox1)
                window.location.reload();
            }
        })();

        // Perform any necessary actions with the input value
        /*
         if(InputBox1 ไม่เจอใน database){
            alert('Cannot find the account id')
            window.location.reload();
        }
        else if(InputBox1(account) มี แต่ broker_id ไม่ตรงกับ InputBox0 (broker ID))
        {
            alert('the account isn't belong to your broker')
            window.location.reload();
 
        }
        else{//ลบ accountID}
        */
        /*InputBox1 //accountID ที่ต้องการลบ
        //********************ยัดข้อมูลตรงนี้ Delete*/
        // window.location.reload();
    };



    return (
        <div>
            <h className='ManagementHeader1'>Account Management</h>
            <div className="button-group">
                <button
                    className={`buttonAdd ${selectedButton === 'Add' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('Add')}
                >
                    Add
                </button>
                <button
                    className={`buttonEdit ${selectedButton === 'Edit' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('Edit')}
                >
                    Edit
                </button>
                <button
                    className={`buttonDelete ${selectedButton === 'Delete' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('Delete')}
                >
                    Delete
                </button>


            </div>

            {selectedButton === 'Add' && <div>
                <form onSubmit={handleSubmit1}>
                    <input
                        type="text"
                        value={InputBox1}
                        onChange={handleInputChange1}
                        placeholder="Existing username..."
                        className='box_1_forSearch'
                    />
                    <input
                        type="text"
                        value={InputBox2}
                        onChange={handleInputChange2}
                        placeholder="Set the pin..."
                        className='box_2_input1'
                    />
                    <input
                        type="text"
                        value={InputBox3}
                        onChange={handleInputChange3}
                        placeholder="Set the credit Limit..."
                        className='box_3_input'
                    />
                    <button type="submit" className='submitAdd'>Create</button>
                </form>
                <button className='resetAdd' onClick={handleReset}>Reset</button>
            </div>
            }

            {selectedButton === 'Edit' &&
                <div>
                    <form onSubmit={handleSubmit2}>
                        <input
                            type="text"
                            value={InputBox1}
                            onChange={handleInputChange1}
                            placeholder="Existing account ID..."
                            className='box_1_forSearch'
                        />
                        <input
                            type="text"
                            value={InputBox2}
                            onChange={handleInputChange2}
                            placeholder="Change the pin {optional}"
                            className='box_2_input1'
                        />
                        <input
                            type="text"
                            value={InputBox3}
                            onChange={handleInputChange3}
                            placeholder="Change Cash Balance {optional}"
                            className='box_3_input'
                        />
                        <input
                            type="text"
                            value={InputBox4}
                            onChange={handleInputChange4}
                            placeholder="Change line available {optional}"
                            className='box_4_input'
                        />

                        <input
                            type="text"
                            value={InputBox5}
                            onChange={handleInputChange5}
                            placeholder="Change credit limit {optional}"
                            className='box_5_input'
                        />

                        <button type="submit" className='submitEdit1'>Update</button>
                    </form>
                    <button className='resetEdit1' onClick={handleReset}>Reset</button>
                </div>
            }

            {selectedButton === 'Delete' &&
                <div>
                    <form onSubmit={handleSubmit3}>
                        <input
                            type="text"
                            value={InputBox1}
                            onChange={handleInputChange1}
                            placeholder="Existing account ID"
                            className='box_1_forSearch'
                        />

                        <button type="submit" className='submitDelete'>Delete</button>
                    </form>
                    <button className='resetDelete' onClick={handleReset}>Reset</button>
                </div>
            }

            <input
                type="text"
                value={InputBox0}
                onChange={handleInputChange0}
                placeholder="Your broker ID"
                className='brokerBox'
            />

        </div>
    );
};

export default AccountManagement;
