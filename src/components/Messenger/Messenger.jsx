import { useState, useContext, useEffect } from "react";
import Conversations from "./Conversations";
import { SocketContext } from "../../context/SocketContext";
import ChatBox from './ChatBox'
const Messenger = () => {
  const [username, setUsername] = useState(null);
  const { socket } = useContext(SocketContext);
  useEffect(() => {
    socket.current.emit('setUser', localStorage.username)
  }, [])
  return <div className="flex w-full p-2 h-full justify-center items-center ">
    <div className="md:w-[80vw] w-full h-[90vh] bg-glassmorphism flex flex-row">
      <Conversations setUsername={setUsername} />
      <ChatBox username={username} socket={socket} />
    </div>
  </div>
};

export default Messenger;
