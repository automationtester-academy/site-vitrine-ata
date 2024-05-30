export default function CommentComponent(){
    return(
        <>
        <section className="flex justify-center bg-yellow-200 w-full h-full">
            <div className="Comment_container h-[32.25rem] w-full bg-slate-900 border-b-2 flex flex-col">
                <div className="Comment_title flex justify-center bg-red-300 w-full  h-[35%] mb-10">
                    <p className="text-white w-8/12 text-4xl text-center font-bold mt-16 bg-red-700">Pour vous faire votre propre avis,<br /> <span className="text-cyan-400 text-center ms-7">demandez celui des autres.</span></p>
                </div>
                <div className="Comments flex justify-center bg-green-200 w-[80%]">
                    <div className="">
                                    
                        <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </a>

                    </div>
                    <div className="">
                    wow
                    </div>
                </div>

            </div>

        </section>
        
        </>
    )
}