import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import "./style.css";

import { getArticleData } from "../../Action";
import ArticleCard from "../CommonArticleCard";
import Header from "../commonHeader";


const Articles = (props) => {

    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        props.getArticleData()
        setArticles(props.articles_data)
    },[props])

    return (
        <div className="mainContainer">
            <Header {...props}/>
            <div className="articleWrapper">
                <Container>
                    <Grid columns={3}>
                        <Grid.Row className='articleItem'>
                            {
                                articles.map((item, index) => {
                                    return (
                                        <Grid.Column className="articleCardWrapper" key={index}>
                                            <ArticleCard data={item || {}} id={index} />
                                        </Grid.Column>
                                    )
                                })
                            }
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    const {articles_data} = state.article;
    return {
        articles_data
    };
};

export default connect(
    mapStateToProps,
    {
        getArticleData
    },
)(Articles);

