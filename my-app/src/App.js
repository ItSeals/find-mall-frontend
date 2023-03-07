// import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import { global, networkCall } from "./helpers/helpers";
// import Login from "./Login";
// import SideBar from "./components/SideBar";
// import Malls from "./components/Malls";
// import Categories from "./components/Categories";
// import AllSAndC from "./components/AllSAndC";
// import SorCCategory from "./components/allSAndC/SorCCategory";
// import Tags from "./components/Tags";
// import Home from "./pages/Home";
// import Result from "./pages/Result";
// import OtherTags from "./components/OtherTags";

// function App() {
// 	//const [success, setSuccess] = useState(true);
// 	//
// 	// if (success === false) {
// 	//   return (
// 	//     <main className="App">
// 	//       <Login success={success} setSuccess={setSuccess}/>
// 	//     </main>
// 	//   );
// 	// } else {
// 	//   return(
// 	//     <SideBar/>
// 	//   )
// 	// }

// 	const [categories, setCategories] = useState([]);

// 	function updateCategories() {
// 		networkCall(
// 			{ type: "get", url: `${global.api}/category` },
// 			(res) => setCategories(res),
// 			(error) => console.log("error", error)
// 		);
// 	}

// 	useEffect(() => updateCategories(), []);

// 	return (
// 		<Routes>
// 			<Route path="/" element={<Home />} />
// 			<Route path="result" element={<Result />} />
// 			<Route path="admin" element={<SideBar categories={categories} />}>
// 				<Route index={true} element={<Malls />} />
// 				<Route path="malls" element={<Malls />} />
// 				<Route
// 					path="categories"
// 					element={
// 						<Categories
// 							categories={categories}
// 							updateCategories={updateCategories}
// 						/>
// 					}
// 				/>
// 				<Route path="tags" element={<Tags />} />
// 				<Route path="otherTags" element={<OtherTags />} />
// 				<Route path="items" element={<AllSAndC />} />
// 				{categories.map((category) => {
// 					return (
// 						<Route
// 							path={`items/${category.id}`}
// 							element={<SorCCategory categoryId={category.id} />}
// 						/>
// 					);
// 				})}
// 			</Route>
// 			<Route path="admin/login" element={<Login />} />
// 			<Route path="*" element={<div>error 404: not faund page</div>} />
// 		</Routes>
// 	);
// }

// export default App;

import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./services/PrivateRoute"
import { global, networkCall } from "./helpers/helpers";
import Login from "./Login";
import Register from "./Registration";
import Malls from "./components/Malls";
import Categories from "./components/Categories";
import AllSAndC from "./components/AllSAndC";
import SorCCategory from "./components/allSAndC/SorCCategory";
import Tags from "./components/Tags";
import Home from "./pages/Home";
import Result from "./pages/Result";
import OtherTags from "./components/OtherTags";
import Admin from "./Admin";
import SideBar from "./components/SideBar";

function App() {
	//const [success, setSuccess] = useState(true);
	//
	// if (success === false) {
	//   return (
	//     <main className="App">
	//       <Login success={success} setSuccess={setSuccess}/>
	//     </main>
	//   );
	// } else {
	//   return(
	//     <SideBar/>
	//   )
	// }

	const [categories, setCategories] = useState([]);

	function updateCategories() {
		networkCall(
			{ type: "get", url: `${global.api}/category` },
			(res) => setCategories(res),
			(error) => console.log("error", error)
		);
	}

	useEffect(() => updateCategories(), []);

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="result" element={<Result />} />
			<Route path="admin" element={<Admin/>}>
				<Route index={true} element={<PrivateRoute><SideBar categories={categories} ><Malls /></SideBar></PrivateRoute>} />
				<Route path="login" element={<Login />} />
				<Route path="malls" element={<PrivateRoute><SideBar categories={categories} ><Malls /></SideBar></PrivateRoute>} />
				<Route
					path="categories"
					element={
						<PrivateRoute>
							<SideBar categories={categories} ><Categories
								categories={categories}
								updateCategories={updateCategories}
							/></SideBar>
						</PrivateRoute>
					}
				/>
				<Route path="tags" element={<PrivateRoute><SideBar categories={categories} ><Tags /></SideBar></PrivateRoute>} />
				<Route path="otherTags" element={<PrivateRoute><SideBar categories={categories} ><OtherTags /></SideBar></PrivateRoute>} />
				<Route path="items" element={<PrivateRoute><SideBar categories={categories} ><AllSAndC /></SideBar></PrivateRoute>} />
				{categories.map((category) => {
					return (
						<Route
							path={`items/${category.id}`}
							element={<PrivateRoute><SideBar categories={categories} ><SorCCategory categoryId={category.id} /></SideBar></PrivateRoute>}
						/>
					);
				})}
			</Route>
			<Route path="*" element={<div>error 404: not faund page</div>} />
		</Routes>
	);
}

export default App;

