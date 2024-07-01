import notfound from '../assets/backgrounds/NotFoundBackground.png'
export default function NotFound(){
    return(
        <>
            <section>
                <div className='flex justify-end'>
                    <img src={notfound} alt="" />
                </div>
            </section>
        </>
    )
}