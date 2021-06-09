import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import FormContainer from '../Components/FormContainer'

var IndArray = [];
const Ind = () => {
    const [ind, setind] = useState({
        ingredients_name: "",
        ingredients_quantity: "",
        ingredients_unit: ""

    })

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     IndArray.push(ind);
    //     console.log(IndArray);
    //     setind({
    //         ind_name: "",
    //         ind_quantity: "",
    //         ind_unit: ""
    //     });
    // };
    // const clear = () => {
    //     setind({
    //         ind_name: "",
    //         ind_quantity: "",
    //         ind_unit: ""
    //     })
    // }
    return (
        <>
            <form>

                <Form.Group controlId='ingredients_name'>
                    <Form.Label>Ingredient Name</Form.Label>
                    <Form.Control
                        type='ingredients_name'
                        placeholder='Enter Ingredient Name'

                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='ingredients_quantity'>
                    <Form.Label>Quantity in number</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Enter quantity'
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='ingredients_unit'>
                    <Form.Label>Unit</Form.Label>
                    <Form.Control
                        type='ingredients_unit'
                        placeholder='Enter Ingredient Name'

                    ></Form.Control>
                </Form.Group>
                <Button
                    type='submit'
                    variant='success'
                    className="btn btn-primary btn-lg btn"
                >
                    Add Ingredient
        </Button>
                <Button
                    type='submit'
                    variant='danger'
                    className="btn btn-primary btn-lg btn"
                >
                    Reset
        </Button>
            </form>
        </>
    )
}


const Input = () => {
    return (
        <>
            <FormContainer>
                <h1 className="header">Create A Recipe</h1>

                <Form>
                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Enter name'

                        ></Form.Control>
                    </Form.Group>



                    <Form.Group controlId='image'>
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter image url'

                        ></Form.Control>

                    </Form.Group>




                    <Button type='submit' variant='success' className="btn btn-primary btn-lg btn">
                        Add
            </Button>
                    <Button type='submit' variant='danger' className="btn btn-primary btn-lg btn">
                        Reset
            </Button>
                </Form>

            </FormContainer>
        </>
    )
}

export default Input
