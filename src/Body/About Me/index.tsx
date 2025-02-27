import AboutMeTitle from './Title.tsx'
import "./index.scss"
import AboutMeText from './Text.tsx'
import AboutMeSubTitle from './SubTitle.tsx'
import {AppButton} from '../../@components'
import {githubLink, githubProfile, linkedinLink, linkedinProfile} from '../../@assets/texts.ts'

export default function AboutMe() {

	return <div id="aboutMe" className="about-me-container">
		<AboutMeTitle />
		<div className="about-me-content" >
			<AboutMeSubTitle />
			<AboutMeText/>
			<div className="about-me-content-sub-buttons" >
				<AppButton showIcon content={linkedinProfile} onClick={() => window.open(linkedinLink)}/>
				<AppButton showIcon content={githubProfile} onClick={() => window.open(githubLink)}/>
			</div>
		</div>
	</div>
}