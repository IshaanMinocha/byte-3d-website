import React, { useState } from 'react';
import MarkdownViewer from '../components/MarkDownViewer';

const Challenges = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
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
        <div className="sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl w-full mx-auto text-gray-300 p-8">
            <h1 className="text-2xl font-semibold mb-4">Challenge 1: Machine Learning Challenge: Predicting Employee Salaries</h1>

            <div>

                <h2 className="text-xl font-semibold mb-2">Problem Statement:</h2>
                <ol className="list-decimal pl-4">
                    <li>You are provided with a .csv file containing the employee's experience (in months) and salary (in thousand).</li>
                    <ul className='underline text-green-500'>
                        <li><a href="/Experience-Salary.csv">Click Here to download salary dataset</a></li>
                    </ul>
                    <li>Your task is to predict the salary based on the employee's past experience using linear regression.</li>
                    <li>Complete the given functions to implement linear regression.</li>
                    <ul className='underline text-green-500'>
                        <li><a target='_blank' href="https://colab.research.google.com/drive/1pSwznkYoo0r3VZwgu7DFHBZxvh3Nms2P?usp=sharing" download>Click Here to edit directly in the Google Collab file</a></li>
                        <li><a href="/implementation.ipynb" download>Click Here to download .ipynb file</a></li>
                        <li><a href="/implementation.py" download>Click Here to download .py file</a></li>
                        <li><a href="/implementation.pdf" download>More submission instructions and reference materials</a></li>
                    </ul>
                </ol>
                <br></br>
                <section className="mb-8">
                    <h2 className="text-xl font-semibold">Submission Guidelines</h2>

                    <p>Upon completion, please provide github link to the submission form <a className='underline text-green-500' target='_blank' href="https://forms.gle/vnGE7aMLzuEJv49n8">https://forms.gle/vnGE7aMLzuEJv49n8</a> </p>
                    <p>We appreciate clean and well-structured code. Attention to detail, proper error handling will be considered during the evaluation process.</p>
                </section>
                <hr className="my-4" />
                <h2 className="text-xl font-semibold mb-2">Packages:</h2>
                <pre className="whitespace-pre-wrap bg-black p-2 text-green-500">
                    <code className=''>
                        {`import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import math
import copy

# import data file
# clean the data up to 2 decimal places for both experience and salary columns
# test size = 20%
# reshape the values using the concept of feature matrix
data = pd.read_csv()`}
                    </code>
                </pre>

                <h2 className="text-xl font-semibold mb-2">Implementation 1:</h2>
                <pre className="whitespace-pre-wrap bg-black p-2 text-green-500">
                    <code>
                        {`# complete the compute_cost() function below to compute the cost J(w, b)
def compute_cost(x, y, w, b):
"""
Computes the cost function for linear regression.

Args:
x (ndarray): Shape (m,) Input to the model (experience in months)
y (ndarray): Shape (m,) Label (Actual salaries)
w, b (scalar): Parameters of the model

Returns
total_cost (float): The cost of using w, b as the parameters for linear regression
to fit the data points in x and y
"""
# number of training examples
m = x.shape[0]

# You need to return this variable correctly
    total_cost = 0
    
    # START CODE HERE
    
    # END CODE HERE
    
    return total_cost
    
    # Compute cost with some initial values for parameters w, b
    # Do not change the values in this code, simply run this block
    initial_w = 0.9998
    initial_b = 1
    
    cost = compute_cost(X_train, y_train, initial_w, initial_b)
    print(type(cost))
    print(cost)
    
    # output for cost should be around 14.406`}
                    </code>
                </pre>

                <h2 className="text-xl font-semibold mb-2">Implementation 2:</h2>
                <pre className="whitespace-pre-wrap bg-black p-2 text-green-500">
                    <code>
                        {`# implement a function called compute_gradient which calculates ∂J(w)/∂w, ∂J(w)/∂b
def compute_gradient(x, y, w, b):
"""
Computes the gradient for linear regression
Args:
x (ndarray): Shape (m,) Input to the model (Population of cities)
y (ndarray): Shape (m,) Label (Actual profits for the cities)
w, b (scalar): Parameters of the model
Returns:
dj_dw (scalar): The gradient of the cost w.r.t. the parameters w
dj_db (scalar): The gradient of the cost w.r.t. the parameter b
"""

# Number of training examples
m = x.shape[0]
dj_dw = 0
dj_db = 0

# START CODE HERE

# END CODE HERE

return dj_dw, dj_db

initial_w = 0.998
initial_b = 1

tmp_dj_dw, tmp_dj_db = compute_gradient(X_train, y_train, initial_w, initial_b)
print('Gradient at initial w, b (zeros):', tmp_dj_dw, tmp_dj_db)

# output should be
# Gradient at initial w, b (zeros): [22.08482317] [0.36802405]
test_w = 0.2
test_b = 0.2
tmp_dj_dw, tmp_dj_db = compute_gradient(X_train, y_train, test_w, test_b)

print('Gradient at test w, b:', tmp_dj_dw, tmp_dj_db)

# output should be
# Gradient at test w, b: [-600.2060557] [-21.2052925]
`}
                    </code>
                </pre>

                <h2 className="text-xl font-semibold mb-2">Gradient Descent:</h2>
                <pre className="whitespace-pre-wrap bg-black p-2 text-green-500">
                    <code>
                        {`# do not change the below function, just run it
def gradient_descent(x, y, w_in, b_in, cost_function, gradient_function, alpha, num_iters):
m = len(x)
J_history = []
w_history = []
w = copy.deepcopy(w_in)
b = b_in
for i in range(num_iters):
dj_dw, dj_db = gradient_function(x, y, w, b)
w = w - alpha * dj_dw
b = b - alpha * dj_db
if i < 100000:
cost = cost_function(x, y, w, b)
J_history.append(cost)
if i % math.ceil(num_iters/10) == 0:
w_history.append(w)
print(f"Iteration {i:4}: Cost {float(J_history[-1]):8.2f}   ")
return w, b, J_history, w_history

# Now let's run the gradient descent algorithm above to learn the parameters for our dataset.
# you can alter the values of iterations, alpha to get the minimum cost and minimum values for w and b

# initialize fitting parameters. Recall that the shape of w is (n,)
initial_w = 0.
initial_b = 0.

# some gradient descent settings
iterations = 2500
alpha = 0.0001

w, b, _, _ = gradient_descent(X_train, y_train, initial_w, initial_b,
    compute_cost, compute_gradient, alpha, iterations)
    print("w, b found by gradient descent:", w, b)
    `}
                    </code>
                </pre>

                <h2 className="text-xl font-semibold mb-2">Train the Model:</h2>
                <pre className="whitespace-pre-wrap bg-black p-2 text-green-500">
                    <code>
                        {`# execute the code to predict the output values on the given input of numpy arrays
# do not alter the code, just execute it
m = X_train.shape[0]
predicted = np.zeros(m)

for i in range(m):
predicted[i] = w * X_train[i] + b
`}
                    </code>
                </pre>

                <h2 className="text-xl font-semibold mb-2">Plot the Predicted Values:</h2>
                <pre className="whitespace-pre-wrap bg-black p-2 text-green-500">
                    <code>
                        {`# Plot the linear fit
# code for visualizing the predicted values
# Add your visualization code here
`}
                    </code>
                </pre>

                <h2 className="text-xl font-s
                emibold mb-2">Predict Output on Input Values:</h2>
                <pre className="whitespace-pre-wrap bg-black p-2 text-green-500">
                    <code>
                        {`# Predict output on input values [17.0, 50.0]
# code for predicting and displaying output values
# Add your prediction code here
`}
                    </code>
                </pre>
            </div>
            <br />
            <hr />
            <br />
            <h1 className="text-2xl font-semibold mb-4">Challenge 2: Machine Learning Challenge: Predicting Housing Prices</h1>
            <h2 className="text-xl font-semibold mb-2">Objective:</h2>
            <p>Develop a predictive model using multiple linear regression to forecast housing prices accurately.</p>
            <br />
            <hr />
            <br />
            <p className='text-orange-400'>Download the Data sets here:</p>
            <ul className='underline text-green-500'>
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
            <br></br>
            <section className="mb-8">
                <h2 className="text-xl font-semibold">Submission Guidelines</h2>

                <p>Upon completion, please provide github link to the submission form <a className='underline text-green-500 ' target='_blank' href="https://forms.gle/vnGE7aMLzuEJv49n8">https://forms.gle/vnGE7aMLzuEJv49n8</a> </p>
                <p>We appreciate clean and well-structured code. Attention to detail, proper error handling will be considered during the evaluation process.</p>
            </section>


        </div>
    );
};




