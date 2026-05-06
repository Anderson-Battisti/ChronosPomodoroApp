import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';
import { TimerIcon } from 'lucide-react';

export function App()
{
    return (
        <div>
            <Heading>
                Hello, React!
                <button>
                    <TimerIcon />
                </button>
            </Heading>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea cumque nemo laborum eum repellendus! Odio, adipisci consequuntur, soluta veniam fugit, cupiditate temporibus quasi dolorem ipsum non inventore ullam vel eos.
            </p>
        </div>
    ) ;
};