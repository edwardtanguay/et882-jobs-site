import axios from "axios";
import { useEffect, useState } from "react";
import { IJob } from "./interfaces";

const url = "https://edwardtanguay.vercel.app/share/jobs.json";

function App() {
	const [jobs, setJobs] = useState<IJob[]>([]);

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
			<p className="mb-3">There are {jobs.length} jobs.</p>
			{jobs.map((job) => {
				return (
					<div key={job.id}>
						<p>{job.title}</p>
					</div>
				);
			})}
		</>
	);
}

export default App;
