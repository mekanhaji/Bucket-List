# Bucket List PWA

The Bucket List PWA (Progressive Web App) is an application that allows users to create and manage their bucket lists. Users can add items to their bucket lists, and they can remove items by double-tapping on the item. The application stores the data on Firebase Realtime Database, ensuring data persistence across devices.

## Features

- User-friendly interface for creating and managing a bucket list.
- Double-tap functionality to remove items from the list.
- Realtime data synchronization using Firebase Realtime Database.
- Progressive Web App capabilities for an app-like experience on mobile and desktop devices.
- Offline support for accessing and modifying the bucket list even without an internet connection.

## Technologies Used

- JavaScript: The programming language used for the application's logic and interactions.
- HTML: Provides the structure and layout of the application's user interface.
- CSS: Adds styling and visual enhancements to the user interface.
- Firebase Realtime Database: A NoSQL cloud database used for storing and synchronizing the bucket list data.
- Service Worker: Enables the application to function offline and enhance the PWA capabilities.

## Usage

To use the Bucket List PWA, follow these steps:

1. Access the application using a web browser on your desktop or mobile device.
2. On the Bucket List interface, Input name of an item to add it to your bucket list.
3. To remove an item, double-tap on it.
4. The application automatically synchronizes the data with Firebase Realtime Database, ensuring data persistence across devices.
5. You can access and modify your bucket list even when offline, and the changes will be synced once you regain internet connectivity.

## Project Structure

The project structure is as follows:

```
.
├── assets
|   └── all img assets are here...
├── src
|   ├── app.js
|   └── style.css
├── index.html
├── site.webmanifest
└── README.md
```

- `index.html` contains the HTML structure of the application's user interface.
- `style.css` contains the CSS styles for the application's interface.
- `app.js` includes the JavaScript code responsible for the application's functionality and interaction with Firebase Realtime Database.
- `site.webmanifest` 
- `README.md` provides information about the project.

## Customization

To customize the Bucket List PWA, you can modify the CSS styles in the `style.css` file to change the visual appearance of the application's interface. Additionally, you can update the JavaScript code in the `app.js` file to add new features or modify existing functionalities according to your specific requirements.

## Contributions

Contributions to the project are welcome. If you encounter any issues or have suggestions for improvements, feel free to submit a pull request or open an issue on the project repository.

## Acknowledgements

- This project utilizes Firebase Realtime Database for data storage and synchronization, enabling seamless collaboration and offline access.

- Special thanks to the developers and contributors of JavaScript, HTML, CSS, Firebase Realtime Database, and Service Worker for their valuable tools and resources.