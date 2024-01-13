import React from "react";
import classes from "./AppButton.module.scss";

interface AppButtonProps {
   title: string;
   onButtonClicked: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => void;
}

const AppButton: React.FC<AppButtonProps> = (props) => {
   return (
      <button
         className={classes.appButton}
         onClick={(e) => props.onButtonClicked(e)}
      >
         {props.title}
      </button>
   );
};

export default AppButton;
