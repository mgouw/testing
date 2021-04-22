import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './Chat.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />;

    return  (
        <ChatEngine 
            height="100vh"
            projectID="c9518d9a-b207-40a5-9f1e-c17c3e7856ae"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps } />}
        />
    );
}

export default App;