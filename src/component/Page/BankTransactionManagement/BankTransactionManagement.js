import React, { useState } from 'react';
import './BankTransactionManagement.css'; // Import the CSS file for additional styles

export const BankTransactionManagement = () => {
    const [selectedButton, setSelectedButton] = useState('');
    const [InputBox0, setInputBox0] = useState('');

    const [InputBox1, setInputBox1] = useState('');
    const [InputBox6, setInputBox6] = useState('');
    const [InputBox3, setInputBox3] = useState('');
    const [InputBox4, setInputBox4] = useState('');
    const [InputBox5, setInputBox5] = useState('');

    const handleReset = () => {
        setInputBox1('');
        setInputBox6('');
        setInputBox3('');
        setInputBox4('');
        setInputBox5('');
        setSelectedButton('');
    };


    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
        setInputBox1('');
        setInputBox3('');
        setInputBox4('');
        setInputBox5('');
        setInputBox6('');

    };


    // Function to handle input change
    const handleInputChange0 = (event) => {
        setInputBox0(event.target.value);
    };


    const handleInputChange1 = (event) => {
        setInputBox1(event.target.value);
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
    const handleInputChange6 = (event) => {
        setInputBox6(event.target.value);
    };

    // Function to handle form submission
    //ไม่ใช้ handleSubmit 1 กับ 3 , ใช้ handleSubmit2 ซึ่งดัดแปลงมาจาก edit ของ Newsmanagement แต่เปลี่ยนเป็น add+edit แทน
    const handleSubmit1 = (event) => {
        event.preventDefault();
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
        window.location.reload();
    };

    //ฟอร์มนี้ทำทั้ง add (bank transaction) และ update (account)
    const handleSubmit2 = (event) => {
        event.preventDefault();
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
        else if(selectedButton !== 'Deposit' && selectedButton !== 'Withdraw')
        {
            alert('Please select the transaction type')
            window.location.reload();
        }
        else if(isNaN(InputBox3)|| InputBox3 === '')
        {
            alert('Wrong format of bank account number')
            window.location.reload();
        }
        else if(isNaN(InputBox4) || InputBox4 === '')
        {
            alert('Wrong format of amount')
            window.location.reload();
        }
        else if(isNaN(InputBox5)|| InputBox5 === '')
        {
            alert('Wrong format of new line available')
            window.location.reload();
        }
        else if(isNaN(InputBox6)|| InputBox6 === '')
        {
            alert('Wrong format of new cash balance')
            window.location.reload();
        }                 
        else {
         //เตรียมยัดข้อมูลตรงนี้ ถ้า Input2,3,4,5 มันว่าง ไม่ต้องอัพ}

         /*InputBox1 //account Id ที่ต้องการอัพเดท
        InputBox3 //bank account number  
        InputBox4 //amount
        InputBox5 //new line available
        InputBox6 //new cash balance
        */
        //******************** Edit*/
        window.location.reload();
    };

    const handleSubmit3 = (event) => {
        event.preventDefault();
        // Perform any necessary actions with the input value
        /*
         if(InputBox1 ไม่เจอใน database){
            alert('Cannot find the account id')
            window.location.reload();
        }
        else{//ลบ accountID}
        */
        /*InputBox1 //accountID ที่ต้องการลบ
        //********************ยัดข้อมูลตรงนี้ Delete*/
        window.location.reload();
    };



    return (
        <div>
            <pre className='ManagementHeader'>
                Account
                <br></br>Bank Transaction
                <br></br>Management
            </pre>
            <div className="button-group">
                <button
                    className={`buttonDeposit ${selectedButton === 'Deposit' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('Deposit')}
                >
                    Deposit
                </button>
                <button
                    className={`buttonWithdraw ${selectedButton === 'Withdraw' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('Withdraw')}
                >
                    Withdraw

                </button>

            </div>

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
                        value={InputBox3}
                        onChange={handleInputChange3}
                        placeholder="Bank account number..."
                        className='box_3_input'
                    />
                    <input
                        type="text"
                        value={InputBox4}
                        onChange={handleInputChange4}
                        placeholder="Amount..."
                        className='box_4_input'
                    />

                    <input
                        type="text"
                        value={InputBox5}
                        onChange={handleInputChange5}
                        placeholder="New line available..."
                        className='box_5_input'
                    />
                    <input
                        type="text"
                        value={InputBox6}
                        onChange={handleInputChange6}
                        placeholder="New cash balance..."
                        className='box_6_input'
                    />


                    <button type="submit" className='submitTransaction'>Confirm transaction</button>
                </form>
                <button className='resetTransaction' onClick={handleReset}>Reset</button>
            </div>

            <input
                type="text"
                value={InputBox0}
                onChange={handleInputChange0}
                placeholder="Your broker ID..."
                className='brokerBox'
            />

        </div>
    );
};

export default BankTransactionManagement;
