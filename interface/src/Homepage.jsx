import { useState, useRef } from "react"
import { sendChatMessage } from "./chatbot"

// import NavBar from "./NavBar";
// import TextMessageBox from "./TextMessageBox";

// Send Icons I've tried
import { IoSendSharp } from "react-icons/io5";

export default function HomePage() {

    const typingArea = useRef();

    const onTextAreaUse = () => {
        const area = typingArea.current;

        if(!area)
            return;

        area.style.height = "auto";
        area.style.height = area.scrollHeight + "px";
    }

    return (
        <div className="pt-12.5">
            <div className="w-[70%] border-2 border-blue-400 place-self-center rounded-lg p-7.5 pb-1 flex flex-col h-fit">
                <div className="w-full h-[90%] bg-gray-900 rounded-md place-self-center flex flex-col justify-end p-2">
                    <TextMessageBox user={"chatbot"} text="I just made a textbox!" fromThisUser={false}/>
                    <TextMessageBox user={"you"} text="Congrats man! nice job staying on schedule" fromThisUser={true}/>
                    <TextMessageBox user={"you"} sticker={0} fromThisUser={true} showpfp={false}/>
                    <TextMessageBox user={"chatbot"} text="testing a really long text block to see what will happen, this is kinda important to know for the styling cuz it'll let me know how big messages will look on the website when someone enevitably sends one" fromThisUser={false} showpfp={true}/>
                </div>

                <div className="w-[calc(100%+60px)] flex place-self-center min-h-[10%] mt-8 justify-between border-t-2 border-blue-400 pl-7.5 pr-7.5 pb-2.5 pt-2.5">
                    <textarea ref={typingArea} rows={1} className="py-3 h-12.5 w-[80%] rounded-lg pl-1 ml-2 resize-none mt-2" placeholder="Enter a message here:" onChange={onTextAreaUse}/>
                    <button className="rounded-full w-12.5 h-12.5 bg-blue-400 ml-5 text-[30px] mt-2 text-white"><IoSendSharp className="ml-1 w-full"/></button>
                </div>
            </div>
        </div>
    )
}