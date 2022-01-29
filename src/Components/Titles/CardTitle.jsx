import Button from '@mui/material/Button';
import React from 'react'

const CardTitle = (props) => {
    return (
    <Button color={props.color} variant="contained">{props.children}</Button>
    )
}

export default CardTitle