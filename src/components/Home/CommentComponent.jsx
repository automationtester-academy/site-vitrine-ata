import CommentOfSaraYaakoubi from '../Home/User-Comments/CommentOfSaraYaakoubi.jsx'
import CommentOfYassineAllami from "../Home/User-Comments/CommentOfYassineAllami.jsx"
import CommentOfAnasBoukhari from "../Home/User-Comments/CommentOfAnasBoukhari.jsx"
import CommentOfGirl from "../Home/User-Comments/CommentOfGirl.jsx"
export default function CommentComponent(){

    return(
        <>
        <section className="Comment_parent flex justify-center">
            <div className="Comment_container h-[32.25rem] pb-20 w-full bg-slate-900  border-b-2 flex flex-col max-sm:h-fit">
                <div className="Comment_title flex justify-center  w-full  h-[35%] mb-10 max-sm:!px-[2%]">
                    <p className="text-white w-8/12 text-4xl text-center font-bold mt-16 max-sm:w-full  max-sm:h-fit max-sm:text-3xl max-sm:!mx-0">Pour vous faire votre propre avis,<br /> <span className="text-cyan-400 text-center ms-7">demandez celui des autres.</span></p>
                </div>
                <div className='Comments-container  pb-5 max-sm:!w-full max-sm:!mx-0'>
                <div className="Comments_scroller flex  gap-10 justify-center !w-[200%] max-sm:!w-[400%] max-sm:!mx-[2%]">
                    <CommentOfSaraYaakoubi/>
                    <CommentOfYassineAllami/>
                    <CommentOfAnasBoukhari/>
                    <CommentOfGirl/>
                </div>
                </div>

            </div>

        </section>
        
        </>
    )
}