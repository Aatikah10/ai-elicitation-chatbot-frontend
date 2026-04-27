"use client";

import { useState } from "react";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import { RightPanel } from "./RightPanel";
import { Sidebar } from "../../layout/Sidebar";
import { TopBar } from "../../layout/TopBar";

export const ChatLayout = () => {
    const [messages, setMessages] = useState([
        { role: "ai" as const, text: "Hello! I'm your AI Requirement Elicitation assistant. I'll guide you through a conversation to gather and document your system requirements. Let's begin — can you describe the system you're trying to build?", time: "09:01 AM", confidence: "0.98" },
        { role: "user" as const, text: "I need a system where users can log in and browse product recommendations based on their purchase history.", time: "09:03 AM" },
        { role: "ai" as const, text: "I've identified two key requirements: user authentication and a personalized recommendation engine based on purchase history. Should recommendations update in real-time, or is an hourly refresh acceptable?", time: "09:03 AM", confidence: "0.92", emotion: "😊 satisfied" },
        { role: "user" as const, text: "Real-time would be ideal but we're not sure if our budget allows for it.", time: "09:05 AM" },
        { role: "ai" as const, text: "Understood — I'll log this as a conditional non-functional requirement: real-time recommendations with hourly batch fallback, subject to budget. What's the expected number of concurrent users?", time: "09:05 AM", confidence: "0.89", emotion: "😕 uncertain" },
    ]);

    const [requirements, setRequirements] = useState([
        { id: "REQ-001", type: "Functional", text: "User authentication via email and password", conf: "0.97" },
        { id: "REQ-002", type: "Functional", text: "Personalized product recommendations based on purchase history", conf: "0.92" },
        { id: "REQ-003", type: "Non-Functional", text: "Real-time recommendations with hourly batch fallback", conf: "0.85" },
    ]);

    const handleSend = (text: string) => {
        const nextTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setMessages((prev) => [...prev, { role: "user", text, time: nextTime }]);
    };

    return (
        <>
            <Sidebar />
            <div className="app-main">
                <TopBar />
                <div className="chat-layout">
                    <div className="chat-main">
                        <ChatMessages messages={messages} />
                        <ChatInput onSend={handleSend} />
                    </div>
                    <RightPanel requirements={requirements} />
                </div>
            </div>
        </>
    );
};
