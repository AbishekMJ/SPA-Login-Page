# Employee Management Application

This project is a single-page application built using **React** with **Vite** as the build tool. It includes a login system, an employee form for data entry, and displays the entered data in a table format upon successful submission. Each component has its own CSS file for better maintainability and separation of concerns.

## Features
- **Login Page**: User authentication with predefined username and password.
- **Employee Form**: Collects employee information (Name, ID, Phone Number, Gender, etc.).
- **Login Failure Page**: Redirects in case of incorrect login credentials with retry options.
- **Table Display**: After successful form submission, the entered data is displayed in a table format.
- **Responsive Design**: The application is designed with proper alignment and styles, ensuring a good user experience across different devices.
- **React Router**: Utilizes `react-router-dom` for navigation between pages (Login, Employee Form, Login Failure).

## Predefined Login Credentials
- **Username**: `Abishek`
- **Password**: `1234`

## How to Run the Project

### 1. Clone the Repository
Clone this project to your local machine:
```bash
git clone https://github.com/yourusername/employee-app.git
cd employee-app
2. Install Dependencies
Make sure you have Node.js installed. Then run:
npm install
3. Run the Project
Start the development server using:
npm run dev
The application will be available at http://localhost:5173.

4. Usage
On the Login Page, enter the username and password provided above.
After a successful login, you'll be redirected to the Employee Form.
Fill in the employee details and submit the form to display the data in a table.
If login fails, you'll be redirected to the Login Failure Page, where you can try again or proceed to the Employee Form directly.

Folder Structure

/src
├── App.jsx                     # Main component that handles routing
├── components/                 # All React components
│   ├── LoginPage.jsx           # Login page with authentication
│   ├── EmployeeFormPage.jsx    # Form to collect employee details
│   ├── LoginFailurePage.jsx    # Page shown when login fails
│   └── EmployeeTable.jsx       # Displays employee data in table format
├── styles/                     # Separate CSS files for each component
│   ├── LoginPage.css           # CSS for Login Page
│   ├── EmployeeFormPage.css    # CSS for Employee Form Page
│   ├── LoginFailurePage.css    # CSS for Login Failure Page
│   └── EmployeeTable.css       # CSS for Employee Table display
├── main.jsx                    # Entry point for React and Vite

Technologies Used

React: JavaScript library for building the UI.
Vite: Build tool for faster React development.
react-router-dom: Routing for navigating between pages.
CSS: Separate CSS files for each component.

How the Pages Work
Login Page
The login page has two fields: Username and Password. Both fields must match the default credentials:
Username: Abishek
Password: 1234

On successful login, you are redirected to the Employee Form.
If the login fails, you are redirected to the Login Failure Page.
Employee Form Page

The form collects various fields like Name, ID, Phone Number, Gender, and more.
After submitting the form, the entered data will be displayed in a table.

The layout is centered, and the form utilizes the full page for proper alignment.

Login Failure Page

If the login fails, this page will display a failure message.
Two buttons are provided:
Login Button: Redirects the user back to the Login Page.
Employee Form Button: Redirects the user to the Employee Form Page directly.

CSS for Each Page
Each component has its own dedicated CSS file for styles:

LoginPage.css: Handles styles for the login page layout and input fields.
EmployeeFormPage.css: Contains styles for form alignment, input field styling, and buttons.
LoginFailurePage.css: Styles the failure message and buttons on the login failure page.
EmployeeTable.css: Styles the table that displays the submitted employee data.

Author
Abishek


### Notes:
- This README now highlights that each page has its own separate CSS file for styling.
- Ensure the CSS files are created and appropriately linked in your respective JSX files for this structure to work as described.




