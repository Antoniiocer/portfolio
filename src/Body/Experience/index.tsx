import MyExperienceTitle from './Title.tsx'
import "./index.scss"
import { AppExperience } from '../../@components'
import { dataSeekersExperience, noGravityExperience } from '../../@assets/texts.ts'
import { FaFontAwesome, FaGithub, FaReact } from 'react-icons/fa'
import { SiPreact, SiTypescript, SiSass } from 'react-icons/si'

export default function MyExperience() {
	return (
		<div  id="experience" className="my-experience-container">
			<MyExperienceTitle />
			<AppExperience
				{...dataSeekersExperience}
				icons={[
					{ Component: FaReact, props: { size: 30, color: "#61DAFB" } },
					{ Component: FaGithub, props: { size: 30, color: "#181717" } },
					{ Component: SiPreact, props: { size: 30, color: "#F7B93E" } },
					{ Component: FaFontAwesome, props: { size: 30, color: "#FF5F00" } }
				]}
			/>
			<AppExperience
				{...noGravityExperience}
				icons={[
					{ Component: FaGithub, props: { size: 30, color: "#181717" } },
					{ Component: SiTypescript, props: { size: 30, color: "#007ACC" } },
					{ Component: FaReact, props: { size: 30, color: "#61DAFB" } },
					{ Component: SiSass, props: { size: 30, color: "#CC6699" } }
				]}
			/>
		</div>
	);
}
