export default class Quiz {
    public title: string = '';
    public icon: string = '';
    public questions: Array<QuizQuestion> = [];

    constructor(data: QuizData) {
        this.icon = data.icon;
        this.title = data.title;
        this.questions = data.questions.map((q) => new QuizQuestion(q));
    }
}

interface QuizData {
    title: string;
    icon: string;
    questions: Array<QuestionData>;
}

interface QuestionData {
    question: string;
    options: Array<string>;
    answer: string;
}

class QuizQuestion {
    public question: string = '';
    public options: Array<{value: string; optionLetter: string}> = [];
    public answer: string = '';

    constructor(data: QuestionData) {
        this.question = data.question;
        this.answer = data.answer;
        this.options = data.options.map((o, index) => {
            return {
                value: o,
                optionLetter: this.getLetterByIndex(index)
            }
        });
    }

    public isAnswerValid = (selectedOption: string): boolean => {
        return this.answer === selectedOption;
    }

    private getLetterByIndex(index: number) {
        switch(index) {
            case 0:
                return 'A';
            case 1:
                return 'B';
            case 2:
                return 'C';
            case 3:
                return 'D';
            default:
                return '';
        }
    }
}