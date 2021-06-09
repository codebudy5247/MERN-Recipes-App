import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import moment from "moment";


const Post = ({ post }) => {
  return (
    <>
      <Card className='my-3 p-30 rounded recipe'>
      <Card.Text as='h3'>
     
      {moment(post.createdAt).fromNow()}
  
          </Card.Text>
       <Link to={`/post/${post._id}`}>


          <Card.Img src={post.image_url} variant='top' />

        </Link>

        <Card.Body>
          <Link to={`/post/${post._id}`}>
            <Card.Title as='div'>
              <strong>{post.dish_name}</strong>
            </Card.Title>
          </Link>



          
        </Card.Body>
      </Card>



    </>
  )
}

export default Post