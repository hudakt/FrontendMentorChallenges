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
    public options: Array<string> = [];
    public answer: string = '';

    constructor(data: QuestionData) {
        this.question = data.question;
        this.answer = data.answer;
        this.options = data.options;
    }

    public isAnswerValid = (selectedOption: string): boolean => {
        return this.answer === selectedOption;
    }
}