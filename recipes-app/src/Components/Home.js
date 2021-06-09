import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";

import Post from "../Components/Recipe";
import Message from "../Components/Message";
import Loader from "../Components/Loader";

import { getPosts } from "../Redux/Action/RecipeAction";


const Home = () => {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList);
  const { loading, error, posts } = postList;
  console.log(postList);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const createPostHandler = () => {
    dispatch(getPosts());
  };
  return (
    <>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
        <Row>
        {posts.map((post) => (
          <Col key={post._id} sm={12} md={6} lg={4} xl={3}>
            <Post post={post} />
          </Col>
        ))}
      </Row>
      
    </>
  )}

    </>
  );
};

export default Home;
