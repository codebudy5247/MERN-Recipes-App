import React, { useState, useEffect } from 'react'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import Message from "../Components/Message"
import Loader from '../Components/Loader'
import Ind from "../Components/Ingridient"
import {
    getPost,
} from '../Redux/Action/RecipeAction'

const RecipeDetails = ({ match }) => {
    const dispatch = useDispatch()
    const postDetails = useSelector((state) => state.postDetails)
    const { loading, error, post } = postDetails


    useEffect(() => {

        if (!post._id || post._id !== match.params.id) {
            dispatch(getPost(match.params.id))

        }
    }, [dispatch, match])
    return (
        <>
            <>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <>
                        <div className="detail-container">
                            <div className="detail">
                                <img src={post.image_url} alt="image_detail_recipe" />
                            </div>
                            <div className="content_details">
                                <h2>{post.dish_name}</h2>
                                <div className="More">
                               <h3>List Of ingredients.</h3>
                                    <div className="ingredient">
                                       
                                        {post.list_of_ind&&post.list_of_ind.map((ING) => <Ind ING={ING} /> )}
                                    </div>
                                
                                </div>

                                <br />
                            </div>
                        </div>
                        <div className="how_to_cook">
                           <center>
                           <h2>How to prepare {post.dish_name}</h2>
                           </center> 
                            <div className="items_prepared">
                                <p>{post.step_of_cook}</p>
                            </div>
                        </div>
                    </>


                )}
            </>
        </>
    )
}

export default RecipeDetails

