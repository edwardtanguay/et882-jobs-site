import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://edwardtanguay.vercel.app/share/jobs.json";

function App() {
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(url);
			const _jobs = response.data;
			setJobs(_jobs);
		})();
	}, []);

	return (
		<>
			<h1 className="text-3xl mb-4 text-yellow-300">Job Site</h1>
			<p>There are {jobs.length} jobs.</p>
			{}
		</>
	);
}

export default App;
