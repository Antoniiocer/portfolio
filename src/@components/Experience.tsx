import { IconBaseProps } from "react-icons";
import React from 'react'
import "./experience.scss"

interface AppExperienceProps {
	title: string;
	role: string;
	date: string;
	description: string;
	link: string;
	icons?: { Component: React.ComponentType<IconBaseProps>, props: IconBaseProps }[];
}

export default function AppExperience({title, role, date, description, icons, link}: AppExperienceProps) {

	return (
		<div className="experience">
			<div className="experience-title-container">
				<span onClick={() => window.open(link)} className="experience-title">{title}</span>
				<div className="experience-subtitle">
					<span>{role}</span>
					<span>{date}</span>
				</div>
				{!!icons && (
					<div className="experience-techs">
						{icons.map(({Component, props}, index) => (
							<Component {...props} key={index}/>
						))}
					</div>
				)}
			</div>
			<span className="experience-description">{description}</span>
		</div>
	);
}
