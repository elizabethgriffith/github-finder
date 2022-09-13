# github-finder
An application to search for GitHub users and see public information associated with their accounts.

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Bootstrap

This app was made using vanilla JavaScript to interact with the GitHub API. When the user starts typing, a get request is sent to the API and the profile associated with the username entered is returned and displayed on the screen. This is done using async/await. There are two classes being used - the Github class and the UI class. The Github class is used to interact with the API and the UI class is used to manipulate the DOM based on what the Github get request returns.

## Lessons Learned:

This is one of my first applications using an API and classes. This application helped me better grasp APIs and how to extract the desired information from them. One of the bigger takeaways was learning how to work with URL's and the API documentation to reach the information I wanted.

Another lesson I learned from building this application is how to use async/await instead of relying on callbacks. Using async/await made the code significantly cleaner and easier to read. 