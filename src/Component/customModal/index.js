import React from 'react';
import {Icon, Image, Modal} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import "./style.css"

const ModalPopUp = (props) => {
    return (
        <Modal className="customModal" size='small' open={props.open} onClose={props.onClick} closeIcon>
            <Modal.Header><Icon name='user' />Profile Information</Modal.Header>
            <Modal.Content image scrolling>
                <Image wrapped size='medium' src={props.data.image} rounded />
                <Modal.Description>
                    <p><span>Name: </span>
                        <label> {props.data.name}</label></p>
                    <p><span>Email: </span>
                        <label>{props.data.email}</label></p>
                    <p><span>Date Of Birth: </span>
                        <label> {props.data.dob}</label></p>
                    <p><span>Gender: </span>
                        <label> {props.data.gender}</label></p>
                    <p><span>Phone: </span>
                        <label>{props.data.phone}</label></p>
                    <p><span>Address: </span>
                        <label>{props.data.address}</label></p>
                </Modal.Description>
            </Modal.Content>

        </Modal>

    )
}

export default ModalPopUp
