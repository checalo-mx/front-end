import Button from '@mui/material/Button';
import React from 'react'

const PrimaryButton = (props) => {
    return (
    <Button fullWidth color={props.color} variant="contained">{props.children}</Button>
    )
}

export default PrimaryButton

