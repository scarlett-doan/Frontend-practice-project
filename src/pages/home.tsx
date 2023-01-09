import React from 'react';
const Home = () => {


    return (
        <div>
            <h1>Welcome {sessionStorage.getItem("email")}</h1>
        </div>
    );
};

export default Home;
