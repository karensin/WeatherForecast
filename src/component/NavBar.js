import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Toggle from 'react-bootstrap-toggle';
import { useState, useEffect, useRef } from 'react';



export default function NavBar() {

    const [toggleActive, setToggleActive] = useState(true)

    function onToggle() {
        setToggleActive(!toggleActive)
    }

    return (
        <div>
            <Navbar.Brand className="navHeader float-left">Weather Forecast</Navbar.Brand>
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item className="navHeader">
                    <Toggle className="navHeader"
                        onClick={onToggle}
                        on={<div className="buttonTextF">F &deg; </div>}
                        off={<div className="buttonTextC">C &deg;</div>}
                        size="lg"
                        offstyle="primary"
                        onstyle="info"
                        active={toggleActive}
                        height='50px'
                        width='200px'
                    />
                </Nav.Item>

            </Nav>
        </div>
    )
}
