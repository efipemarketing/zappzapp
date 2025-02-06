import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
export default function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<ToastContainer
				position="top-right"
				autoClose={8000}
				hideProgressBar={false}
				pauseOnHover={false}
				closeOnClick
				draggable
				theme="colored"
			/>
			
			<Routes>
				<Route path={`/`} element={ <Home /> } />
				<Route path={`/login`} element={ <Login /> } />

				<Route path="*" element={ <Error /> } />
			</Routes>
		</BrowserRouter>
	);
}