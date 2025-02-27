import { aboutMeSubtitle, githubLink, githubProfile, linkedinLink, linkedinProfile, titleName } from '../../@assets/texts.ts';
import "./subtitle.scss";
import { AppButton } from '../../@components';
import profilePicture from "../../@assets/profilePicture.jpeg";

export default function AboutMeSubTitle() {
	return (
		<div className="about-me-sub-title-container">
			<span>{aboutMeSubtitle}</span>
			<img src={profilePicture} alt={titleName} className="profile-picture" />
			<div className="about-me-sub-title-button">
				<AppButton showIcon content={linkedinProfile} onClick={() => window.open(linkedinLink)} />
				<AppButton showIcon content={githubProfile} onClick={() => window.open(githubLink)} />
			</div>
		</div>
	);
}
