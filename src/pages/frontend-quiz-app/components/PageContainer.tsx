import classes from './PageContainer.module.scss';

const PageContainer: React.FC<any> = (props) => {
    return (
        <div className={classes.pageContainer}>
            {props.children}
        </div>
    )
}

export default PageContainer;