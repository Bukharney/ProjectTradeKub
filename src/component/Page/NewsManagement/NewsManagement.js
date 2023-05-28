import React, { useContext, useState } from 'react';
import './NewsManagement.css'; // Import the CSS file for additional styles
import axios from 'axios';
import TokenContext from "../../../Context/TokenContext";
import { async } from 'q';


export const NewsManagement = () => {
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
            credit_limit:  Number(InputBox3),
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

    const StockExist = async (b) => {
        try {
            const response = await axios.get(`https://www.tradekub.me/stock/${b}`, {
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



    // Function to handle form submission
    const handleSubmit1 = (event) => {
        event.preventDefault();
        (async () => {
            await Get_account_data(InputBox1);
            if (await StockExist(InputBox0) === 0) {
                alert('Cannot find your company stock ID')
                window.location.reload();
            }
            else{
                alert('Finished Transaction');
                window.location.reload();
            }
        }
        )();

        /*
        if(InputBox0 (stock symbol)ไม่เจอใน databases)
        {
            alert('Cannot find your stock symbol')
            window.location.reload();

        }
        else{ // เตรียมยัดข้อมูลตรงนี้}
        InputBox1 //topic
        InputBox2 //content
        InputBox3 //file api
        //******************** ADD*/
        window.location.reload();
    };
    const handleSubmit2 = (event) => {
        event.preventDefault();
        // Perform any necessary actions with the input value
        /*
        if(InputBox0 (stock symbol)ไม่เจอใน databases)
        {
            alert('Cannot find your stock symbol')
            window.location.reload();

        }
        else if(InputBox1 ไม่เจอใน database){
            alert('Cannot find the the news in the date')
            window.location.reload();
        }
        else if(InputBox1(News) มี แต่ stock_id ของข่าวไม่ตรงกับ InputBox0 (your company stock ID))
        {
            alert('the News isn't belong to your company')
            window.location.reload();

        }
        else {
         //เตรียมยัดข้อมูลตรงนี้ ถ้า Input2,3,4 มันว่าง ไม่ต้องอัพ}
            if(InputBox2 !== ''){// ยัด InputBox2 อัพเดทค่า topic ของ ข่าวของ stock(InputBox0) ที่วันที่ InputBox1}
            if(InputBox3 !== ''){// ยัด InputBox3 อัพเดทค่า contents ของ ข่าวของ stock(InputBox0) ที่วันที่ InputBox1}
            if(InputBox4 !== ''){// ยัด InputBox4 อัพเดทค่า line available ของ ข่าวของ stock(InputBox0) ที่วันที่ InputBox1}
        /*InputBox1 //account Id ที่ต้องการอัพเดท
        //******************** Edit*/
        window.location.reload();
    };

    const handleSubmit3 = (event) => {
        event.preventDefault();
        // Perform any necessary actions with the input value
        /*
        if(InputBox0 (stock symbol)ไม่เจอใน databases)
        {
            alert('Cannot find your stock symbol')
            window.location.reload();

        }
        else if(InputBox1 ไม่เจอใน database){
            alert('Cannot find the the news in the date')
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
            <h className='ManagementHeader3'>News Management</h>
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
            <div>
                <form onSubmit={handleSubmit1}>
                    <input
                        type="text"
                        value={InputBox1}
                        onChange={handleInputChange1}
                        placeholder="Topic..."
                        className='box_1_Input'
                    />
                    <input
                        type="text"
                        value={InputBox2}
                        onChange={handleInputChange2}
                        placeholder="Contents..."
                        className='box_2_input'
                    />
                    <input
                        type="text"
                        value={InputBox3}
                        onChange={handleInputChange3}
                        placeholder="API of the content file..."
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
                        placeholder="Datetime of the news you want to edit..."
                        className='box_1_forSearch'
                    />
                    <input
                        type="text"
                        value={InputBox2}
                        onChange={handleInputChange2}
                        placeholder="Topic {optional}"
                        className='box_2_input'
                    />
                    <input
                        type="text"
                        value={InputBox3}
                        onChange={handleInputChange3}
                        placeholder="Contents {optional}"
                        className='box_3_input'
                    />
                    <input
                        type="text"
                        value={InputBox4}
                        onChange={handleInputChange4}
                        placeholder="API of the content file {optional}"
                        className='box_4_input'
                    />

                    <button type="submit" className='submitEdit'>Update</button>
                </form>
                <button className='resetEdit' onClick={handleReset}>Reset</button>
                </div>
            }

            {selectedButton === 'Delete' &&
            <div>
                <form onSubmit={handleSubmit3}>
                    <input
                        type="text"
                        value={InputBox1}
                        onChange={handleInputChange1}
                        placeholder="Date of the news you want to delete..."
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
                placeholder="Your stock symbol..."
                className='brokerBox'
            />

        </div>
    );
};

export default NewsManagement;
