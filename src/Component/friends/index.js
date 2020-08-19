import React, { useEffect, useState } from 'react';
import { Grid, Card, Image, Container, CardHeader} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import "./style.css"
import Header from "../commonHeader";
import ModalPopUp from "../customModal"
import { connect } from "react-redux";
import { getFriendsData } from "../../Action";

const Friend = (props) => {
    const [isOpen,setOpen] = useState(false);
    const [isSelectedData, setSelectedData] = useState({})

    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        props.getFriendsData()
        setFriends(props.friends_data)
    },[props]);

    return (
        <div className="mainContainer">
            <Header {...props}/>
            <div className="containerWrapper">
                <Container>
                    <Grid>
                        <Grid.Row className='itemsWrapper'>
                            {
                                friends.map((data, index) => {
                                    return (
                                        <Grid.Column className="listWrapper" key={index}>
                                            <Card onClick={()=>{setOpen(true)
                                                setSelectedData(data)
                                            }}>
                                                <div className='itemHead'>
                                                    <div className="itemImg">
                                                        <Image src={data.image} wrapped ui={false} />
                                                    </div>
                                                    <div className="itemText">
                                                        <CardHeader>{data.name}</CardHeader>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Grid.Column>
                                    )
                                })

                            }
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
            {
                isOpen &&
                <ModalPopUp  open={isOpen} onClick={()=> setOpen(false)} data={isSelectedData} />
            }
        </div>
    )
}

const mapStateToProps = state => {
    const {friends_data} = state.friends;
    return {
        friends_data
    };
};

export default connect(
    mapStateToProps,
    {
        getFriendsData
    },
)(Friend);
