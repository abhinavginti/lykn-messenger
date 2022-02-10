const ConversationEl = ({ val, setUsername }) => {
    return <div onClick={() => {
        localStorage.un = val.username
        setUsername(val.username)
    }} className='flex flex-row p-1 cursor-pointer hover:shadow-xl'>
        <img src={`https://ui-avatars.com/api/?name=${val.username}&size=40&background=C50707&color=fff`} title={val.username} alt={val.username} className='rounded-full' />
        <div className="flex flex-col ml-2">
            <p>{val.username}</p>
        </div>
    </div>;
};

export default ConversationEl;
