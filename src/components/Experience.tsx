import React from "react";
import Details from "./ExperienceDetails";
import BasicTabs from "./Tabs";

const Experience = () => {
	const SwamediaExperiance = {
		companyName: "PT Swamedia Informatika",
		role: "Backend Developer",
		duration: "July 2014 - August 2015",
		activities: [
			"Collaborated with a team of professional engineers to plan, design, build, and implement the user interface systems of web-based and desktop applications",
			"Contributed to the development and optimization of several internal applications to enhance productivity, as well as a customer-facing account management application that improved customer inflow by automating the settlement calculation process between mobile operators.",			"Played an active role in testing, troubleshooting, and resolving issues such as those related to performance, accessibility,  browser compatibility, and security.",
			"Reviewing and approving pull requests from other team members.",
		],
		technologies: ["Java","ZKoss", "Oracle DBMS","PHP", "MySQL", "Git", "Spring", "Hibernate", "JPA"],
	};

	const ElphitaExperience = {
		companyName: "PT Elphita Engineering",
		role: "Full-Stack Developer",
		duration: "August 2015 - August 2017",
		activities: [
			"Collaborated with a team of professional engineers to plan, design, build, and implement the user interface systems of web-based applications and provide a satisfactory user experience with no issues, errors, or downtime.",
			"Collaborated with the project manager and another engineer.",
						"Reviewing and approving pull requests from other team members.",

		],
		technologies: ["Java", "Kotlin", "Dropwizard","PHP", "OracleDB", "MySQL", "Git", "Spring", "Hibernate", "Luciad Lightning", "JPA"],
	};
	const EverlessExperience = {
		companyName: "Everless/ NoBackend",
		role: "Freelance Frontend Developer",
		duration: "July 2017 - August 2017",
		activities: [
			"Collaborated with the product owner, designeer and backend engineer.",
			"Ensured cross-platform development and optimization for mobile responsiveness.",
		],
		technologies: ["HTML", "CSS", "Javascript", "Git", "React", "Redux", "Bootstrap", "Gulp", "Sass"],
	};
	const TelkomExperience = {
		companyName: "Telkom Indonesia",
		role: "Frontend Developer, Tech Lead",
		duration: "March 2018 - December 2021",
		activities: [
			"Collaborated with the product owner, designeer and backend engineer.",
			"Designed and developed the client side of aplication website while writing re-usable and easy to maintain codes.",
			"Ensured cross-platform development and optimization for mobile responsiveness.",
			"Reviewing and approving pull requests from other team members.",

		],
		technologies: ["HTML", "CSS", "Javascript", "Typescript", "Git", "React", "Redux", "Sass", "Less","JSS", "Bootstrap", "ANTD", "Material UI", "Tailwind", "Next JS", "Node JS"],

	};
	const EfisheryExperience = {
		companyName: "Efishery",
		role: "Tech Lead, Senior Frontend Engineer, Engineer Manager",
		duration: "December 2021 - February 2025",
		activities: [
			"Collaborated with the project manager and Head of Engineering.",
			"Designed and developed the client side of the sub-company’s ( Illusion Decals ) website while writing re-usable and easy to maintain codes.",
			"Ensured cross-platform development and optimization for mobile responsiveness.",
			"Reviewing and approving pull requests from other team members.",

		],
		technologies: ["HTML", "CSS", "Javascript", "Typescript", "Git", "React", "Sass", "Less", "JSS", "Bootstrap", "ANTD", "Tailwind", "Next JS", "Node JS", "Vite", ],

	};

	return (
		<div id="experience" className="w-full lg:h-screen p-2 ">
			<div
				className="max-w-[1240px] mx-auto flex flex-col justify-center h-full"
				data-aos="fade-right"
				data-aos-duration="1500"
			>
				<p className="text-xl tracking-widest uppercase text-primary">Experience</p>
				<h2 className="py-4">Where I&apos;ve Worked</h2>
				<div className="mt-2 ">
					<BasicTabs
						tabList={[
							"Efishery",
							"Telkom",
							"Everless",
							"Elphita", 
							"Swamedia", 
						]}
						tabPanel={[
							<Details key={"Efishery"} experienceDetails={EfisheryExperience} />,
							<Details key={"Telkom"} experienceDetails={TelkomExperience} />,
							<Details key={"Everless"} experienceDetails={EverlessExperience} />,
							<Details key={"Elphita"} experienceDetails={ElphitaExperience} />,
							<Details key={"Swamedia"} experienceDetails={SwamediaExperiance} />,
						]}
					/>
				</div>
			</div>
		</div>
	);
};

export default Experience;