import { useEffect, useState } from 'react';
import classes from './TextIcon.module.scss';

interface TextIconProps {
    iconSrc?: string;
    title?: string;
}

const TextIcon: React.FC<TextIconProps> = (props) => {
    const [icon, setIcon] = useState();
    useEffect(() => {
        if (props.iconSrc) {
            import('../assets/images/' + props.iconSrc).then((result) => {
                setIcon(result.default);
            });
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
                <img src={icon} alt="" />
            </div>
            <h1 className='app-font-heading-s'>{props.title}</h1>
        </div>
    )
}

export default TextIcon;