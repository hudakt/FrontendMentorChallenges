import React from "react";
import classes from './Heading.module.scss';

interface HeadingProps {
    regularHeadingValue: string;
    boldHeadingValue: string;
    caption?: string;
}

const Heading: React.FC<HeadingProps> = (props) => {
    return (
        <section className='heading-wrapper'>
            <h1 className={classes.heading}>
                <span className="app-font-heading-l">
                    {props.regularHeadingValue}
                </span>
                <span className="app-font-heading-l app-font-bold">
                    {props.boldHeadingValue}
                </span>
            </h1>
            <p className="app-font-body-s-italic">{props.caption}</p>
        </section>
    )
}

export default Heading;