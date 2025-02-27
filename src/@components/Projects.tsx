import "./projects.scss";

interface AppProjectProps {
	title: string;
	description: string;
	link?: string;
	imageUrl: string;
}

export default function AppProject({ title, description, link, imageUrl }: AppProjectProps) {
	const handleLinkClick = () => {
		if (link) {
			window.open(link, "_blank");
		}
	};

	return (
		<div className="project">
			<div className="project-title-container">
        <span
			onClick={handleLinkClick}
			className={`project-title`}
		>
          {title}
        </span>
				<div className="project-image-container">
					<img
						src={imageUrl}
						alt={title}
						className={`project-image ${!imageUrl ? 'no-link' : ''}`}
						onClick={handleLinkClick}
					/>
				</div>
			</div>
			<span className="project-description">{description}</span>
		</div>
	);
}
