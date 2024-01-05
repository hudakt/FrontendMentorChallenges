import classes from './SolutionCard.module.scss';

interface SolutionCardProps {
    route: string;
    name: string;
    previewSrc: string;
}

const SolutionCard: React.FC<SolutionCardProps> = (props) => {
    return (
        <div className={classes.solutionCard}>
            <div className="flex flex-col w-auto bg-gray-400 rounded-md shadow-md relative">
                <img className='rounded-md' src={props.previewSrc} alt="Preview of completed solution" />
                <div className={classes.linkWrapper}>
                    <a href={props.route}>{props.name}</a>
                </div>
            </div>
        </div>
    )
}

export default SolutionCard;