import React from 'react';
import coverImage from "../../assets/cover/dog-in-party-hat.jpg";

function About() {
    return (
        <section className="container">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2 profile-picture" style={{ width: "25%" }} alt="pic" />
            <p>This is Bob. Everyone likes Bob and his birthday hat.</p>

            <p>Bob likes to go to birthday parties and get presents</p>
        </section>
    );
}

export default About;