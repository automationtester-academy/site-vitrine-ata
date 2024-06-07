import React from "react";
export default function CategoriesSection({  onHandicapClick }) {
    return (
        <>
            <div className="relative">
                <div className="formation-background w-full h-full p-7"></div>
                <div className="button-container">
                    <div className="flex justify-evenly items-center flex-wrap w-3/4">
                        <div className="">
                            <button  className=" text-white  font-bold py-2 px-4 rounded hover:bg-cyan-600">Bootcamp</button>
                        </div>
                        <div className="">
                            <button className=" text-white  font-bold py-2 px-4 rounded hover:bg-cyan-600">Formation courte</button>
                        </div>
                        <div className="">
                            <button  className=" text-white  font-bold py-2 px-4 rounded hover:bg-cyan-600">Abonnement</button>
                        </div>
                        <div className="">
                            <button className=" text-white  font-bold py-2 px-4 rounded hover:bg-cyan-600">Reconversion pro</button>
                        </div>
                        <div className="">
                            <button onClick={onHandicapClick} className=" text-white font-bold py-2 px-4 rounded hover:bg-cyan-600">Mix-learning</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}