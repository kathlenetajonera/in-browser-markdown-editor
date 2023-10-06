import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Content from './components/Content';

function App() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="font-roboto overflow-hidden">
            <Sidebar isNavOpen={isNavOpen} />

            <main
                className={`transition-transform ease-in-out duration-300 ${
                    isNavOpen ? 'translate-x-sidebar' : 'translate-x-[0]'
                }`}
            >
                <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
                <Content />
            </main>
        </div>
    );
}

export default App;
