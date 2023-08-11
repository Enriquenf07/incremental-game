function Boss1() {
    return (
        <div className="flex flex-col items-center h-full w-full text-zinc-700 gap-4 overflow-hidden pt-4">
            <div className="h-[17rem] w-[19rem] rounded-xl border border-black">

            </div>
            <div className="flex flex-col items-center">
                <p>Boss</p>  
                <p>Health: 10</p>
                <p>Power: 10</p>
            </div>
            <button className="h-14 w-32 rounded-xl justify-center items-center flex bg-red-400">Fight</button>
        </div>
    )
}

export default Boss1