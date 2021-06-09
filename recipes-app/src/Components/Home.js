import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import Recipe from "../Components/RecipeCard";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { getRecipes } from "../Redux/Action/RecipeAction";
import { RECIPE_CREATE_RESET } from "../Redux/Action/actionTypes";

const Home = () => {
    const dispatch = useDispatch();

    const recipeList = useSelector((state) => state.recipeList);
    const { loading, error, recipes } = recipeList;
    console.log(recipeList);

    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch]);

    return (
        <>
        <h1>Latest Recipes</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Col>
            {recipes && recipes.map((recipe) => (
              <Row key={recipe._id} >
                <Recipe recipe={recipe} />
              </Row>
            ))}
          </Col>
        </>
      )}
        </>
    )
}

export default Home
