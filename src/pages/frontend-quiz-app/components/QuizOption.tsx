import classes from "./QuizOption.module.scss";
import correctIcon from "../assets/images/icon-correct.svg";
import wrongIcon from "../assets/images/icon-incorrect.svg";

interface QuizOptionProps {
   optionValue: string;
   optionLetter: string;
   selected: boolean;
   disabled: boolean;
   state: "correct" | "wrong" | "default";
   onOptionClicked: (
      event: React.ChangeEvent<HTMLInputElement>,
      optionValue: string
   ) => void;
}

const QuizOption: React.FC<QuizOptionProps> = (props) => {
   return (
      <div className={classes.quizOption}>
         <input
            type='radio'
            name='quiz-option'
            id={`quiz-option-radio-${props.optionLetter}`}
            defaultValue={props.optionValue}
            checked={props.selected}
            disabled={props.disabled}
            onChange={(event) =>
               props.onOptionClicked(event, props.optionValue)
            }
         />
         <label
            className={`quiz-option-common ${classes[props.state]}`}
            htmlFor={`quiz-option-radio-${props.optionLetter}`}
         >
            <div className='flex justify-between align-middle items-center'>
               <div className='flex items-center'>
                  <div
                     className={`${classes.imageWrapper} ${
                        props.selected ? classes.selected : undefined
                     }`}
                  >
                     {
                        <span className='app-font-heading-s app-font-secondary'>
                           {props.optionLetter}
                        </span>
                     }
                  </div>
                  <span className='app-font-heading-s app-font-bold'>
                     {props.optionValue}
                  </span>
               </div>
               {props.state === "correct" ? (
                  <img src={correctIcon} alt='Correct answer icon' />
               ) : props.state === "wrong" && props.selected ? (
                  <img src={wrongIcon} alt='Incorrect answer icon' />
               ) : undefined}
            </div>
         </label>
      </div>
   );
};

export default QuizOption;
