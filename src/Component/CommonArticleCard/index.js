import React, { useState } from 'react';
import { Image, Card, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import "./style.css"

const Cards = (props) => {

    const [isShowMore, setIsShowMore] = useState(true);
    const [description, setDescription] = useState([]);
    const descriptionLimit = 100;

    const handleMore = (id, length, isShow) => {

        let arr = [];
        arr[id] = isShow ? length : descriptionLimit;
        setDescription(arr);
        setIsShowMore(!isShowMore)
    }

    return (
      <Card className="articleCard">
         <div className="imgWrapper">
           <div className="background"></div>
           <Image src={props?.data?.imageUrl || ""} wrapped ui={false}/>
         </div>
          <Card.Content>
              <Card.Header>{props.data.title}</Card.Header>
              <Card.Meta>
                  <span className='date'>{props.data.author}</span>
              </Card.Meta>
              <Card.Description>
                  {
                    props.data.description.substr(0, description[props.data.id] ?
                      description[props.data.id] : descriptionLimit)
                  }
              </Card.Description>
          </Card.Content>
          <Card.Content extra>
              {
              props.data.description.length > descriptionLimit &&
                          <Button onClick={() => {
                              handleMore(props.data.id, props.data.description.length, isShowMore)
                          }}>
                              {isShowMore ? "Show More" : "Show Less"}
                          </Button>
                  }
          </Card.Content>
      </Card>

    )
}

export default Cards
