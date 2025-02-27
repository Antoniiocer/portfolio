import "./contactMe.scss"
import {contactMe, email} from '../../@assets/texts.ts'

export default function ContactMe() {


	return <div>
		<span className="contact-me-button">
			<span>{contactMe}</span>
			<span>{email}</span>
		</span>
	</div>
}