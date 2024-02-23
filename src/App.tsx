import axios from "axios";
import { useEffect, useState } from "react";
import { IJob } from "./interfaces";
import { Job } from "./components/Job";

const url = "https://edwardtanguay.vercel.app/share/jobs.json";

function App() {
	const [jobs, setJobs] = useState<IJob[]>([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(url);
			const _jobs:IJob[] = response.data;
			_jobs.sort((a, b) => a.publicationDate > b.publicationDate ? -1 : 1);
			for (const _job of _jobs) {
				_job.isOpen = false;
			}
			setJobs(_jobs);
		})();
	}, []);

	return (
		<>
			<h1 className="text-3xl mb-4 text-yellow-300">Job Site</h1>
			<p className="mb-3">There are {jobs.length} jobs.</p>
			{jobs.map((job) => {
				return <Job job={job} />
			})}
		</>
	);
}

export default App;
