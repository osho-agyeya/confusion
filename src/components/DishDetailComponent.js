import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';


  function RenderDish({dish}) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  function RenderComments({comments}) {
    if (comments == null || comments.length === 0) {
      return (
        <div></div>
      );
    }

    const renderedComments = comments.map((comment) => {
      return (
        <li>
          <p>{comment.comment}</p>
          <p>-- {comment.author},  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
        </li>
      );
    });

    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">
          { renderedComments }
        </ul>
      </div>
    );
  }

  const DishDetail = (props)=> {
    if (props.dish != null) {
      return (
      <div class ="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish = {props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments ={props.dish.comments}/>
          </div>
        </div>
      </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }


export default DishDetail;