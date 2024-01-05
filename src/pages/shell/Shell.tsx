import classes from './Shell.module.scss';
import SolutionCard from './components/SolutionCard';
import logo from '../../logo.svg';

import previewImage from '../frontend-quiz-app/assets/images/preview.jpg';

const Shell = () => {
    return (
        <div className={classes.shell}>
            <div className='bg-zinc-900'>
                <div className='min-h-screen flex flex-col justify-center md:container md:mx-auto px-4 py-8'>
                    <div>
                        <h1 className="font-open-sans text-2xl md:text-6xl font-bold text-white mb-10">Frontend Mentor Challenges</h1>
                        <p className='text-gray-400 text-lg md:text-2xl mb-4'>List of my solutions:</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-96 mb-10'>
                            <SolutionCard name='Frontend Quiz App' route='frontend-quiz-app' previewSrc={previewImage} />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center align-middle'>
                        <p className='text-center text-gray-400 text-lg md:text-2xl mb-4'>Developed using React.js</p>
                        <img className='max-h-20' src={logo} alt="React logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shell;