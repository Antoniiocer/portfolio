import "./index.scss"
import MainBody from './MainBody'
import AboutMe from './About Me'
import MyExperience from './Experience'
import Projects from './Projects'


export default function Body() {

	return <div className='body'>
		<MainBody />
		<AboutMe />
		<MyExperience />
		<Projects />
	</div>
}