//import { useEffect, useState } from 'react';
import React,{useEffect,useState} from 'react';
import GetData from './getData';
import { Card } from 'react-bootstrap';
import axios from 'axios';

const HttpRequests = () => {

    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(false)
     
    useEffect(()=>{
      setLoading(true)
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    //console.log("Get Data",response);
    setPost(response?.data)
    setLoading(false)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

    },[])

    console.log("Get Post Data", post);


  return (
    <>
    <div className="container page_witdh">
      <GetData />
      {loading ? 'Loading Data in Card':
           <div className="container">
             <div className="row">
      {post && post !=null && post.length > 0 && post.map((item,index)=>{
        return(
            <div className="col-md-4 col-12">
            <Card>
            <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{item.id}</Card.Subtitle>
            <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
            </Card.Text>
            </Card.Body>
           </Card>
          </div>
        )
      })}          
               
             </div>
           </div>
      }
      
    </div>
    </>
  )
}

export default HttpRequests;
