import React from 'react';
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const SCard = styled(Card)`
    border-radius: 25px;
    background: rgba(61, 66, 82, 1);
    color: white;
    height: 400px;
    width: 300px;
    opacity: 0.8;
    transition: 0.5s;

    &:hover {
        opacity: 1;
    }
`

const Content = styled(CardContent)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export default function MediaCard({ handleClick, bgImg, children }) {
    return (
        <SCard>
            <CardActionArea onClick={handleClick}>
                <CardMedia
                    component="img"
                    image={bgImg}
                    title="Disco Cruiser"
                />
                <Content>
                    {children}
                </Content>
            </CardActionArea>
        </SCard>
    )
}