import React from 'react';
import "./Modal.css";

import hf from "../../images/human.jfif";
import fairvine from "../../images/fairvine.jpg";
import unimelb from "../../images/unimelb.png";

export default function Experience() {
    return <div>
        <div className="row">
            <div className="column--experience">
                <img className="photo--experience" alt='portrait' src={hf} />
            </div>
            <div className="column--experience text">
                <h3 className="title">Human Financial Pty Ltd</h3>
                <div><strong>Software Engineer</strong></div>
                <div>Sydney, NSW</div>
                <div className="text__date">Mar. 2020 - Dec. 2020</div>

                <p>Developed the frontend and backend for a rewards platform allowing
                    users to earn money to their superannuation by shopping.</p>
            </div>
        </div>

        <div className="row">
            <div className="column--experience">
                <img className="photo--experience" alt='portrait' src={fairvine} />
            </div>
            <div className="column--experience text">
                <h3 className="title">FairVine Super</h3>
                <div><strong>Software Intern</strong></div>
                <div>Sydney, NSW</div>
                <div className="text__date">Nov. 2019 - Mar. 2020</div>

                <p>Super fund based in Bondi Junction in Sydney.</p>
            </div>
        </div>

        <div className="row">
            <div className="column--experience">
                <img className="photo--experience" alt='portrait' src={unimelb} />
            </div>
            <div className="column--experience text">
                <h3 className="title">University of Melbourne</h3>
                <div><strong>Bachelor of Science</strong></div>
                <div>Melbourne, VIC</div>
                <div className="text__date">Mar. 2018 - Dec. 2020</div>

                <p>Majored in Computing and Software Systems.</p>
            </div>
        </div>

    </div>
}