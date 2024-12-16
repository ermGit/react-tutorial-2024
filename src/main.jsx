import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import "./globals.css";
import {UsersPage} from "./pages/UsersPage.jsx";
import {BlogPostsPage} from "./pages/BlogPostsPage.jsx";

const usersData = [
	{
		id: 1,
		username: 'John1',
		email: 'john1@example.com',
	},
	{
		id: 2,
		username: 'John2',
		email: 'john2@example.com',
	},
	{
		id: 3,
		username: 'John3',
		email: 'john3@example.com',
	},
	{
		id: 4,
		username: 'John4',
		email: 'john4@example.com',
	}
];

const router = createBrowserRouter([
	{
		path: "/",
		element: <App usersData={usersData} />,
		children: [
			{
				path: "users",
				element: <UsersPage />,
			}
		]
	},
	{
		path: "/blog-posts",
		element: <BlogPostsPage />
	}

]);

// https://youtu.be/lAFbKzO-fss?si=cAH4BFH_gJxhAkrn
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
