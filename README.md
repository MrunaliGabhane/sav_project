# _Sav_project Item List Application_

## _Project Overview_

This project demonstrates key frontend skills, including client-side pagination, search filters, drag-and-drop functionality, integration with APIs, and Google reCAPTCHA validation. It is designed to showcase reusable code, modular architecture, and best practices for React-based applications.

---

## _Features_

1. _Item List with Pagination:_
   - Displays a paginated list of items with a limit of 10 items per page.
   - Dynamically updates based on search results or reordered items.
2. _Search Filter:_
   - Provides a text-based search feature to filter items by title.
3. _Drag-and-Drop Functionality:_
   - Allows users to reorder items within the same page using drag-and-drop.
4. _Google reCAPTCHA Integration:_
   - Ensures that the user is human before displaying the items.

---

## _Technologies Used_

- _React.js_: For building the UI components and implementing client-side logic.
- _Tailwind CSS_: For styling the components.
- _Google reCAPTCHA_: For verifying user interactions.

## _Setup Instructions_

1. _Clone the Repository_
   ```bash
   git clone https://github.com/MrunaliGabhane/sav_project.git
   cd sav_project
   npm install
   npm start
   http://localhost:3000
   ```

Project Structure
sav_project/

├── public/ # Static files

├── src/ # Source code

│ ├── components/ # Reusable components

│ │ ├── Pagination.js # Pagination component

│ │ ├── SearchBox.js # Search input component

│ ├── pages/ # Page components

│ │ ├── ItemList.js # Main item listing page

│ │ ├── Recaptcha.js # reCAPTCHA validation page

│ ├── App.js # Main React component

│ ├── index.js # React entry point

│ ├── styles.css # Global styles

├── package.json # Project metadata and dependencies

├── README.md # Project documentation
