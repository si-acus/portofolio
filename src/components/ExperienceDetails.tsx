import { Chip } from "@mui/material";
import React from "react";

interface Project {
	name: string;
	link: string;
}

interface ExperienceDetails {
	experienceDetails: {
		companyName: string;
		role: string;
		duration: string;
		projects: Project[];
		activities: string[];
		technologies: string[];
	};
}

const Details: React.FC<ExperienceDetails> = ({ experienceDetails }) => {
	return (
		<div data-aos="fade-up" data-aos-duration="1000">
			<div className="flex items-center gap-x-3">
				<h3 className="">{`${experienceDetails.role}`}</h3>
				<h3 className="text-primary">{`@${experienceDetails.companyName}`}</h3>
			</div>
			<h4 className="mt-1">{experienceDetails.duration}</h4>
			<h4 className="mt-1">Activities:</h4>

			<ul className="">
				{experienceDetails.activities.map((activity) => {
					return (
						<li key={activity} className="mt-4 text-lg cursor-text flex items-start gap-x-3">
							<span className="scale-150">&#x2022;</span>
							{activity}
						</li>
					);
				})}
			</ul>
			<h4 className="mt-1">Projects handling:</h4>
			<ul className="">
				{experienceDetails.projects.map((project) => {
					return (
						<li key={project.name} className="mt-4 text-lg cursor-text flex items-start gap-x-3">
							<span className="scale-150">&#x2022;</span>
							{project.name}
						</li>
					);
				})}
			</ul>
			<h4 className="mt-1">Techstack:</h4>
			<div className="gap-x-3">
				{experienceDetails.technologies.map((tech)=> {
					return(
						<Chip label={tech} />
					)
				})}
			</div>
		</div>
	);
};

export default Details;