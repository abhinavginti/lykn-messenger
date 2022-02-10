import DefaultTemplate from "./DefaultTemplate";
import { useState, useEffect } from "react";
import MessageComp from "./MessageComp";
import ApiCall from "../../utils/ApiCall";
import useUpdateEffect from '../../utils/useUpdateEffect'
const ChatBox = ({ username, socket }) => {
    const [message, setMessage] = useState('')
    const [populateChat, setPopulateChat] = useState([]);

    useEffect(() => {
        setPopulateChat([])
    }, [username])

    const PopulateFunc = (data, me) => {
        if (data.senderUsername === localStorage.un) {
            setPopulateChat(prev => [...prev, { msg: data.text, me }])
        }
    }

    const getMessages = async () => {
        const data = await ApiCall(`/api/getMessage/${username}`, 'GET')
        if (data.status) {
            data.messages.map(msg => { PopulateFunc({ text: msg.messageText, senderUsername: msg.senderUsername }, msg.me) })
        }
    }

    useUpdateEffect(() => {
        getMessages();
    }, [username])


    useEffect(() => {
        socket.current.on('getMessage', (data) => {
            PopulateFunc(data, false)
        })
    }, [])
    const sendMessage = async () => {
        ApiCall('/api/setMessage', 'POST', { senderUsername: localStorage.username, recieverUsername: username, msg: message });
        socket.current.emit('sendMessage', { senderUsername: localStorage.username, recieverUsername: username, message })
        PopulateFunc({ senderUsername: username, text: message }, true);
        setMessage('')
    }
    return username ? <div className="w-full flex flex-col justify-between">
        <div className="flex flex-col h-full flex-initial overflow-auto space-y-2 p-2">{populateChat.length ? populateChat.map((val, index) => <MessageComp key={val.msg + index} val={val} />) : ''}</div>
        <form onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
        }} className='flex flex-row w-full p-2'>
            <input type='text' className="basis-3/4 bg-transparent outline-none" value={message} placeholder="Enter Message ..." onChange={(e) => setMessage(e.target.value)} />
            <button className="basis-1/4 px-7 py-2 rounded-full bg-red-500 font-semibold hover:bg-red-600" type='submit'>Send</button>
        </form>
    </div> : <DefaultTemplate />;
};

export default ChatBox;
