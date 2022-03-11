import './message.css';

const Message = ({ own }) => {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                    alt="" />
                <p className='messageText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className="messageBottom">
                1 hour ago
            </div>
        </div>
    );
}

export default Message;
