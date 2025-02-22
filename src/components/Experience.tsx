import React from "react";
import Details from "./ExperienceDetails";
import BasicTabs from "./Tabs";

const Experience = () => {
	const SwamediaExperiance = {
		companyName: "PT Swamedia Informatika",
		role: "Backend Developer",
		duration: "July 2014 - August 2015",
		activities: [
			"Develop, optimize, and maintain backend services and APIs using Java and ZK",
			"Integrate and manage Oracle DBMS, ensuring efficient data storage, retrieval, and optimization.",
			"Write efficient SQL queries, stored procedures, and optimize database performance.",
			"Implement security best practices, including authentication, authorization, and data protection.",
		],
    projects: [
      {
        name: "Sistem Otomatisasi Kliring Interkoneksi (SOKI) — Associations of Telecommunications Indonesia (ASKITEL)",
        link: ""
      },
      {
        name: "ICACB — Telkomsel",
        link: ""
      },
    ],
		technologies: ["Java","ZKoss", "Oracle DBMS","PHP", "MySQL", "Git", "Spring", "Hibernate", "JPA"],
	};

	const ElphitaExperience = {
		companyName: "PT Elphita Engineering",
		role: "Full-Stack Developer",
		duration: "August 2015 - August 2017",
		activities: [
			"Develop, optimize, and maintain backend services and APIs using Java and Spring Boot.",
			"Develop, optimize, and maintain Operator Area of Air Defense Net-Centric Tactical System (AIRNETS) — Indonesian National Air Defense Forces Command (Komando Pertahanan Udara Nasional Indonesia / KOHANUDNAS)",
		],
    projects: [
      {
        name: "Operator Area of Air Defense Net-Centric Tactical System (AIRNETS) — Indonesian National Air Defense Forces Command (Komando Pertahanan Udara Nasional Indonesia / KOHANUDNAS)",
        link: ""
      },
      {
        name: "Logistik Support Information System (LSIS) — Indonesian National Air Defense Forces Command (Komando Pertahanan Udara Nasional Indonesia / KOHANUDNAS)",
        link: ""
      },
      {
        name: "Simple Assets Management System (SAMS) — Indonesian National Air Defense Forces Command (Komando Pertahanan Udara Nasional Indonesia / KOHANUDNAS)",
        link: ""
      },
      {
        name: "Dietplus SIM and Website — DietPlus",
        link: ""
      },
    ],
		technologies: ["Java", "Kotlin", "Dropwizard","PHP", "PostgreSQL", "MySQL", "Git", "Spring", "Hibernate", "Luciad Lightning", "JPA"],
	};
	const EverlessExperience = {
		companyName: "Everless/ NoBackend",
		role: "Freelance Frontend Developer",
		duration: "July 2017 - August 2017",
		activities: [
			"Collaborated with the product owner, designeer and backend engineer.",
			"Ensured cross-platform development and optimization for mobile responsiveness.",
      "Collaborate with designers and backend engineers to integrate APIs and create a seamless UI/UX experience.",
      "Worked with React, Redux, and other modern technologies.",
		],
    projects: [
      {
        name: "eVerless —  eVerless (noBackend), Pometera",
        link: ""
      },
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
      "Developed and optimized the UI for 10+ projects, including e-commerce applications and internal dashboards.",
      "Led the frontend development for UMeetMe, improving page performance by 40%.",
      "Worked with React, Redux, and other modern technologies.",
      "Collaborate with designers and backend engineers to integrate APIs and create a seamless UI/UX experience."

		],
    projects: [
      {
        name: "Teman Berbagi — Teman Berbagi",
        link: ""
      },
      {
        name: "Dashboard Beras Kita — Bulir",
        link: ""
      },
      {
        name: "Baleku — ITX",
        link: ""
      },
      {
        name: "Nusaku — ITX",
        link: ""
      },
      {
        name: "Telkom Design System (TEDIS) — Telkom DEX",
        link: ""
      },
      {
        name: "DTP DSA — DTP DSA",
        link: ""
      },
      {
        name: "Dashboard Smart City Nusantara—  SCN",
        link: ""
      },
      {
        name: "Dashboard Performance Mgm—  Telkom dev",
        link: ""
      },
      {
        name: "InPoint (PointsWallet & Exchange)",
        link: ""
      },
      {
        name: "Inpoin Poin Reward Gamification Platform",
        link: ""
      },
      {
        name: "Kerja Indonesia / Pijar Mahir - Tribe Edu (Telkom)",
        link: ""
      },
      {
        name: "UMeetMe - Tribe Com (Telkom)",
        link: ""
      },
    ],
		technologies: ["HTML", "CSS", "Javascript", "Typescript", "Git", "React", "Redux", "Sass", "Less","JSS", "Bootstrap", "ANTD", "Material UI", "Tailwind", "Next JS", "Node JS"],

	};
	const EfisheryExperience = {
		companyName: "Efishery",
		role: "Tech Lead, Senior Frontend Engineer, Engineer Manager",
		duration: "December 2021 - February 2025",
		activities: [
			"Collaborated with the project manager and Head of Engineering.",
      "Managed and mentored a diverse team of 4 Backend Engineers and 3 Frontend Engineers, fostering a collaborative and high-performance environment.",
      "Orchestrated efforts across multiple projects by managing dependencies and fostering collaboration between engineering, product, design, and business at the squad or tribe levels.",
      "Build and maintain an application using React for the frontend, Ant Design for UI components",
      "Collaborate with designers and backend engineers to integrate APIs and create a seamless UI/UX experience.",
			"Reviewing and approving pull requests from other team members.",

		],
    projects: [
      {
        name: "eFarm",
        link: ""
      },
      {
        name: "Dibalik Udang",
        link: ""
      },
      {
        name: "Kolam-ku",
        link: ""
      },
      {
        name: "Tools Budidaya",
        link: ""
      },
    ],
		technologies: ["HTML", "CSS", "Javascript", "Typescript", "Git", "React", "Sass", "Less", "JSS", "Bootstrap", "ANTD", "Next JS", "Node JS", "Vite", ],

	};

	return (
		<div id="experience" className="w-full p-2 ">
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