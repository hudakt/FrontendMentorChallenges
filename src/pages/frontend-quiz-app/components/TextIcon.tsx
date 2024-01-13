import { useEffect, useState } from "react";
import classes from "./TextIcon.module.scss";

interface TextIconProps {
   iconSrc?: string;
   title: string;
   additionalClass?: string;
}

const TextIcon: React.FC<TextIconProps> = (props) => {
   const [icon, setIcon] = useState();
   useEffect(() => {
      if (props.iconSrc) {
         import("../assets/images/" + props.iconSrc).then((result) => {
            setIcon(result.default);
         });
      } else {
         setIcon(undefined);
      }
   }, [props.iconSrc]);

   const iconClass = props.title.toLowerCase();

   return (
      <div className='flex justify-start align-middle items-center'>
         <div
            className={`${classes.imageWrapper} ${classes[iconClass]} ${
               props.additionalClass
                  ? classes[props.additionalClass]
                  : undefined
            }`}
         >
            {icon ? <img src={icon} alt='Topic related icon' /> : undefined}
         </div>
         <span className='app-font-heading-s app-font-bold'>{props.title}</span>
      </div>
   );
};

export default TextIcon;
