import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <main
      className="
        fixed inset-0         /* full‑screen overlay on mobile */
        sm:relative sm:inset-auto sm:flex-1  /* normal flex‑1 on tablet+ */
        flex flex-col
        bg-white bg-opacity-10 backdrop-blur-lg
        z-20                 /* above sidebar */
      "
    >
      <div className="px-4 py-3 flex-1 overflow-auto">
        {!loading && messages.length > 0
          ? messages.map((message) => (
              <div key={message._id} ref={lastMessageRef}>
                <Message message={message} />
              </div>
            ))
          : loading
          ? [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)
          : (
            <p className="text-center text-white mt-4">
              Send a message to start the conversation
            </p>
          )}
      </div>
    </main>
  );
};

export default Messages;
