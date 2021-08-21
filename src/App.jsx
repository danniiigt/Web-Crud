import React, {useState, useRef} from 'react';
import styled from 'styled-components';

//STYLES
import GlobalStyles from './styles/GlobalStyles';

//COMPONENTS
import Form from './components/Form';

//IMAGES
import webIcon from "./assets/images/webIcon.png"

//STYLES
const MenuBox = styled.div`
    width: 100%;
    height: 55px;
    border-bottom: 1px solid #c4c4c4ed;
    /* box-shadow: rgb(0 0 0 / 35%) 0px 1px 15px 0px; */
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    background-color: white;
    position: relative;
    z-index: 1;


    .logo-box{
        height: 100%;
        display: flex;
        align-items: center;

        img{
            max-height: 35px;
            max-width: 35px;
        }
    }

    .addweb-box{
        display: flex;
        align-items: center;

        button{
            border: none;
            border-radius: 4px;
            font-weight: 400;
            font-size: 1em;
            background-color: #458aca;
            color: white;
            padding: 5px 10px;
        }
    }
`

const App = () =>{
  //REF
  const buttonRef = useRef()

  //STATE
  const [form, setForm] = useState("-285px")

  //FUNCTIONS
  const slideForm = () =>{
    if(form === "-285px"){
      setForm("55px")
    } else if(form === "55px"){
      setForm("-285px")
    }
    buttonWatcher()
  }

  const buttonWatcher = () =>{
    if(form === "55px"){
      buttonRef.current.textContent = "ADD WEB"
    } else if(form === "-285px"){
      buttonRef.current.textContent = "CLOSE"
    }
  }

  return(
      <>
        <GlobalStyles />
        <MenuBox >
              <div className="logo-box">
                  <img src={webIcon} alt="" />
              </div>
              <div className="addweb-box">
                  <button ref={buttonRef} onClick={slideForm}>ADD WEB</button>
              </div>
          </MenuBox>
        <Form form={form}/>
      </>
  )
}

export default App