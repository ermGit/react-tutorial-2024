import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import "./globals.css";
import {UsersPage} from "./pages/UsersPage.jsx";
import {BlogPostsPage} from "./pages/BlogPostsPage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
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
