import React from 'react';
import './DrinkGuide.css';
import { Row, Col } from 'reactstrap';

function DrinkGuide(props) {
    return (
        <div>
            {props.drink !== undefined &&
                <Row >




                    <Col className="drinkGuideContainer" xs="12" md="6">

                        <div>
                            <div >
                                <img className="drinkPic" src={props.drink.strDrinkThumb}></img>
                            </div>
                        </div>
                    </Col>

                    <Col className="drinkGuideContainer" xs="12" md="6">
                        <div className="drinkimgBox">
                            <legend>glass: </legend>{props.drink.strGlass}
                        </div>
                        <div className="drinkimgBox">
                            <legend>Ingredients: </legend>
                            {props.Ingredients.map((Ingredient, index) =>
                                <div key={index}>

                                    <ul>
                                        <li>
                                            <span>{Ingredient.Ingredient}   </span>:
                                            <span>{Ingredient.amount}</span>
                                        </li>
                                    </ul>

                                </div>

                            )}
                        </div>
                        <div className="drinkimgBox">
                            <legend>Instructions: </legend>
                            {props.drink.strInstructions}
                        </div>


                    </Col>


                </Row >

            }</div>
    );

}

export default DrinkGuide;
