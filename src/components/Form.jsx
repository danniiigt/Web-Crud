import React from 'react';
import styled from 'styled-components';
import linkIcon from "../assets/images/linkIcon.png"
import penIcon from "../assets/images/penIcon.png"

//STYLES
const FormBox = styled.div`
    display: flex;
    justify-content: center;
    
    form{
        margin-top: 20px;
        border-radius: 5px;
        width: 90%;
        padding: 20px;
        box-shadow: rgb(0 0 0 / 15%) 0px 1px 15px 0px;
        background-color: white;

        input{
            padding: 10px;
            height: 42px;
            width: 100%;
            border: 1px solid rgb(185, 184, 184);
            border-radius: 0 4px 4px 0;
            border-left: none;
            font-weight: 400;
            font-size: 0.8em;
            outline: none;
        }

        textarea{
            padding: 10px;
            min-height: 80px;
            max-height: 80px;
            min-width: 100%;
            border: 1px solid rgb(185, 184, 184);
            border-radius: 4px;
            font-weight: 400;
            font-size: 0.8em;
            outline: none;
        }

        .url-box,
        .name-box,
        .desc-box,
        .submit-box{
            height: 45px;
            width: 100%;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            img{
                width: 42px;
                height: 42px;
                border: 1px solid rgb(185, 184, 184);
                border-radius: 4px 0 0 4px;
                padding: 8px;
            }
        }

        .desc-box{
            height: fit-content;
        }

        .submit-box{
            margin-bottom: 0;
            input{
                border: none;
                border-radius: 4px;
                font-weight: 400;
                font-size: 1em;
                background-color: orange;
                color: white;

                &:hover{
                    background-color: white;
                    border: 1px solid orange;
                    color: orange;
                    transition: all 0.5s ease-in-out;
                }
            }
        }
    }

`

const Form = () =>{
    return(
        <>
            <FormBox>
                <form action="">
                    <div className="url-box">
                        <img src={linkIcon} alt="" />
                        <input type="url" name="" id="" placeholder="https://some-url.com"/>
                    </div>
                    <div className="name-box">
                        <img src={penIcon} alt="" />
                        <input type="text" placeholder="Website Name"/>
                    </div>
                    <div className="desc-box">
                        <textarea name="" id="" placeholder="Write a description"></textarea>
                    </div>
                    <div className="submit-box">
                        <input type="submit" value="SAVE" />
                    </div>
                </form>
            </FormBox>
        </>
    )
}

export default Form