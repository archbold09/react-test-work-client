import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = (  ) => (
    <>
        <h1>NOT FOUND</h1>
        <Link to="/">
            <button>
                <p>Click Me!</p>
            </button>
        </Link>
    </>
)

export default NotFound;