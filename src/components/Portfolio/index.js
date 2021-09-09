import React, { useState } from 'react';
import Projects from '../Projects';
// const styles = {
//     aboutMe: {
//         background: 'rgb (20, 33, 61)',
//         alignItems: 'center',
//     }
// }
// style="font-size:1.125rem;text-anchor:middle"

function Portfolio() {

    // Replace links with deployed projects and GitHub repos
    const [projects] = useState([
        {
            name: 'Trip-Assist',
            description: 'MERN Stack',
            link: "https://project-3-trip-assist.herokuapp.com/",
            repo: "https://github.com/J-Diaz103/project-3-trip-assist",
            id: 1
        },
        {
            name: 'Pet-Connect',
            description: 'MVC',
            link: "https://project-2-pet-connect.herokuapp.com/",
            repo: "https://github.com/J-Diaz103/project-2-pet-connect",
            id: 2
        },
        {
            name: 'Bucket-List',
            description: 'HTML/CSS/Javascript',
            link: "https://j-diaz103.github.io/Bucket-List/",
            repo: "https://github.com/J-Diaz103/Bucket-List",
            id: 3
        },
    ]);

    return (
        <div>
            <Projects projects={projects} title="My Projects" />
        </div>
    );
};

export default Portfolio;