const WebFrontendChallenge = () => {
    return (
        <div className="sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl w-full mx-auto text-gray-300 p-8">
            <h1 className="text-xl mb-4"><span className='text-green-500 font-bold text-2xl'>What we expect: </span>
                Create a web application and connect it to the backend server hosted at:
            </h1>
            <ul className='text-lg'>
                <li>For Poems Web App -
                    <a className='underline' href="http://panel.mait.ac.in:8001/"> http://panel.mait.ac.in:8001/</a>
                </li>
            </ul>

            <span className='text-green-500'>Below is an example to refer and you can always reach out to us for any doubts.  Happy Developing!!</span>

            <h1 className='text-xl my-6 text-white'>Reference Video:</h1>
            <div className="video-container flex gap-2 my-4 flex-wrap">
                <iframe width="300" height="200" src="https://www.youtube.com/embed/fXMpu_42jJA" title="Website Demo for Poems API- BYTE Challenges" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="300" height="200" src="https://www.youtube.com/embed/Q0SniedHDWU" title="API Demo for Backend Challenges - B.Y.T.E." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


            </div>
            <hr />
            <br />
            <h1 className="text-3xl font-semibold mb-4">Frontend Web Development Challenge</h1>

            <section className="mb-8">
                <p>This task involves creating a web application that interacts with the B.Y.T.E. Poetry API. The goal is to build a user-friendly interface for users to register, log in, and create/display poems on a dashboard.</p>
                <p>You are allowed to use any frontend framework of your choice, or even opt for vanilla HTML, CSS, and JavaScript. Your creativity and attention to detail will be essential in delivering a polished and functional application.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold">Challenge Requirements</h2>

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

                <p>Upon completion, please provide github link to the submission form <a className='underline' target='_blank' href="https://forms.gle/vnGE7aMLzuEJv49n8">https://forms.gle/vnGE7aMLzuEJv49n8</a> </p>
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
                <p>The API requires authentication using JWT tokens. Please include the access token in the <code>Authorization</code> header for protected endpoints. For more info refer to <a className='underline' target='_blank' href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization">This Link</a> </p>
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
                                <strong>Sample Request:</strong>
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
                                <strong>Sample Request:</strong>
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
                                <strong>Sample Request:</strong>
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
        <div className="sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl w-full mx-auto text-gray-300 p-8">
            <h1 className="text-xl mb-4"><span className='text-green-500 font-bold text-2xl'>What we expect: </span>
                Create a mobile application and connect it to the backend server hosted at:
            </h1>
            <ul className='text-lg'>
                <li>For Events Mobile App -
                    <a className='underline' href="http://panel.mait.ac.in:8002/"> http://panel.mait.ac.in:8002/</a>
                </li>
            </ul>

            <span className='text-green-500'>Below is an example to refer and you can always reach out to us for any doubts.  Happy Developing!!</span>

            <h1 className='text-xl my-6 text-white'>Reference Video:</h1>
            <div className="video-container flex gap-2 my-4 flex-wrap">
                <iframe width="300" height="200" src="https://www.youtube.com/embed/XdbIsETz2mw" title="App Demo for Poems API - BYTE | Frontend Challenge" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="300" height="200" src="https://www.youtube.com/embed/tm9CPP8C7jw" title="Working of App API for Frontend Challenge - BYTE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
            <h1 className="text-3xl font-bold mb-4">App Development Challenge</h1>

            <section className="mb-8">
                <p> This task involves creating a mobile application that interacts with the B.Y.T.E. Events API. The goal is to build a user-friendly interface for users to view events and create new events </p>
                <p>You are allowed to use any mobile development framework of your choice. </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold">Challenge Requirements</h2>

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

                <p>Upon completion, please provide github link to the submission form <a className='underline' target='_blank' href="https://forms.gle/vnGE7aMLzuEJv49n8">https://forms.gle/vnGE7aMLzuEJv49n8</a> </p>
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
                                <strong>Sample Request:</strong>
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
        <div className="sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl w-full mx-auto text-gray-300 p-8">
            <h1 className="text-xl mb-4"><span className='text-green-500 font-bold text-2xl'>What we expect: </span>
                Create a backend server with user authentication and a RESTful API for managing poems. Users shall be able to create poems, retrieve all poems, and retrieve poems created by a specific user using the API.</h1>

            <span className='text-green-500'>Below is an example to refer and you can always reach out to us for any doubts.  Happy Developing!!</span>

            <h1 className='text-xl my-6 text-white'>Reference Video:</h1>
            <div className="video-container flex gap-2 my-4 justify-center">
                <iframe width="400" height="300" src="https://www.youtube.com/embed/Q0SniedHDWU" title="API Demo for Backend Challenges - B.Y.T.E." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>

            <h1 className="text-3xl font-bold mb-4">Backend Development Challenge</h1>

            <section className="mb-8">
                <p> This task involves creating a RESTful API as shown in the example B.Y.T.E. Events API. The goal is to build a fully-functional API for users to authorize and create/read poems. </p>
                <br></br><p>You are allowed to use any backend development framework and connect with any database of your choice. The Database Schema design is completely up to you, just make sure that all the endpoints work as expected.</p>
            </section>

            <h1 className="text-3xl font-bold mb-4">How shall the API work?</h1>


            <section className="mb-8">
                <h2 className="text-xl font-semibold">Introduction</h2>
                <p>Welcome to the B.Y.T.E. Poetry API documentation. This API allows users to interact with poems and user details.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold">Authentication</h2>
                <p>The API shall use JWT tokens for authentication. For accessing the protected endpoints, anyone interacting with the API shall be able to send the Authorization token in the request header.
                    So implement the authentication logic accordingly. For more info about JWT tokens refer <a className="underline" target="_blank" href="https://jwt.io/introduction"> this link</a> </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold">Endpoints</h2>

                <section className="mb-6">
                    <h3 className="text-lg font-semibold">1. Authentication</h3>

                    <section className="mb-4">
                        <h4 className="text-md font-semibold">1.1 Register</h4>
                        <ul>
                            <li><strong>Functionality:</strong> Any user interacting with the API shall be able to register himself as a user on this endpoint.
                                Store the name, email and password in the database and return a status code 201 if the user is created successfully. <strong>Working Example: </strong> <a href="http://panel.mait.ac.in:8001/auth/register/"> http://panel.mait.ac.in:8002/auth/register/</a> </li>
                            <li><strong>Endpoint:</strong> <code>/auth/register/</code></li>
                            <li><strong>Method:</strong> <code>POST</code></li>
                            <li><strong>Authentication:</strong> Not Required</li>
                            <li>
                                <strong>Sample Request:</strong>
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
                                <strong>Expected Response:</strong>
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
                            <li><strong>Functionality:</strong> Any registered user shall be able to login by submitting their email and password to this endpoint.
                                The API shall generate access and refresh tokens and return them as a response. <strong>Working Example: </strong> <a href="http://panel.mait.ac.in:8001/auth/login/"> http://panel.mait.ac.in:8002/auth/login/</a> </li>
                            <li><strong>Endpoint:</strong> <code>/auth/login/</code></li>
                            <li><strong>Method:</strong> <code>POST</code></li>
                            <li><strong>Authentication:</strong> Not Required</li>
                            <li>
                                <strong>Sample Request:</strong>
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
                                <strong>Expected Response:</strong>
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
                            <li><strong>Functionality:</strong> Any user interacting with the API shall be able to fetch user details by submitting access token as Authorization header to this endpoint. <strong>Working Example: </strong> <a href="http://panel.mait.ac.in:8001/auth/user-details/"> http://panel.mait.ac.in:8002/auth/user-details/</a> </li>
                            <li><strong>Endpoint:</strong> <code>/auth/user-details/</code></li>
                            <li><strong>Method:</strong> <code>GET</code></li>
                            <li><strong>Authentication:</strong> Required</li>
                            <li>
                                <strong>Expected Response:</strong>
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
                            <li><strong>Functionality:</strong> Any logged in user interacting with the API shall be able to get a list of his poems by submitting access token as Authorization header to this endpoint.  .
                                <strong>Working Example: </strong> <a href="http://panel.mait.ac.in:8001/poem/get/"> http://panel.mait.ac.in:8002/poem/get/</a> </li>
                            <li><strong>Endpoint:</strong> <code>/poem/get/</code></li>
                            <li><strong>Method:</strong> <code>GET</code></li>
                            <li><strong>Authentication:</strong> Required</li>
                            <li>
                                <strong>Expected Response:</strong>
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
                            <li><strong>Functionality:</strong> Any logged in user interacting with the API shall be able to create poems by submitting access token as Authorization header to this endpoint and poem and author in the request data.  .
                                <strong>Working Example: </strong> <a href="http://panel.mait.ac.in:8001/poem/create/"> http://panel.mait.ac.in:8002/poem/create/</a> </li>
                            <li><strong>Endpoint:</strong> <code>/poem/create/</code></li>
                            <li><strong>Method:</strong> <code>POST</code></li>
                            <li><strong>Authentication:</strong> Required</li>
                            <li>
                                <strong>Sample Request:</strong>
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
                                <strong>Expected Response:</strong>
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

                <p>Upon completion, please provide github link to the submission form <a className='underline' target='_blank' href="https://forms.gle/vnGE7aMLzuEJv49n8">https://forms.gle/vnGE7aMLzuEJv49n8</a></p>
                <p>We appreciate clean and well-structured code. Attention to detail, proper error handling, and responsiveness will be considered during the evaluation process.</p>
            </section>
            <section className="mb-8">
                <h2 className="text-xl font-semibold">Note to Developer</h2>

                <p>Feel free to reach out if you have any clarifications or need further assistance during the development process.</p>
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
                <li>Objective:
                    Design an E commerce app user flow for android or iOS screen size.</li>
                <li>Description:
                    There is no minimum or maximum limit to screen count or any kind of creative concepts beyond a basic app design but it must have at least one complete flow included.</li>
                <li>Submission:
                    The submission must be made in the form of the prototype/file link from figma (or any other used platform) with an optional case study/mockup as a PDF.</li>

                <p>Upon completion, please submit it to the submission form <a className='underline text-green-500' target='_blank' href="https://forms.gle/vnGE7aMLzuEJv49n8">https://forms.gle/vnGE7aMLzuEJv49n8</a> </p>
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
        <div className="sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl w-full mx-auto text-gray-300 p-8">
            <h1 className="text-xl mb-4"><span className='text-green-500 font-bold text-2xl'>What we expect: </span>
                <br />
                Basic :  Arduino Circuit and C/C++ Programming
                <br />Advanced :  Rust Programming on Ubuntu or Wowki
            </h1>
            <p>Upon completion, please submit the prototype video and github link to the submission form <a className='underline text-green-500' target='_blank' href="https://forms.gle/vnGE7aMLzuEJv49n8">https://forms.gle/vnGE7aMLzuEJv49n8</a> </p>
            <span className='text-green-500'>Below is an example to refer and you can always reach out to us for any doubts.  Happy Developing!!</span>
            <div className=" p-8 rounded-lg shadow-lg">

                <h1 className="text-3xl font-semibold mb-4">IoT Challenge</h1>


                <h1 className='text-xl my-6 text-white'>Reference Video:</h1>
                <div className="video-container flex gap-2 my-4">
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/_5fUDcr7Gvw" title="RUST Code Demo- BYTE Iot Challenge" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                    <h2 className="text-xl font-bold mb-2">3. Challenge Overview</h2>
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
                        <div className="overflow-x-auto">
                            <pre className="bg-black text-green-500 p-4 rounded-md whitespace-pre-wrap">
                                <code>{`
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
    `}</code>
                            </pre>
                        </div>

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