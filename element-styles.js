import { css } from 'lit-element';

export const Styles = css`
.main {
    width: 100%;
    height:auto;
    margin: 30;
    align-items: center;
    justify-content: center;
display: flex;
    flex-direction:column

  }
  .container {
    width: 300px;
    height:auto;
display: flex;
    flex-direction:column;
    margin-top:20px;

  }
.firstname{
    display: flex;
    flex-direction:row;
         align-items: center;
        justify-content: space-between;
        padding:5px;
}
.lastname{
    display: flex;
    flex-direction:row;
     align-items: center;
        justify-content: space-between;
                padding:5px;

}
.date{
    display: flex;
    flex-direction:row;
     align-items:center;
        justify-content: space-between;
                padding:5px;

}
.biography{
    display: flex;
    flex-direction:row;
     align-items: center;
        justify-content: space-between;
                padding:5px;

}
.money{
    display: flex;
    flex-direction:row;
     align-items: center;
        justify-content: space-between;
                padding:5px;

}
.iban{
    display: flex;
    flex-direction:row;
     align-items: center;
        justify-content: space-between;
                padding:5px;

}
.email{
    display: flex;
    flex-direction:row;
     align-items:center;
        justify-content: space-between;
                padding:5px;

}
.radio{
    display: flex;
    flex-direction:row;
     align-items: center;
        justify-content: space-between;
                padding:5px;

}
.comments{
    display: flex;
    flex-direction:row;
     align-items: center;
         justify-content:  space-between;
                 padding:5px;

}
.button{
    display: flex;
    flex-direction:row;
     align-items: center;
        justify-content: space-evenly;
                padding:5px;

}
.buttoninner{
height:40px;
width:80px;
background-color:orange;
  color: white;
border-radius:8px;
border:2px solid white;
justify-content:center;

}

.buttoninner:hover{
  color: orange;
background-color:white;
border-radius:8px;

border:2px solid orange;

}

`;