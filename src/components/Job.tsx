import { IJob } from "../interfaces";

interface IProps {
	job: IJob
}

export const Job = ({job}: IProps) => {
	return (
		<div className="bg-gray-900 p-3 mb-3" key={job.id}>
			<p>
				<a
					href={job.url}
					className="text-xl underline text-yellow-200"
					target="_blank"
				>
					{job.title}
				</a>
			</p>
			<p className="text-orange-400">{job.company}</p>
			<p>{job.publicationDate}</p>
		</div>
	);
};
