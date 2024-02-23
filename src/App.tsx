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
					<div className="bg-gray-900 p-3 mb-3" key={job.id}>
						<p><a href={job.url} className="text-xl underline text-yellow-200" target="_blank">{job.title}</a></p>
						<p className="text-orange-400">{job.company}</p>
						<p>{job.publicationDate}</p>
					</div>
				);
			})}
		</>
	);
}

export default App;
