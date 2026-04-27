"use client";

import { useEffect, useRef } from "react";

interface Message {
    role: "ai" | "user";
    text: string;
    time: string;
    confidence?: string;
    emotion?: string;
}

export const ChatMessages = ({ messages }: { messages: Message[] }) => {
    const endRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="chat-messages">
            {messages.map((m, i) => (
                <div key={i} className={`chat-msg ${m.role === "ai" ? "ai" : "user"}`}>
                    <div className={`msg-av ${m.role === "ai" ? "ai" : "usr"}`}>
                        {m.role === "ai" ? "AI" : "A"}
                    </div>
                    <div>
                        <div className="msg-bubble">{m.text}</div>
                        <div className="msg-meta" style={m.role === 'user' ? { justifyContent: 'flex-end' } : {}}>
                            <span className="msg-time">{m.time}</span>
                            {m.confidence && <span className="conf-tag">conf: {m.confidence}</span>}
                            {m.emotion && <span className="emo-tag">{m.emotion}</span>}
                        </div>
                    </div>
                </div>
            ))}
            <div ref={endRef} />
        </div>
    );
};
