import Head from "next/head";
import About from "../components/About";
import Main from "../components/Main";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "src/components/Projects";
import Contact from "src/components/Contact";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Nosarumen | Front-End Developer</title>
				<meta
					name="description"
					content="I’m a front-end web developer specialized in usinf react, nextjs and typescript to build exceptional user interface."
				/>
				<link rel="icon" href="/fav.ico" />
			</Head>
			<div className="overflow-x-clip">
                hello
				<Main />
                <About />
				<Skills />
				<Experience />
				<Projects />
				<Contact /> 
			</div>
		</div>
	);
}