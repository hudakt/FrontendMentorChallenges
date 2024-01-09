import { useEffect, useState } from 'react';
import classes from './TextIcon.module.scss';

interface TextIconProps {
    iconSrc?: string;
    title?: string;
    optionLetter?: string;
}

const TextIcon: React.FC<TextIconProps> = (props) => {
    const [icon, setIcon] = useState();
    useEffect(() => {
        if (props.iconSrc) {
            import('../assets/images/' + props.iconSrc).then((result) => {
                setIcon(result.default);
            });
        } else {
            setIcon(undefined);
        }
    }, [props.iconSrc]);

    let iconClass = '';

    if (props.title) {
        switch(props.title) {
            case 'HTML':
            case 'CSS':
            case 'JavaScript':
            case 'Accessibility':
                iconClass = props.title.toLowerCase();
                break;
            default:
                iconClass = 'greyIconBg';
                break;
        }
    }

    return (
        <div className='flex justify-start align-middle items-center'>
            <div className={`${classes.imageWrapper} ${classes[iconClass]}`}>
                { icon ? (<img src={icon} alt="" />) : (<span className='app-font-heading-s app-font-secondary'>{props.optionLetter}</span>)}
            </div>
            <span className='app-font-heading-s app-font-bold'>{props.title}</span>
        </div>
    )
}

export default TextIcon;