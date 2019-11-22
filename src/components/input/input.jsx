import React from 'react';
import './input.css';
import { Row, Col } from 'reactstrap';


function Input(props) {
    return (
        <Row className="InputCon">
            {/* <img className="Logo" src={logo} /> */}

            <Col xs="12">

                <span className="cocktailInput">
                    <input onChange={(e) => { props.changeInput(e); }} value={props.InputVal} className="input" type="text" placeholder="your cocktail"></input>
                    <input onClick={props.btnClick} type="button" value="cookup" className="inputBtn" />
                </span>
                {props.autoComplete !== undefined && props.InputVal !== "" && props.autoComplete !== null &&
                    <div className="scrollEnable" >
                        {props.autoComplete.map((drink, index) =>
                            <div key={index} onClick={() => props.showDrink(drink)} className="autoComplete">{drink.strDrink}</div>
                        )}
                    </div>
                }



            </Col>
        </Row>



    );


}

export default Input;
