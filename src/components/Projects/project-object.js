import mothdama1 from "./img/mothdama1.jpg";
import mothdama2 from "./img/mothdama2.jpg";
import mothdama3 from "./img/mothdama3.jpg";
import mothdama4 from "./img/mothdama4.jpg";
import mothdama5 from "./img/mothdama5.jpg";

import craps1 from "./img/layout6.png";
import craps2 from "./img/layout7.png";

const projects = [
	{
		title: "mothDama",
		images: [mothdama1, mothdama2, mothdama3, mothdama4, mothdama5],
		description:
			"Created a full stack game management suite for the kendama community. It features 3 different game modes and a trick generator.",
		stack: ["React", "Express", "Node", "PostgreSQL"],
		github: "https://github.com/jgharris314/mothDama",
		demo: "https://mothdama.com/games",
	},
	{
		title: "Craps Simulator",
		images: [craps1, craps2],
		description:
			"Created a front end app to play the casino game Craps! Managed state over multiple components. Made use of multiple React hooks",
		stack: ["React"],
		github: "https://github.com/jgharris314/craps2021",
		demo: "https://craps2021.vercel.app",
	},
];

export default projects;
