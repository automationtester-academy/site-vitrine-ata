import CommentOfChaimaaSassni from './User-Comments/CommentOfChaimaaSassni.jsx'
import CommentOfMougonFredy from "./User-Comments/CommentOfMougonFredy.jsx"
import CommentOfKemalCherifi from "./User-Comments/CommentOfKemalCherifi.jsx"
import CommentOfJeanBaptiste from "./User-Comments/CommentOfJeanBaptiste.jsx"
export default function CommentComponent(){

    return(
        <>
        <section className="Comment_parent flex justify-center">
            <div className="Comment_container h-[32.25rem] pb-20 w-full bg-slate-900  border-b-2 flex flex-col max-sm:h-fit">
                <div className="Comment_title flex justify-center  w-full  h-[35%] mb-10 sm:max-lg:w-[100%]  max-sm:!px-[2%]">
                    <p className="text-white w-8/12 text-4xl text-center font-bold mt-16  max-sm:w-full   max-sm:h-fit max-sm:text-3xl max-sm:!mx-0">Pour vous faire votre propre avis,<br /> <span className="text-cyan-400 text-center ms-7">demandez l'avis de nos alumni.</span></p>
                </div>
                <div className='Comments-container  pb-5  sm:max-lg:flex max-sm:!w-full max-sm:!mx-0'>
                <div className="Comments_scroller flex  gap-10 justify-center !w-[200%] max-sm:!w-[400%] max-sm:!mx-[2%]">
                    <CommentOfChaimaaSassni/>
                    <CommentOfMougonFredy/>
                    <CommentOfKemalCherifi/>
                    <CommentOfJeanBaptiste/>
                </div>
                </div>

            </div>

        </section>
        
        </>
    )
}