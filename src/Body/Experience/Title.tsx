import {motion, useInView} from 'framer-motion'
import {experienceButton} from '../../@assets/texts.ts'
import {useRef} from 'react'
import "./title.scss"


export default function MyExperienceTitle() {
	const ref = useRef<HTMLDivElement>(null);
	const inSight = useInView(ref)

	const aboutMeSubtitle = {
		hidden: {
			y: 50,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1.5,
				ease: "easeInOut",
				delay: .5
			},
		},
	};

	return <div ref={ref} className="my-experience-title-container">
		<motion.span
			className="my-experience-title"
			initial="hidden"
			animate={inSight ? "visible" : "hidden"}
			variants={aboutMeSubtitle}
		>
			{experienceButton}
		</motion.span>
	</div>
}