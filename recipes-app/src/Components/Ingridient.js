import React from "react";
import { Card } from "react-bootstrap";
const Ind =({ING})=>{
    return(
        <>
        <Card.Body>
            <Card.Title> <li>{` ${ING.ind_name}   ${ING.ind_quantity}  ${ING.ind_unit}`}</li>
             
            </Card.Title>
          </Card.Body>
        </>
    )
}
export default Ind