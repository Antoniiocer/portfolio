import { place, basedIn } from "../../@assets/texts.ts"
import "./basedIn.scss"

export default function BasedIn() {

	return <div className="based-in-container">
		<span className="based-in-text">{basedIn}</span>
		<span className="based-in-text">{place}</span>
	</div>
}