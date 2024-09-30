# User List App

A user list application built with React, Redux, and TypeScript. This app allows users to view, search, and navigate through a list of users. Users can select individual profiles to see detailed information, with pagination to handle large datasets.

## Features

- **User List**: Displays a paginated list of users with search functionality.
- **User Details**: Shows detailed information for the selected user.
- **Responsive Design**: The layout is designed to be responsive, providing a seamless experience on different devices.
- **Redux for State Management**: Manages the application state efficiently using Redux.
- **Pagination**: Navigate through pages of user data smoothly.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Redux**: State management library for React applications.
- **TypeScript**: Superset of JavaScript that provides static typing.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Icons**: Collection of icons for React applications.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vctc/user-list-app.git
   cd user-list-app
   ```
2. npm install
3. npm run dev

## Usage

- Use the search bar to filter users by name.
- Click on a user card to view detailed information about the user.
- Navigate through the user list using the pagination controls.

## Folder Structure

```user-list-app/
├── src/
│   ├── components/
│   │   ├── UserCard.tsx          # UserCard component
│   │   ├── UserDetails.tsx       # UserDetails component
│   │   ├── UserList.tsx          # UserList component
│   │   ├── Pagination.tsx         # Pagination component
│   │   └── __tests__/             # Directory for tests
│   ├── redux/
├── App.tsx
└── main.tsx
├── package.json
└── README.md
```

## Screenshots

![image](https://github.com/user-attachments/assets/7b9217f7-484a-4cdd-ae3b-b56901eefdd4)
![image](https://github.com/user-attachments/assets/87c9c94a-4b74-4205-9857-0e14e7326561)


