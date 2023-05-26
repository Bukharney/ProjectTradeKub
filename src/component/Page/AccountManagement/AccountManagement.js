import React, { useState } from 'react';
import './AccountManagement.css'; // Import the CSS file for additional styles

export const AccountManagement = () => {
    const [selectedButton, setSelectedButton] = useState('Add'); // Initial selection is 'Add'
    const [InputBox1, setInputBox1] = useState('');
    const [InputBox2, setInputBox2] = useState('');
    const [InputBox3, setInputBox3] = useState('');
    const [InputBox4, setInputBox4] = useState('');
    const [InputBox5, setInputBox5] = useState('');


    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
        setInputBox1('');
        setInputBox2('');
        setInputBox3('');
        setInputBox4('');
        setInputBox5('');
    };


    // Function to handle input change
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

    // Function to handle form submission
    const handleSubmit1 = (event) => {
        event.preventDefault();
        /*
        if(InputBox1 ไม่เจอใน database){
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
        InputBox1 //username สำหรับสร้าง account ของ user เพิ่ม
        InputBox2 //pin
        InputBox3 //credit limit
        //******************** ADD*/
        window.location.reload();
    };
    const handleSubmit2 = (event) => {
        event.preventDefault();
        // Perform any necessary actions with the input value
        /*
         if(InputBox1 ไม่เจอใน database){
            alert('Cannot find the account id')
            window.location.reload();
        }
        else if(isNaN(InputBox2) || !Number.isInteger(InputBox2) || InputBox2.length !== 6)
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
            <h className='ManagementHeader'>Account Management</h>
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

            {selectedButton === 'Add' &&
                <form onSubmit={handleSubmit1}>
                    <input
                        type="text"
                        value={InputBox1}
                        onChange={handleInputChange1}
                        placeholder="Search username..."
                        className='box_1_forSearch'
                    />
                    <input
                        type="text"
                        value={InputBox2}
                        onChange={handleInputChange2}
                        placeholder="Set the pin..."
                        className='box_2_input'
                    />
                    <input
                        type="text"
                        value={InputBox3}
                        onChange={handleInputChange3}
                        placeholder="Set the credit Limit..."
                        className='box_3_input'
                    />
                    <button className='resetAdd'>Reset</button>
                    <button type="submit" className='submitAdd'>Create</button>
                </form>
            }

            {selectedButton === 'Edit' &&
                <form onSubmit={handleSubmit2}>
                    <input
                        type="text"
                        value={InputBox1}
                        onChange={handleInputChange1}
                        placeholder="Search account ID..."
                        className='box_1_forSearch'
                    />
                    <input
                        type="text"
                        value={InputBox2}
                        onChange={handleInputChange2}
                        placeholder="Change the pin {optional}"
                        className='box_2_input'
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

                    <button className='resetEdit'>Reset</button>
                    <button type="submit" className='submitEdit'>Update</button>
                </form>
            }

            {selectedButton === 'Delete' &&
                <form onSubmit={handleSubmit3}>
                    <input
                        type="text"
                        value={InputBox1}
                        onChange={handleInputChange1}
                        placeholder="Search account ID..."
                        className='box_1_forSearch'
                    />

                    <button className='resetDelete'>Reset</button>
                    <button type="submit" className='submitDelete'>Delete</button>
                </form>
            }

        </div>
    );
};

export default AccountManagement;
