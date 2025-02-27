import "./header.scss"
import { AppButton } from '../@components'
import {aboutMeButton, projectsButton, experienceButton} from '../@assets/texts.ts'
import TitleName from './Name.tsx'


export default function Header() {

	const scrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};


	return <div className="header">
		<TitleName />
		<div className={"header-buttons"} >
			<AppButton onClick={() => scrollToSection("aboutMe")} content={aboutMeButton} />
			<AppButton onClick={() => scrollToSection("experience")} content={experienceButton} />
			<AppButton onClick={() => scrollToSection("projects")} content={projectsButton} />
		</div>
	</div>
}