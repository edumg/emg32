import React, { Component } from 'react';

import Header from './components/Header.jsx';

class App extends Component {
    render() {
        return (
            <main>
                <h1>Hello World!</h1>
                <p>
                    My name is Jean Rigotti and I am Brazilian Full Stack
                    Developer based and working in Amsterdam.
                </p>
                <p>
                    I am not actively looking for a job, but if you're looking
                    to fill a position which my skills match or can be improved;
                    we can sit for a coffee.
                </p>
                <p>
                    Be aware that I don't have a linkedin account anymore, as
                    the means of growing an attractive profile is completely
                    unrelated with one's ability to be a good developer, but
                    your ability to spend time on it.
                </p>
                <p>
                    If you wish to see have a better overview of my development
                    skills:
                    <ul>
                        <li>
                            <a href="https://github.com/JRigotti">Github</a>
                        </li>
                        <li>
                            <a href="https://stackoverflow.com/users/1657165/rigotti">
                                Stack Overflow
                            </a>
                        </li>
                        <li>
                            <a href="mailto:gmgotti@protonmail.com">
                                gmgotti@protonmail.com
                            </a>
                        </li>
                    </ul>
                </p>
            </main>
        );
    }
}

export default App;
