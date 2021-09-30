import React from 'react'
import { NavLink } from 'react-router-dom'
import {  Button, Col,    Row } from 'reactstrap'
import GlobalAlert from '../Alert/GlobalAlert'
import Nav from '../Nav/Nav'

const Header = props => {
    return (
        <>
            <Row>
                <Col xs={8}>
                <NavLink to="/tasks"> <h3>TaskManager</h3>
           
          </NavLink>
                </Col>

                <Col>
                    <Nav />
                </Col>
            </Row>

            <hr />

            <GlobalAlert />
        </>
    )
}
export default Header
