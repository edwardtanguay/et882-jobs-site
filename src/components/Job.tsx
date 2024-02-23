import { IJob } from "../interfaces";
import { FaArrowAltCircleDown } from "react-icons/fa";

interface IProps {
	job: IJob;
	jobs: IJob[];
	setJobs: (jobs: IJob[]) => void;
}

export const Job = ({ job, jobs, setJobs }: IProps) => {
	const handleToggleOpenJob = () => {
		job.isOpen = !job.isOpen;
		setJobs(structuredClone(jobs));
		// setJobs([...jobs]);
	}

	return (
		<div className="bg-gray-900 p-3 mb-3">
			<p className="flex gap-2 items-center">
				<FaArrowAltCircleDown onClick={handleToggleOpenJob} className="text-xl cursor-pointer" />
				<a
					href={job.url}
					className="text-xl underline text-yellow-200"
					target="_blank"
				>
					{job.title}
				</a>
			</p>
			{job.isOpen && (
				<>
					<p className="text-orange-400">{job.company}</p>
					<p>{job.title}</p>
				</>
			)}
		</div>
	);
};
