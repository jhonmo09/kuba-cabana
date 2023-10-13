import React from 'react'

const AllImages = () => {
    return (
        <div className={showAll ? "absolute w-full h-full bg-red-500 z-50 flex flex-col gap-4" : "hidden"}>
            <div className="flex justify-between items-center px-3">
                <div onClick={closeModal} className="cursor-pointer">
                    <img className="rotate-90" src="/static/images/arrow_icon.svg" alt="arrow-icon" />
                </div>
                <div className="flex gap-8">
                    <div className="flex items-center gap-0.5 cursor-pointer">
                        <img className="w-5 h-5" src="/static/images/share_icon.png" alt="" />
                        <a href="">share</a>
                    </div>
                    <div className="flex items-center gap-0.5 cursor-pointer">
                        <img className="w-5 h-5" src="/static/images/like_icon.png" alt="" />
                        <a href="">keep</a>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src="/static/images/image_hero2.jpeg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default AllImages
