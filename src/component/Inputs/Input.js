import React from 'react';
import logo from "../Inputs/img_group_47927.svg";
import '../Inputs/Input.css';

const Input = () => {
    return (
        <div className='mainInputs'>
            <div className='logo'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='inputs'>
                <div style={{ direction: "rtl" }}>
                    <input
                        style={{ background: "#0e152c", color: "white", outline: "none", marginRight: "20px", padding: "2%", borderRadius: "5px" }}
                        type="text"
                        placeholder='الاسم'
                    />
                    <input
                        style={{ background: "#0e152c", color: "white", outline: "none", borderRadius: "5px" , marginRight: "20px", padding: "2%" }}
                        type="email"
                        placeholder='البريد الالكتروني'

                    />
                </div>
                <div>

                    <textarea
                        style={{ background: "#0e152c", color: "white", outline: "none", margin: "20px", width: "446px", height: "70px", borderRadius: "5px", textAlign: "end", padding: "2%" }}
                        type="text"
                            placeholder='...اكتب رسالتك هنا '
                    />
                    <p className='send'>إرسال الرسالة</p>
                </div>
            </div>
        </div>
    );
};

export default Input;
