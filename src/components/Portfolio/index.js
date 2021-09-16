import React, { useState } from 'react';
import Projects from '../Projects';


// import bucket_list from './assets/image/bucket_list.png';
// import pet_connect from './assets/image/pet_connect_screenshot.png';
// import trip_assist from './assets/image/trip_assist.png';

// <img src={logo} />

function Portfolio() {

    // Replace links with deployed projects and GitHub repos
    const [projects] = useState([
        {
            name: 'Trip-Assist',
            description: 'MERN Stack',
            link: "https://project-3-trip-assist.herokuapp.com/",
            repo: "https://github.com/J-Diaz103/project-3-trip-assist",
            id: 1,
            // image: ""
        },
        {
            name: 'Pet-Connect',
            description: 'MVC',
            link: "https://project-2-pet-connect.herokuapp.com/",
            repo: "https://github.com/J-Diaz103/project-2-pet-connect",
            id: 2,
            // image: ""
        },
        {
            name: 'Bucket-List',
            description: 'HTML/CSS/Javascript',
            link: "https://j-diaz103.github.io/Bucket-List/",
            repo: "https://github.com/J-Diaz103/Bucket-List",
            id: 3,
            // image: ""
        },
    ]);

    return (
        <div>
            <Projects projects={projects} title="My Projects" />
        </div>
    );
};

export default Portfolio;
