import React, { useState } from 'react';
import MarkdownViewer from '../components/MarkDownViewer';

const Challenges = () => {
    const [selectedChallenge, setSelectedChallenge] = useState('Web Frontend');

    const handleChallengeChange = (challenge) => {
        setSelectedChallenge(challenge);
    };

    const renderChallengeContent = () => {
        switch (selectedChallenge) {
            case 'ML':
                return <MLChallenge />;
            case 'Web Frontend':
                return <WebFrontendChallenge />;
            case 'App Frontend':
                return <AppFrontendChallenge />;
            case 'Backend':
                return <BackendChallenge />;
            case 'UI/UX':
                return <UIUXChallenge />;
            case 'IoT':
                return <IoTChallenge />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col bg-slate-800">
            <Navbar selectedChallenge={selectedChallenge} handleChallengeChange={handleChallengeChange} />
            <div className="container flex flex-row flex-1">
                {renderChallengeContent()}
            </div>
        </div>
    );
};

const Navbar = ({ selectedChallenge, handleChallengeChange }) => {
    const challenges = ['Web Frontend', 'App Frontend', 'Backend', 'UI/UX', 'ML', 'IoT'];

    return (
        <nav className="bg-black p-4">
            {challenges.map((challenge) => (
                <button
                    key={challenge}
                    className={`text-green-400 mr-4 ${challenge === selectedChallenge ? 'font-bold' : ''}`}
                    onClick={() => handleChallengeChange(challenge)}
                >
                    {challenge}
                </button>
            ))}
        </nav>
    );
};

const MLChallenge = () => {
    return (
        <div className="max-w-3xl mx-auto  p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold mb-4">Machine Learning Challenge: Predicting Housing Prices</h1>
            <h2 className="text-xl font-semibold mb-2">Objective:</h2>
            <p>Develop a predictive model using multiple linear regression to forecast housing prices accurately.</p>
            <br />
            <hr />
            <br />
            <p className='text-orange-400'>Download the Data sets here:</p>
            <ul className='underline text-green-500'>
                <li><a href="/Experience-Salary.csv">Click Here to download salary dataset</a></li>
                <li><a href="/housing_price_dataset.csv">Click Here to download housing prices</a></li>
            </ul>
            <br />
            <hr />
            <br />
            <h2 className="text-xl font-semibold mb-2">Dataset Description:</h2>
            <p>CSV format with 50,000 rows, including features like square feet area, bedrooms, bathrooms, neighborhood, year built, and price.</p>
            <h2 className="text-xl font-semibold mb-2">Tasks:</h2>
            <ul className="list-disc pl-4">
                <li>Load dataset and perform EDA.</li>
                <li>Split dataset into training, validation, and testing sets.</li>
                <li>Construct a multiple linear regression model using scikit-learn and evaluate.</li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">Submission Guidelines:</h2>
            <ul className="list-disc pl-4">
                <li>Submit Python code and a report detailing approach and findings.</li>
                <li>Record and upload a video testing the model on the testing data.</li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">Hints:</h2>
            <p>Use Python libraries like pandas, NumPy, and scikit-learn.</p>
            <h2 className="text-xl font-semibold mb-2">BONUS:</h2>
            <p>Visualize data using histograms, scatter plots, etc.</p>
        </div>
    );
};

const WebFrontendChallenge = () => {
    return (
        <div className="max-w-3xl mx-auto p-8">
            <h1 className="text-xl mb-4"><span className='text-green-500 font-bold text-2xl'>What we expect: </span>
                Create a web application and connect it to the backend server hosted at:
            </h1>
            <ul className='text-lg'>
                <li>For Poems Web App -
                    <a className='underline' href="http://panel.mait.ac.in:8001/"> http://panel.mait.ac.in:8001/</a>
                </li>
            </ul>

            <span className='text-green-500'>Below is an example to refer and you can always reach out to us for any doubts.  Happy Hacking!!</span>

            <h1 className='text-xl my-6 text-white'>Reference Video:</h1>
            <div className="video-container flex gap-2 my-4">
                <iframe width="300" height="200" src="https://www.youtube.com/embed/fXMpu_42jJA" title="Website Demo for Poems API- BYTE Challenges" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="300" height="200" src="https://www.youtube.com/embed/Q0SniedHDWU" title="API Demo for Backend Challenges - B.Y.T.E." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


            </div>
            <hr />
            <br />
            <h1 className="text-3xl font-semibold mb-4">Frontend Web Development Task</h1>

            <section className="mb-8">
                <p>This task involves creating a web application that interacts with the B.Y.T.E. Poetry API. The goal is to build a user-friendly interface for users to register, log in, and create/display poems on a dashboard.</p>
                <p>You are allowed to use any frontend framework of your choice, or even opt for vanilla HTML, CSS, and JavaScript. Your creativity and attention to detail will be essential in delivering a polished and functional application.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold">Task Requirements</h2>

                <ul className="list-disc pl-8">
                    <li>Create a <strong>Home Page</strong> with the following features:</li>
                    <ul className="list-disc pl-8">
                        <li>A welcoming message or introduction.</li>
                        <li>Navigation links to other pages (Login, Register, and Dashboard).</li>
                    </ul>

                    <li>Create a <strong>Login Page</strong> with the following features:</li>
                    <ul className="list-disc pl-8">
                        <li>Email and password input fields.</li>
                        <li>A login button that communicates with the API to authenticate the user.</li>
                        <li>If successful, store tokens in local storage and redirect to the Dashboard page.</li>
                    </ul>

                    <li>Create a <strong>Register Page</strong> with the following features:</li>
                    <ul className="list-disc pl-8">
                        <li>Name, email, and password input fields.</li>
                        <li>A register button that communicates with the API to register the user.</li>
                        <li>If successful, alert the user and redirect to the Login page.</li>
                    </ul>

                    <li>Create a <strong>Dashboard Page</strong> with the following features:</li>
                    <ul className="list-disc pl-8">
                        <li>Fetch and display user details from the API.</li>
                        <li>Fetch and display poems from the API in a card format.</li>
                        <li>Include a form to submit new poems with the ability to refresh the page upon successful submission.</li>
                        <li>Apply proper styling to present the dashboard in a professional and user-friendly manner.</li>
                    </ul>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold">Submission Guidelines</h2>

                <p>Upon completion, please provide github link to the submission form</p>
                <p>We appreciate clean and well-structured code. Attention to detail, proper error handling, and responsiveness will be considered during the evaluation process.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold">Note to Developer</h2>

                <p>You are encouraged to use any libraries or frameworks that you are comfortable with.</p>
                <p>Feel free to reach out if you have any clarifications or need further assistance during the development process.</p>
            </section>
            <hr />
            <br />
            <h1 className="text-2xl font-semibold mb-4"> API Documentation</h1>
            <section className="mb-8">
                <h2 className="text-xl font-semibold">Introduction</h2>
                <p>Welcome to the B.Y.T.E. Poetry API documentation. This API allows users to interact with poems and user details.</p>
                <p><strong>Base URL:</strong> <code><a href="http://panel.mait.ac.in:8001">http://panel.mait.ac.in:8001</a></code></p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold">Authentication</h2>
                <p>The API requires authentication using JWT tokens. Please include the access token in the <code>Authorization</code> header for protected endpoints.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold">Endpoints</h2>

                <section className="mb-6">
                    <h3 className="text-lg font-semibold">1. Authentication</h3>

                    <section className="mb-4">
                        <h4 className="text-md font-semibold">1.1 Register</h4>
                        <ul>
                            <li><strong>Endpoint:</strong> <code>/auth/register/</code></li>
                            <li><strong>Method:</strong> <code>POST</code></li>
                            <li><strong>Authentication:</strong> Not Required</li>
                            <li>
                                <strong>Request:</strong>
                                <pre className="bg-black p-2 rounded text-green-500 overflow-x-auto">
                                    <code>
                                        {`{
  "name": "A frontend developer from MAIT",
  "email": "frontend@dev.com",
  "password": "some_strong_password"
}`}
                                    </code>
                                </pre>
                            </li>
                            <li>
                                <strong>Response:</strong>
                                <pre className="bg-black text-green-500 p-2 rounded overflow-x-auto">
                                    <code>
                                        {`{
  "message": "User registered successfully"
}`}
                                    </code>
                                </pre>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h4 className="text-md font-semibold">1.2 Login</h4>
                        <ul>
                            <li><strong>Endpoint:</strong> <code>/auth/login/</code></li>
                            <li><strong>Method:</strong> <code>POST</code></li>
                            <li><strong>Authentication:</strong> Not Required</li>
                            <li>
                                <strong>Request:</strong>
                                <pre className="bg-black text-green-500 p-2 rounded overflow-x-auto">
                                    <code>
                                        {`{
  "email": "frontend@dev.com",
  "password": "some_strong_password"
}`}
                                    </code>
                                </pre>
                            </li>
                            <li>
                                <strong>Response:</strong>
                                <pre className="bg-black text-green-500 p-2 rounded overflow-x-auto">
                                    <code>
                                        {`{
  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}`}
                                    </code>
                                </pre>
                            </li>
                        </ul>
                    </section>
                </section>

                <section className="mb-6">
                    <h3 className="text-lg font-semibold">2. User Details</h3>

                    <section className="mb-4">
                        <h4 className="text-md font-semibold">2.1 Get User Details</h4>
                        <ul>
                            <li><strong>Endpoint:</strong> <code>/auth/user-details/</code></li>
                            <li><strong>Method:</strong> <code>GET</code></li>
                            <li><strong>Authentication:</strong> Required</li>
                            <li>
                                <strong>Response:</strong>
                                <pre className="bg-black text-green-500 p-2 rounded overflow-x-auto">
                                    <code>
                                        {`{
  "id": 6,
  "email": "frontend@dev.com",
  "name": "A frontend developer from MAIT",
  "number": "",
  "role": "STUDENT"
}`}
                                    </code>
                                </pre>
                            </li>
                        </ul>
                    </section>
                </section>

                <section>
                    <h3 className="text-lg font-semibold">3. Poems</h3>

                    <section className="mb-4">
                        <h4 className="text-md font-semibold">3.1 Get Poems</h4>
                        <ul>
                            <li><strong>Endpoint:</strong> <code>/poem/get/</code></li>
                            <li><strong>Method:</strong> <code>GET</code></li>
                            <li><strong>Authentication:</strong> Required</li>
                            <li>
                                <strong>Response:</strong>
                                <pre className="bg-black text-green-500 p-2 rounded overflow-x-auto">
                                    <code>
                                        {`[
  {
    "id": 2,
    "poem": "some crazy poem",
    "author": "its author name",
    "user": 6
  },
  {
    "id": 3,
    "poem": "some other crazy poem",
    "author": "its other author name",
    "user": 6
  }
]`}
                                    </code>
                                </pre>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h4 className="text-md font-semibold">3.2 Create a Poem</h4>
                        <ul>
                            <li><strong>Endpoint:</strong> <code>/poem/create/</code></li>
                            <li><strong>Method:</strong> <code>POST</code></li>
                            <li><strong>Authentication:</strong> Required</li>
                            <li>
                                <strong>Request:</strong>
                                <pre className="bg-black text-green-500 p-2 rounded overflow-x-auto">
                                    <code>
                                        {`{
  "poem": "some other crazy poem",
  "author": "its other author name"
}`}
                                    </code>
                                </pre>
                            </li>
                            <li>
                                <strong>Response:</strong>
                                <pre className="bg-black text-green-500 p-2 rounded overflow-x-auto">
                                    <code>
                                        {`{
  "message": "Poem created successfully"
}`}
                                    </code>
                                </pre>
                            </li>
                        </ul>
                    </section>
                </section>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold">Error Handling</h2>
                <ul>
                    <li><strong>Status Code 401 (Unauthorized):</strong> Invalid or missing authentication token.</li>
                    <li><strong>Status Code 403 (Forbidden):</strong> Insufficient permissions to access a resource.</li>
                    <li><strong>Status Code 404 (Not Found):</strong> Resource or endpoint not found.</li>
                    <li><strong>Status Code 422 (Unprocessable Entity):</strong> Validation error in the request payload.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h1></h1>
            </section>
        </div>

    );
};

const AppFrontendChallenge = () => {
    return (
        <div className="max-w-3xl mx-auto p-8">
            <h1 className="text-xl mb-4"><span className='text-green-500 font-bold text-2xl'>What we expect: </span>
                Create a mobile application and connect it to the backend server hosted at:
            </h1>
            <ul className='text-lg'>
                <li>For Events Mobile App -
                    <a className='underline' href="http://panel.mait.ac.in:8002/"> http://panel.mait.ac.in:8002/</a>
                </li>
            </ul>

            <span className='text-green-500'>Below is an example to refer and you can always reach out to us for any doubts.  Happy Hacking!!</span>

            <h1 className='text-xl my-6 text-white'>Reference Video:</h1>
            <div className="video-container flex gap-2 my-4">
                <iframe width="300" height="200" src="https://www.youtube.com/embed/XdbIsETz2mw" title="App Demo for Poems API - BYTE | Frontend Challenge" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="300" height="200" src="https://www.youtube.com/embed/tm9CPP8C7jw" title="Working of App API for Frontend Challenge - BYTE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
            <h1 className="text-3xl font-bold mb-4">App Development Task</h1>

            <section className="mb-8">
                <p> This task involves creating a mobile application that interacts with the Events API. The goal is to build a user-friendly interface for users to view events and create new events </p>
                <p>You are allowed to use any mobile development framework of your choice, and  is recommended for this task. </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold">Task Requirements</h2>

                <ul className="list-disc pl-8">
                    <li>Create a <strong>Home Screen</strong> with the following features:</li>
                    <ul className="list-disc pl-8">
                        <li>A welcoming message or introduction.</li>
                        <li>Two buttons: one for navigating to the "Show Events" screen and another for navigating to the "Create Event" screen.</li>
                    </ul>

                    <li>Create a <strong>Show Events Screen</strong> with the following features:</li>
                    <ul className="list-disc pl-8">
                        <li>Fetch and display events from the API in a card format .</li>
                        <li>Add a refresh functionality, allowing users to reload and fetch events again from the API.</li>
                        <li>Apply proper styling to present events in a professional and user-friendly manner. Use a dark theme for better visibility.</li>
                    </ul>

                    <li>Create a <strong>Create Event Screen</strong> with the following features:</li>
                    <ul className="list-disc pl-8">
                        <li>A form with input fields for event description and date of the event.</li>
                        <li>A "Create Event" button that communicates with the API  to create a new event.</li>
                        <li>Handle different response statuses and show an alert to the user accordingly (e.g., success, error).</li>
                        <li>Apply the same dark theme and styling as the Show Events Screen for consistency.</li>
                    </ul>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold">Submission Guidelines</h2>

                <p>Upon completion, please provide github link to the submission form</p>
                <p>We appreciate clean and well-structured code. Attention to detail, proper error handling, and responsiveness will be considered during the evaluation process.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold">Note to Developer</h2>

                <p>Feel free to reach out if you have any clarifications or need further assistance during the development process.</p>
            </section>
            <h1 className="text-3xl font-bold mb-4">How API works?</h1>

            <section className="mb-8">
                <h2 className="text-xl font-semibold">Introduction</h2>
                <p>Welcome to the Events API documentation. This API allows users to manage and retrieve information about events.</p>
                <p><strong>Base URL:</strong> <code>http://panel.mait.ac.in:8002</code></p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold">Endpoints</h2>

                <section className="mb-6">
                    <h3 className="text-lg font-semibold">1. Show Events</h3>

                    <section className="mb-4">
                        <h4 className="text-md font-semibold">1.1 Get Events</h4>
                        <ul>
                            <li><strong>Endpoint:</strong> <code>/event/get/</code></li>
                            <li><strong>Method:</strong> <code>GET</code></li>
                            <li>
                                <strong>Response:</strong>
                                <pre className="bg-black text-green-500 p-2 rounded overflow-x-auto">
                                    <code>
                                        {`[
  {
    "id": 1,
    "event_description": "Some dark event in the history",
    "date_of_event": "Its date"
  },
  {
    "id": 2,
    "event_description": "Some other dark event in the history",
    "date_of_event": "Its other date"
  }
]`}
                                    </code>
                                </pre>
                            </li>
                        </ul>
                    </section>
                </section>

                <section>
                    <h3 className="text-lg font-semibold">2. Create Event</h3>

                    <section className="mb-4">
                        <h4 className="text-md font-semibold">2.1 Post Event</h4>
                        <ul>
                            <li><strong>Endpoint:</strong> <code>/event/create/</code></li>
                            <li><strong>Method:</strong> <code>POST</code></li>
                            <li>
                                <strong>Request:</strong>
                                <pre className="bg-black text-green-500 p-2 rounded overflow-x-auto">
                                    <code>
                                        {`{
  "event_description": "Some other dark event in the history",
  "date_of_event": "Its other date"
}`}
                                    </code>
                                </pre>
                            </li>
                            <li>
                                <strong>Response:</strong>
                                <pre className="bg-black text-green-500 p-2 rounded overflow-x-auto">
                                    <code>
                                        {`{
  "message": "Event created successfully"
}`}
                                    </code>
                                </pre>
                            </li>
                        </ul>
                    </section>
                </section>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold">Error Handling</h2>
                <ul>
                    <li><strong>Status Code 401 (Unauthorized):</strong> Invalid or missing authentication token.</li>
                    <li><strong>Status Code 403 (Forbidden):</strong> Insufficient permissions to access a resource.</li>
                    <li><strong>Status Code 404 (Not Found):</strong> Resource or endpoint not found.</li>
                    <li><strong>Status Code 422 (Unprocessable Entity):</strong> Validation error in the request payload.</li>
                </ul>
            </section>


        </div>


    );
};

const BackendChallenge = () => {
    return (
        <div className="max-w-3xl mx-auto p-8">
            <h1 className="text-xl mb-4"><span className='text-green-500 font-bold text-2xl'>What we expect: </span>
                Create a backend server with user authentication and a RESTful API for managing poems. Users can create poems, retrieve all poems, and retrieve poems created by a specific user.</h1>

            <span className='text-green-500'>Below is an example to refer and you can always reach out to us for any doubts.  Happy Hacking!!</span>

            <h1 className="text-2xl font-semibold mb-4"> API Documentation</h1>
            <h1 className='text-xl my-6 text-white'>Reference Video:</h1>
            <div className="video-container flex gap-2 my-4 justify-center">
                <iframe width="400" height="300" src="https://www.youtube.com/embed/fXMpu_42jJA" title="Website Demo for Poems API- BYTE Challenges" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
            <section className="mb-8">
                <h2 className="text-xl font-semibold">Introduction</h2>
                <p>Welcome to the B.Y.T.E. Poetry API documentation. This API allows users to interact with poems and user details.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold">Authentication</h2>
                <p>The API requires authentication using JWT tokens. Access token will be required in Authorization header so implement the logic accordingly.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold">Endpoints</h2>

                <section className="mb-6">
                    <h3 className="text-lg font-semibold">1. Authentication</h3>

                    <section className="mb-4">
                        <h4 className="text-md font-semibold">1.1 Register</h4>
                        <ul>
                            <li><strong>Endpoint:</strong> <code>/auth/register/</code></li>
                            <li><strong>Method:</strong> <code>POST</code></li>
                            <li><strong>Authentication:</strong> Not Required</li>
                            <li>
                                <strong>Request:</strong>
                                <pre className="bg-black p-2 rounded text-green-500 overflow-x-auto">
                                    <code>
                                        {`{
  "name": "A frontend developer from MAIT",
  "email": "frontend@dev.com",
  "password": "some_strong_password"
}`}
                                    </code>
                                </pre>
                            </li>
                            <li>
                                <strong>Response:</strong>
                                <pre className="bg-black text-green-500 p-2 rounded overflow-x-auto">
                                    <code>
                                        {`{
  "message": "User registered successfully"
}`}
                                    </code>
                                </pre>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h4 className="text-md font-semibold">1.2 Login</h4>
                        <ul>
                            <li><strong>Endpoint:</strong> <code>/auth/login/</code></li>
                            <li><strong>Method:</strong> <code>POST</code></li>
                            <li><strong>Authentication:</strong> Not Required</li>
                            <li>
                                <strong>Request:</strong>
                                <pre className="bg-black text-green-500 p-2 rounded overflow-x-auto">
                                    <code>
                                        {`{
  "email": "frontend@dev.com",
  "password": "some_strong_password"
}`}
                                    </code>
                                </pre>
                            </li>
                            <li>
                                <strong>Response:</strong>
                                <pre className="bg-black text-green-500 p-2 rounded overflow-x-auto">
                                    <code>
                                        {`{
  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}`}
                                    </code>
                                </pre>
                            </li>
                        </ul>
                    </section>
                </section>

                <section className="mb-6">
                    <h3 className="text-lg font-semibold">2. User Details</h3>

                    <section className="mb-4">
                        <h4 className="text-md font-semibold">2.1 Get User Details</h4>
                        <ul>
                            <li><strong>Endpoint:</strong> <code>/auth/user-details/</code></li>
                            <li><strong>Method:</strong> <code>GET</code></li>
                            <li><strong>Authentication:</strong> Required</li>
                            <li>
                                <strong>Response:</strong>
                                <pre className="bg-black text-green-500 p-2 rounded overflow-x-auto">
                                    <code>
                                        {`{
  "id": 6,
  "email": "frontend@dev.com",
  "name": "A frontend developer from MAIT",
  "number": "",
  "role": "STUDENT"
}`}
                                    </code>
                                </pre>
                            </li>
                        </ul>
                    </section>
                </section>

                <section>
                    <h3 className="text-lg font-semibold">3. Poems</h3>

                    <section className="mb-4">
                        <h4 className="text-md font-semibold">3.1 Get Poems</h4>
                        <ul>
                            <li><strong>Endpoint:</strong> <code>/poem/get/</code></li>
                            <li><strong>Method:</strong> <code>GET</code></li>
                            <li><strong>Authentication:</strong> Required</li>
                            <li>
                                <strong>Response:</strong>
                                <pre className="bg-black text-green-500 p-2 rounded overflow-x-auto">
                                    <code>
                                        {`[
  {
    "id": 2,
    "poem": "some crazy poem",
    "author": "its author name",
    "user": 6
  },
  {
    "id": 3,
    "poem": "some other crazy poem",
    "author": "its other author name",
    "user": 6
  }
]`}
                                    </code>
                                </pre>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h4 className="text-md font-semibold">3.2 Create a Poem</h4>
                        <ul>
                            <li><strong>Endpoint:</strong> <code>/poem/create/</code></li>
                            <li><strong>Method:</strong> <code>POST</code></li>
                            <li><strong>Authentication:</strong> Required</li>
                            <li>
                                <strong>Request:</strong>
                                <pre className="bg-black text-green-500 p-2 rounded overflow-x-auto">
                                    <code>
                                        {`{
  "poem": "some other crazy poem",
  "author": "its other author name"
}`}
                                    </code>
                                </pre>
                            </li>
                            <li>
                                <strong>Response:</strong>
                                <pre className="bg-black text-green-500 p-2 rounded overflow-x-auto">
                                    <code>
                                        {`{
  "message": "Poem created successfully"
}`}
                                    </code>
                                </pre>
                            </li>
                        </ul>
                    </section>
                </section>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold">Response Code Handling</h2>
                <ul className=' list-disc'>
                    <li>Send meaningful http response codes</li>
                    <li>Refer to <span className='text-green-500'><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status">https://developer.mozilla.org/en-US/docs/Web/HTTP/Status</a></span></li>
                </ul>
            </section>
            <section className="mb-8">
                <h2 className="text-xl font-semibold">Submission Guidelines</h2>

                <p>Upon completion, please provide github link to the submission form</p>
                <p>We appreciate clean and well-structured code. Attention to detail, proper error handling, and responsiveness will be considered during the evaluation process.</p>
            </section>

            <section className="mb-8">
                <h1></h1>
            </section>
        </div>
    );
};

const UIUXChallenge = () => {
    return (
        <div className="p-4 bg-black max-w-3xl   rounded-lg shadow-md m-5 h-screen">
            <h2 className="text-lg font-bold text-gray-300 mb-2">UI/UX Challenge</h2>
            <ul className="list-disc text-gray-200 pl-4">
                <li>Create screens for onboarding, dashboard, task list, task details, calendar integration, collaboration tools, project tracking and settings.</li>
                <li>Focus on a clean, intuitive design that enhances productivity and reflects SpaceX branding.</li>
                <li>Submit a Figma prototype link with a brief rationale for your design choices.</li>
                <li>Optional: Include a PDF case study detailing your design process and user research.</li>
            </ul>
            <div className="mt-4">
                <p className="text-gray-300 text-sm">
                    <span className='text-green-500'>Writer's Tip:</span> You can use your creativity and google sample UI's for similar functionality.
                    {/* <a href="https://www.example.com/ui-ux-challenge" className="text-blue-500">https://www.example.com/ui-ux-challenge</a> */}
                </p>
            </div>
        </div>

    );
};

const IoTChallenge = () => {
    return (
        <div className='max-w-3xl mx-auto p-8'>
            <div className=" p-8 rounded-lg shadow-lg">
                <h1 className="text-xl mb-4"><span className='text-green-500 font-bold text-2xl'>What we expect: </span>
                    Create a mobile application and connect it to the backend server hosted at:
                </h1>
                <ul className='text-lg'>
                    <li>For Events Mobile App -
                        <a className='underline' href="http://panel.mait.ac.in:8002/"> http://panel.mait.ac.in:8002/</a>
                    </li>
                </ul>

                <span className='text-green-500'>Below is an example to refer and you can always reach out to us for any doubts.  Happy Hacking!!</span>

                <h1 className='text-xl my-6 text-white'>Reference Video:</h1>
                <div className="video-container flex gap-2 my-4">
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/_5fUDcr7Gvw" title="RUST Code Demo- BYTE Iot Challenge" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/z8CDhgvwywE" title="TinkerCAD Demo - BYTE Iot Challenge" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div>
                <h1 className="text-2xl font-bold mb-4">Research Paper: Exploring Internet of Things (IoT) with Arduino and Rust</h1>
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-2">Abstract</h2>
                    <p>
                        This paper introduces an engaging task for individuals interested in exploring the Internet of Things (IoT) domain. The task involves the use of Arduino boards to create a circuit controlling RGB LED lights through a push button. Participants are encouraged to delve into both traditional C/C++ programming (Part 1) and modern systems programming with Rust (Part 2). The paper provides a comprehensive guide to the task, including hardware setup, software requirements, and coding instructions.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-2">1. Introduction</h2>
                    <p>
                        The project aims to bridge the gap between hardware and software in IoT by leveraging the popular Arduino platform. Participants will employ their skills in programming and electronics to create an interactive circuit that cycles through RGB lights based on user inputs. The task is divided into two parts, each emphasizing a different programming language - C/C++ for the first part and Rust for the second.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-2">2. Background</h2>
                    <h3 className="text-lg font-bold mb-2">2.1 Arduino Platform</h3>
                    <p>
                        Arduino, an open-source electronics platform, provides an accessible entry point into the world of hardware development. It consists of a physical programmable circuit board and a software (IDE) used to write and upload code to the board. The simplicity and versatility of Arduino make it an ideal choice for IoT projects.
                    </p>
                    <h3 className="text-lg font-bold mb-2">2.2 Tinkercad and Wowki</h3>
                    <p>
                        Tinkercad, a popular online platform, allows users to simulate Arduino circuits virtually. Wowki is another online simulation platform with similar functionalities. These platforms provide an opportunity for those without access to physical hardware to participate in the task.
                    </p>
                    <h3 className="text-lg font-bold mb-2">2.3 Rust Programming Language</h3>
                    <p>
                        Rust, a modern systems programming language, is chosen for its emphasis on safety, performance, and concurrency. Part 2 of the task challenges participants to transition from traditional C/C++ to Rust, encouraging exploration of contemporary programming languages.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-2">3. Task Overview</h2>
                    <section className="mb-4">
                        <h3 className="text-lg font-bold mb-2">3.1 Part 1: Arduino Circuit and C/C++ Programming</h3>
                        <h4 className="text-lg font-bold mb-2">3.1.1 Hardware Setup</h4>
                        <p>
                            Participants are required to set up an Arduino circuit using a push button and RGB LED lights. The sequence of the lights should be as follows:
                            <ul className="list-disc pl-4">
                                <li>Red light on, Green light off, Blue light off when the circuit is switched on.</li>
                                <li>Red light off, Green light on, Blue light off on the first press of the push button.</li>
                                <li>Red light off, Green light off, Blue light on on the second press of the push button.</li>
                            </ul>
                        </p>
                        <h4 className="text-lg font-bold mb-2">3.1.2 Software Setup</h4>
                        <p>
                            The Arduino IDE is introduced for writing and uploading C/C++ code. Participants without hardware can simulate the circuit and code on Tinkercad.
                        </p>
                        <h4 className="text-lg font-bold mb-2">3.1.3 Code Snippet</h4>
                        <pre className="bg-black text-green-500 p-4 rounded-md"><code>{`
const int ledPin = 9; // Define the pin for the LED

void setup() {
    pinMode(ledPin, OUTPUT); // Set the LED pin as an output
}

void loop() {
    digitalWrite(ledPin, HIGH); // Turn on the LED
    delay(1000); // Wait for 1 second
    digitalWrite(ledPin, LOW); // Turn off the LED
    delay(1000); // Wait for 1 second
}
                    `}</code></pre>
                    </section>
                    <section>
                        <h3 className="text-lg font-bold mb-2">3.2 Part 2: Rust Programming on Ubuntu or Wowki</h3>
                        <h4 className="text-lg font-bold mb-2">3.2.1 Hardware Setup (For Ubuntu Users)</h4>
                        <p>
                            Participants with access to hardware are guided on setting up the Arduino board in an Ubuntu environment.
                        </p>
                        <h4 className="text-lg font-bold mb-2">3.2.2 Software Setup</h4>
                        <p>
                            Rust installation instructions and coding guidelines are provided for the second part of the task. Wowki is introduced as an alternative platform for participants without hardware.
                        </p>
                        <h4 className="text-lg font-bold mb-2">3.2.3 Code Snippet</h4>
                        <pre className="bg-black text-green-500 p-4 rounded-md"><code>{`
extern crate rppal;
use rppal::gpio::{Gpio, Level};
use std::thread;
use std::time::Duration;

fn main() {
    let gpio = Gpio::new().unwrap();
    let pin = gpio.get(9).unwrap().into_output();

    loop {
        pin.set_high(); // Turn on the LED
        thread::sleep(Duration::from_secs(1)); // Wait for 1 second
        pin.set_low(); // Turn off the LED
        thread::sleep(Duration::from_secs(1)); // Wait for 1 second
    }
}
                    `}</code></pre>
                    </section>
                </section>
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-2">4. Conclusion</h2>
                    <p>
                        This IoT task offers participants a holistic learning experience, blending hardware and software aspects. It encourages exploration of different programming languages and provides flexibility for individuals with varying access to resources. The inclusion of both traditional and modern programming languages reflects the evolving landscape of IoT development.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-2">5. Resources</h2>
                    <ul className="list-disc pl-4">
                        <li><a href="https://www.arduino.cc/">Arduino Official Website</a></li>
                        <li><a href="https://www.tinkercad.com">Tinkercad</a></li>
                        <li><a href="https://www.rust-lang.org/">Rust Official Website</a></li>
                        <li><a href="https://wowki.com">Wowki</a></li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Challenges;
