
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import FormContainer from '../Components/FormContainer'

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
