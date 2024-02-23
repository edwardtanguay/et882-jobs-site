import axios from "axios";
import { useEffect, useState } from "react";
import { IJob } from "./interfaces";
import { Job } from "./components/Job";

const url = "https://edwardtanguay.vercel.app/share/jobs.json";
const jobOfTheDayId = 175;

function App() {
	const [jobs, setJobs] = useState<IJob[]>([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(url);
			const _jobs: IJob[] = response.data;
			_jobs.sort((a, b) =>
				a.publicationDate > b.publicationDate ? -1 : 1
			);
			for (const _job of _jobs) {
				_job.isOpen = false;
			}
			setJobs(_jobs);
		})();
	}, []);

	return (
		<>
			<h1 className="text-3xl mb-4 text-yellow-300">Job Site</h1>

			<h2 className="text-2xl">Job of the Day</h2>
			<div className="mb-4">
				<Job
					job={jobs.find((m) => m.id === jobOfTheDayId)}
					jobs={jobs}
					setJobs={setJobs}
				/>
			</div>

			<p className="mb-3">There are {jobs.length} jobs.</p>
			{jobs.map((job) => {
				return (
					<Job key={job.id} job={job} jobs={jobs} setJobs={setJobs} />
				);
			})}
		</>
	);
}

export default App;
