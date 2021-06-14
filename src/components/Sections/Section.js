import React from "react";
import styled from "styled-components"
import { Scrollbars } from "react-custom-scrollbars-2"

const Content = styled.div`
    position: fixed;
    top: 20%;
    width: 80vw;
    height: 80vh;
`

export default function Section(props) {
    const { setShowHeader, children } = props
    return (
        <Content>
            <Scrollbars
                onScrollFrame={(data) => {
                    if (data.scrollTop > 50) {
                        setShowHeader(true)
                    } else {
                        setShowHeader(false)
                    }
                }}
            >
                {children}
            </Scrollbars>
        </Content >
    )
}