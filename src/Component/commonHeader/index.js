import React from 'react';
import {Grid, Container} from 'semantic-ui-react'
import "./style.css"

const Header = (props) =>{
    return(
        <div className="headerWrapper">
            <Container>
                <Grid columns={2} className="header-row">
                    <Grid.Column>
                        <h2 color='white'>
                            {props.location.pathname === "/home" ? 'News Articles' : 'Friends'}
                        </h2>
                    </Grid.Column>
                    <Grid.Column>
                        <Grid className='itemWrapper'>
                            <div className="menuItem" onClick={()=>{
                                props.history.push("/home")
                            }}>
                                News Articles
                            </div>
                            <div className="menuItem" onClick={()=>{
                                props.history.push("/friends")
                            }}>
                                Friends
                            </div>
                        </Grid>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}

export default Header
