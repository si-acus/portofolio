import Head from "next/head";
import About from "../components/About";
import Main from "../components/Main";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "src/components/Projects";
import Contact from "src/components/Contact";
import Certifications from "src/components/Certifications";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Tubagus | Full-Stack Developer</title>
				<meta
					name="description"
					content="I’m a full-stack web developer specialized in usinf react, nextjs and typescript to build exceptional user interface."
				/>
			</Head>
			<div className="overflow-x-clip">
				<Main />
                <About />
				<Skills />
				<Experience />
				<Projects />
				<Certifications />
				<Contact /> 
			</div>
		</div>
	);
}