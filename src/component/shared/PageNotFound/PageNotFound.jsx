import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <>
        <h1>Page Not Found</h1>
        <Link to ='/'> Back to Login</Link>
        </>
    )
}

export default PageNotFound
