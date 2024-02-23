import { IJob } from "../interfaces";
import { FaArrowAltCircleDown } from "react-icons/fa";

interface IProps {
	job: IJob | undefined;
	jobs?: IJob[];
	setJobs?: (jobs: IJob[]) => void;
}

export const Job = ({ job, jobs, setJobs }: IProps) => {
	const handleToggleOpenJob = () => {
		if (job && jobs && setJobs) {
		job.isOpen = !job.isOpen;
			setJobs(structuredClone(jobs));
		}
		// setJobs([...jobs]); //doesn't always make a full copy, see: https://tanguay-eu.vercel.app/howtos/758
	};

	return (
		<div className="bg-gray-900 p-3 mb-3">
			{job && (
				<>
					<p className="flex gap-2 items-center">
						<FaArrowAltCircleDown
							onClick={handleToggleOpenJob}
							className="text-xl cursor-pointer"
						/>
						<a
							href={job.url}
							className="text-xl underline text-yellow-200"
							target="_blank"
						>
							{job.title} ({job.id})
						</a>
					</p>
					{job.isOpen && (
						<>
							<p className="text-orange-400">{job.company}</p>
							<p>{job.publicationDate}</p>
						</>
					)}
				</>
			)}
		</div>
	);
};
