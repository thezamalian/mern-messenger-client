import Topbar from '../../components/topbar/Topbar';
import './messenger.css';

const Messenger = () => {
    return (
        <>
            <Topbar />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper"></div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper"></div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper"></div>
                </div>
            </div>
        </>
    );
}

export default Messenger;
