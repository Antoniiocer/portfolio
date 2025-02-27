import "./index.scss"
import AppProject from '../../@components/Projects.tsx'


export default function Projects() {


	return <div id="projects" className="projects">
		<span className="projects-title">Projects</span>
		<AppProject description="Coming soon..." link={"http://chum-chat.es"} title="Chum Chat" imageUrl={""} />
		</div>
}