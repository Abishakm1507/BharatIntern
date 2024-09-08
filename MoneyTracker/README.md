<h1>Money Tracker WebApp</h1>
<h3>Project Overview</h3>
The Money Tracker App is a simple web application for tracking income and expenses. It allows users to add financial transactions (either income or expenses), displays them in tables, and calculates the user's current balance. The backend is built using Node.js, Express.js, and MongoDB, while the frontend is constructed with HTML, CSS, and JavaScript.

<h3>Features</h3>
<ul>
<li>Add, display, and delete income and expense transactions.</li>
<li>Calculate the user's total balance dynamically.</li>
<li>Responsive web interface for managing transactions.</li>
<li>Use of MongoDB for data storage.</li>
</ul>
<h3>Technologies and Techniques Used</h3>
<h5>Backend</h5>
<ul>
<li>Node.js: The backend server is built using Node.js, a JavaScript runtime for creating scalable and efficient applications.</li>
<li>Express.js: A lightweight web framework used for handling HTTP requests and serving static files.</li>
<li>Body-Parser: Middleware for parsing incoming request bodies in a middleware, especially for handling form data.</li>
<li>MongoDB: A NoSQL database used to store financial transaction data. MongoDB Atlas is used as the cloud-hosted version of the database.</li>
<li>Mongoose: An ODM (Object Data Modeling) library for MongoDB, used to interact with the MongoDB database.</li>
</ul>
<h5>Frontend</h5>
<ul>
<li>HTML5: The structure and layout of the web interface are built using HTML5 elements.</li>
<li>CSS3: Custom styles for the user interface, including layout, form styling, and responsiveness. The design features a minimal, clean look with a modern green color scheme.</li>
<li>JavaScript:<br>
DOM manipulation to dynamically display transaction data in tables.<br>
Event handling for adding, deleting transactions, and calculating the balance.<br>
Basic validation to ensure correct data submission.</li>
</ul>
<h5>Techniques Used</h5>
<ul>
  <li>CRUD Operations: The app implements basic Create and Read functionalities for adding and viewing transactions, along with Delete operations for removing transactions.</li>
<li>Form Handling: Data from the transaction form is processed and inserted into the database using Express.js and MongoDB.</li>
<li>Responsive Design: The app uses CSS to ensure that the layout looks good on different screen sizes.</li>
<li>Data Validation: The frontend JavaScript includes basic validation to ensure that no empty data is submitted.</li>
</ul>
