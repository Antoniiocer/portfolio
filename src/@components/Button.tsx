import "./button.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

export default function HeaderButton({ content, onClick, showIcon = false }: { content: string, onClick?: () => void, showIcon?: boolean }) {
	return (
		<div className="button-container">
			<div className="button-sub-container" onClick={onClick}>
				<div className="button-sub-sub-container" >
					<span className="button-text">{content}</span>
					{showIcon && <div className="icon-container">
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon"/>
					</div>}
				</div>
				<span className="button-background"/>
			</div>
		</div>
	);
}
