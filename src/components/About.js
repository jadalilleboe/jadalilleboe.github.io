import React from 'react'

const About = () => {
    return (
        <div className="about-content">
            <div className="about-info box">
                <h1>Resume</h1>
                <div style={{paddingLeft: '20px'}}>
                    <h2><u>Education</u></h2>
                    <h3>University of Minnesota - Twin Cities <i>Bachelor's in Computer Science, Minor in Technical Writing and Communication</i></h3>
                    <h4>September 2020 - Anticipated Graduation May 2024</h4>
                    <ul>
                        <li>4.0 GPA - Dean's List - Honors Student</li>
                    </ul>
                    <h2><u>Experience</u></h2>
                    <h3>Student Tech Support Services/Open Source Software Developer <i>University of Minnesota</i></h3>
                    <h4>December 2021 - Present</h4>
                    <ul>
                        <li>Creating new features and fixing issues for <a href="https://skyportal.io/">Skyportal</a>, an open source astronomical data platform. Participate in weekly standup meetings.</li>
                        <li>Use React, Tornado (backend framework for Python), and SQLAlchemy to create end-to-end features.</li>
                        <li>Write unit tests with Selenium and Pytest.</li>
                    </ul>
                    <h3>Student Researcher <i>GroupLens Research Lab</i></h3>
                    <h4>September 2021 - Present</h4>
                    <ul>
                        <li>Building a user interface with React and Material UI which allows users to audit predictions made by the Wikipedia machine learning model ORES.</li>
                        <li>Using software development tools such as Git in a team of 3 developers.</li>
                    </ul>
                    <h3>Student Admin/Support Services <i>University of Minnesota</i></h3>
                    <h4>February 2021 - January 2021</h4>
                    <ul>
                        <li>Create web content to be viewed by over 100 faculty members on department intranet</li>
                        <li>Assist the accounting team with the creation and maintenance of spreadsheets to visualize finance data</li>
                    </ul>
                    <h2><u>Extracurriculars</u></h2>
                    <ul>
                        <li>Officer for UMN Association of Computing Machinery for Women</li>
                        <li>Postman Student Leader - presented the talk “How I Built an API For My Website’s Blog” at the Postman Student Summit and hosted API workshops</li>
                        <li>Volunteer at CoderDojo Twin Cities</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About