// import StickerItem from "./StickerItem";

function TextMessageBox ({text, user, fromThisUser = false, showpfp = true, sticker = -1, attachment}) {

    return(
        <div className={`w-[80%] min-h-5 rounded-md flex flex-col
            ${ fromThisUser 
                    ? "ml-auto"
                    : "mr-auto"
                }`}>
            
            {showpfp && (<h3 className={`${fromThisUser? "text-right": "text-left"}`}>{user}</h3>)}

            {/* Textbubble and PFP */}
            <div className={`flex
                ${fromThisUser? "flex-row-reverse"
                : "flex-row"
                }`}>

                    {showpfp?
                    <>
                        <div className="w-12.5 mb-auto aspect-square bg-black rounded-full shrink-0 "></div>
                    </>: <> </>}
                
                <div className="flex flex-col">
                    {text != null && (
                        <h1 className={`p-2 rounded-lg text-s text-white 
                        ${ fromThisUser 
                            ? "ml-auto mr-1 bg-blue-400 text-right"
                            : "mr-auto ml-1 bg-red-500 text-left"
                        }`}>{text}</h1>)}
                    

                    {/* {sticker !== -1 && (<StickerItem index={sticker}/>)} */}
                </div>
                
            </div>
            
        </div>
    )
}

export default TextMessageBox;