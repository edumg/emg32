import React, { Component } from 'react';

import Header from './components/Header.jsx';

class App extends Component {
    render() {
        return (
            <main>
                <h1>Rigotti</h1>
                <p>
                    My name is Jean Rigotti and I am full stack developer based
                    in Amsterdam.
                </p>
                <p>
                    You see more about in those links:
                    <ul>
                        <li>
                            <a href="#">Github</a>
                        </li>
                        <li>
                            <a href="#">Stack Overflow</a>
                        </li>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                    </ul>
                </p>
            </main>
        );
    }
}

export default App;
