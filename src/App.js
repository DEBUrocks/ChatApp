import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            projectID="9574fe28-d4aa-4020-8f76-51a311b3d8ec"
            userName="DebmeetAdmin1"
            userSecret="admin"
            renderChatFeed={(chatAppProps)=> <ChatFeed { ... chatAppProps}/>}
        />
    );
}

export default App;