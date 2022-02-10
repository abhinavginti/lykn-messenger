const MessageComp = ({ val }) => {
    const { msg, me } = val;
    return <div className={`${me?'ml-auto bg-sky-700':'mr-auto bg-gray-500'} rounded-md w-fit py-1 px-5 text-left`}>
        {msg}
    </div>;
};

export default MessageComp;
