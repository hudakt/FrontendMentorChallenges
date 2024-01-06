import React from "react";
import classes from './Heading.module.scss';

interface HeadingProps {
    regularHeadingValue: string;
    boldHeadingValue: string;
    caption?: string;
}

const Heading: React.FC<HeadingProps> = (props) => {
    return (
        <header className={classes.headingWrapper}>
            <h1>
                <span>
                    {props.regularHeadingValue}
                </span>
                <span>
                    {props.boldHeadingValue}
                </span>
            </h1>
            <p>{props.caption}</p>
        </header>
    )
}

export default Heading;