import { motion } from "framer-motion";
import { titleRoleFirst, titleRoleLast } from '../../@assets/texts.ts';
import './title.scss'

export default function Title() {


	const titleVariants = (duration = 0.8, delay = 0, direction = "left") => ({
		hidden: {
			opacity: 0,
			x: direction === "left" ? -100 : 100,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration,
				delay,
				ease: 'easeInOut',
			},
		},
	});
	const underBar = {
		hidden: {
			scaleX: 0,
			originX: 0.5,
		},
		visible: {
			scaleX: 1,
			transition: {
				duration: 1.5,
				delay: 2,
				ease: "easeInOut",
			},
		},
	};

	return <div className="title-container">
		<div className="title-role-container">
			<motion.h1
				className="title-role"
				initial="hidden"
				animate="visible"
				variants={titleVariants(1.5, 0, "left")}
			>
				{titleRoleFirst}
			</motion.h1>
		</div>
		<motion.div
			className="title-role-underbar"
			initial="hidden"
			animate="visible"
			variants={underBar}
		/>
		<div className="title-role-container">
			<motion.h1
				className="title-role"
				initial="hidden"
				animate="visible"
				variants={titleVariants(1.5, 0, "right")}
			>
				{titleRoleLast}
			</motion.h1>
		</div>
	</div>
}