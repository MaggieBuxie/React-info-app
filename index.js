const React = window.React;
const ReactDOM = window.ReactDOM;
import Header from "./Header"

const FunFacts = () => {
    return (
        <div>
            <i className="fa-brands fa-react"></i>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps including mobile apps</li>
            </ul>
        </div>
    );
};

const ReasonsILoveReact = () => {
    return (
        <div>
            <h1>My awesome website in React</h1>
            <h3>Reasons I love React</h3>
            <ol>
                <li>It's composable</li>
                <li>It's declarative</li>
                <li>It's a hireable skill</li>
                <li>It's actively maintained by skilled people</li>
            </ol>
        </div>
    );
};

function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    );
}

const App = () => {
    return (
        <div style={{ backgroundColor: '#87CEEB', padding: '20px' }}>
            <Header />
            <FunFacts />
            <ReasonsILoveReact />
            <Footer />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));