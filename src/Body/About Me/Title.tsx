import { motion, useInView } from "framer-motion";
import { aboutMeButton } from "../../@assets/texts.ts";
import "./title.scss";
import {useRef} from 'react'

export default function AboutMeTitle() {
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

	return (
		<div ref={ref} className="about-me-title-container">
			<motion.span
				className="about-me-title"
				initial="hidden"
				animate={inSight ? "visible" : "hidden"}
				variants={aboutMeSubtitle}
			>
				{aboutMeButton}
			</motion.span>
		</div>
	);
}
