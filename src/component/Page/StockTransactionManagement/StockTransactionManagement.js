import React, { useState } from 'react';
import './StockTransactionManagement.css'; // Import the CSS file for additional styles

export const StockTransactionManagement = () => {
    const [selectedButton, setSelectedButton] = useState('Add'); // Initial selection is 'Add'
    const [InputBox0, setInputBox0] = useState('');

    const [InputBox1, setInputBox1] = useState('');
    const [InputBox2, setInputBox2] = useState('');
    const [InputBox3, setInputBox3] = useState('');
    const [InputBox4, setInputBox4] = useState('');
    const [InputBox5, setInputBox5] = useState('');


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

    
     const handleSubmit2 = (event) => {
        event.preventDefault();
        // Perform any necessary actions with the input value
        /*
        if(InputBox0 (broker ID)ไม่เจอใน databases)
        {
            alert('Cannot find your broker ID')
            window.location.reload();

        }
        else if(InputBox1 ไม่เจอใน database){
            alert('Cannot find the account ID')
            window.location.reload();
        }
        else if(InputBox1(accountID) มี แต่ account_id ไม่ตรงกับ InputBox0 (your broker ID))
        {
            alert('the account isn't belong to your broker ID')
            window.location.reload();
        }
        else if(InputBox2 (order ID) หาไม่เจอ || InputBox2 ได้ cancel หรือ match ไปแล้ว)
        {
            alert('Invalid order ID (no existing or has been ended)')
            window.location.reload();
        }
        else {
         //เตรียมยัดข้อมูลตรงนี้
         /*InputBox1 //account Id ที่ต้องการอัพเดท
         InputBox2 //order ID
         InputBox3 //Volume
         InputBox4 //price
        //******************** Edit*/
        window.location.reload();
    };

 


    return (
        <div>
            <h className='ManagementHeader4'>Stock Transaction</h>
 

 
            <div>
                <form onSubmit={handleSubmit2}>
                    <input
                        type="text"
                        value={InputBox1}
                        onChange={handleInputChange1}
                        placeholder="Exsiting account ID..."
                        className='box_1_forSearch'
                    />
                    <input
                        type="text"
                        value={InputBox2}
                        onChange={handleInputChange2}
                        placeholder="Existing order ID..."
                        className='box_2_input'
                    />
                    <input
                        type="text"
                        value={InputBox3}
                        onChange={handleInputChange3}
                        placeholder="Volume..."
                        className='box_3_input'
                    />
                    <input
                        type="text"
                        value={InputBox4}
                        onChange={handleInputChange4}
                        placeholder="Unit price..."
                        className='box_4_input'
                    />

                    <button type="submit" className='submitTransaction'>Update</button>
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

export default StockTransactionManagement;
