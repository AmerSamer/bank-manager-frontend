import React from 'react';

function Home({ cash, credit, passportId }) {
    return (
        <div>
            <br/>
            passportId : {passportId} , cash : {cash} , credit: {credit},
        </div>
    );
}

export default Home;