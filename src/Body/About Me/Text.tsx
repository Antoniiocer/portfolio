import "./text.scss"
import {aboutMeText, aboutMeTextFour, aboutMeTextThree, aboutMeTextTwo} from '../../@assets/texts.ts'


export default function AboutMeText() {

	return <div className="about-me-text-container">
		<span>
			{aboutMeText}
		</span>
		<span>
			{aboutMeTextTwo}
		</span>
		<span>
			{aboutMeTextThree}
		</span>
		<span>
			{aboutMeTextFour}
		</span>
	</div>
}