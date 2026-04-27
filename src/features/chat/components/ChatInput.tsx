"use client";

import { useState } from "react";

export const ChatInput = ({ onSend }: { onSend: (text: string) => void }) => {
    const [text, setText] = useState("");

    const handleKey = (e: any) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            send();
        }
    };

    const send = () => {
        if (!text.trim()) return;
        onSend(text);
        setText("");
    };

    return (
        <div className="chat-input-area">
            <textarea
                placeholder="Type your message… (Enter to send)"
                rows={1}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKey}
            />
            <button className="btn btn-primary" onClick={send}>Send ↑</button>
        </div>
    );
};
