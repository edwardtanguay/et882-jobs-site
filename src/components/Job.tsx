import { IJob } from "../interfaces";
import { FaArrowAltCircleDown } from "react-icons/fa";

interface IProps {
	job: IJob;
}

export const Job = ({ job }: IProps) => {
	return (
		<div className="bg-gray-900 p-3 mb-3" key={job.id}>
			<p className="flex gap-2 items-center">
				<FaArrowAltCircleDown className="text-xl" />
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
