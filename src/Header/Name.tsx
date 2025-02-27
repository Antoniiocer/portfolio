import {motion, useMotionValue, useTransform} from 'framer-motion'
import {titleName} from '../@assets/texts.ts'
import {useEffect} from 'react'
import {animate} from 'motion'
import "./name.scss"

export default function TitleName() {
	const count = useMotionValue(0);
	const baseText = titleName as string;

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		const controls = animate(count, baseText.length, {
			type: "tween",
			duration: 3.5,
			ease: "easeInOut",
			onUpdate: (latest) => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-expect-error
				count.set(latest);
			},
		});
		return controls.stop;
	}, [baseText, count]);

	const cursorVariants = {
		blinking: {
			opacity: [0, 0, 1, 1],
			transition: {
				duration: 1.2,
				repeat: Infinity,
				repeatDelay: 0,
				ease: "linear",
				times: [0, 0.5, 0.5, 1],
			},
		},
	};

	const displayedText = useTransform(count, (value) => baseText.slice(0, Math.floor(value)));

	return (
		<div className="title-name-container">
			<div className="title-name-sub-container">
				<motion.span className="title-name">
					{displayedText}
				</motion.span>
				<motion.div
					variants={cursorVariants}
					animate="blinking"
					className="cursor-blinking"
				/>
			</div>
		</div>
	);
}