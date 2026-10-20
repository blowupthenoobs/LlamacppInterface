import { useState, useRef } from "react"

// import NavBar from "./NavBar";
// import TextMessageBox from "./TextMessageBox";

// Send Icons I've tried
// import { AiOutlineSend } from "react-icons/ai";

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
        <div className="">
            {/* <NavBar/> */}
            <div>   {/* can't have margins here for some reason */}
                <div className="h-12.5"></div>
                <div className="w-[70%] h-131.25 bg-orange-300 place-self-center rounded-lg p-7.5">
                    <div className="w-full h-[90%] bg-white rounded-md place-self-center flex flex-col justify-end p-2">
                        {/* <TextMessageBox user={"blowupthenoobs"} text="I just made a textbox!" fromThisUser={false}/>
                        <TextMessageBox user={"Jeffery"} text="Congrats man! nice job staying on schedule" fromThisUser={true}/>
                        <TextMessageBox user={"Jeffery"} sticker={0} fromThisUser={true} showpfp={false}/>
                        <TextMessageBox user={"blowupthenoobs"} text="testing a really long text block to see what will happen, this is kinda important to know for the styling cuz it'll let me know how big messages will look on the website when someone enevitably sends one" fromThisUser={false} showpfp={true}/> */}
                        <p>test text here</p>
                    </div>

                    <div className="w-[calc(100%+60px)] rounded-md flex place-self-center min-h-[10%] mt-4 justify-between bg-orange-300 pl-7.5 pr-7.5 pb-2.5">
                        <textarea ref={typingArea} rows={1} className="py-3 w-[50%] rounded-lg pl-1 ml-2 resize-none" placeholder="Enter a message here:" onChange={onTextAreaUse}/>
                        <button className="rounded-md w-12.5 h-12.5 ml-auto p-1 border-l border-r border-orange-200 text-[22px] bg-[#fdbd79]"><MdOutlineEmojiEmotions className="w-full"/></button>
                        <button className="rounded-md w-12.5 h-12.5 p-1 border-l border-r border-orange-200 text-[25px] bg-[#fdbd79]"><BiSticker className="w-full"/></button>
                        <button className="rounded-md w-12.5 h-12.5 p-1 border-l border-r border-orange-200 text-[25px] bg-[#fdbd79]"><CiFileOn className="w-full"/></button>
                        {/* <button className="rounded-full w-[50px] h-[50px] bg-blue-400 ml-auto text-[30px]"><RiSendPlaneFill className="w-full"/></button> */}
                        <button className="rounded-full w-12.5 h-12.5 bg-blue-400 ml-5 text-[30px]"><IoSendSharp className="ml-1 w-full"/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}