import ApiCall from "../../utils/ApiCall";
import { useEffect, useState } from "react";
import ConversationEl from "./ConversationEl";
const Conversations = ({ setUsername }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await ApiCall('/api/getUsers', 'GET')
      if (fetchedData.status) {
        setData(fetchedData.users)
      }
    }
    fetchData()
  }, [])
  return <div className="flex flex-initial flex-col w-full md:basis-4/12 border-transparent md:border-r-white border-2">
    {data && data.map((val, index) => <ConversationEl val={val} key={val.username + index} setUsername={setUsername} />)}
  </div>;
};

export default Conversations;
