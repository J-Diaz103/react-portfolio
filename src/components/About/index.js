import { useState } from "react";

// const styles = {
//     aboutMe: {
//         background: 'rgb (20, 33, 61)',
//         alignItems: 'center',
//     }
// }

const About = () => {
    const [intro] = useState("I am a fullstack web developer  with a lot to learn but eager to become a part of a bigger team");
    return (
        <div className='aboutMe'>
            <h1> About Me</h1>
            <p>{intro}</p>
        </div>
    );
}

export default About;