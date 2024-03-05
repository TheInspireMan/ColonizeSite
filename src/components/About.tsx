import Link from 'next/link'

export default function About() {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen pt-10">
                <h1 className="font-bold text-8xl text-green-400 pb-10">About Project</h1>
                <p className="text-4xl font-bold">
                    <em className="not-italic font-bold text-6xl text-blue-400">Project: </em> Colonize <br/>
                    <em className="not-italic font-bold text-6xl text-blue-400">Subject: </em> Computer Science <br/>
                    <em className="not-italic font-bold text-6xl text-blue-400">Type: </em> Website, Game <br/>
                    <em className="not-italic font-bold text-6xl text-blue-400">Purpose: </em> To engage people on <em className="not-italic font-bold text-6xl text-yellow-400">Colonization</em> of Mars <br/>
                    <em className="not-italic font-bold text-6xl text-blue-400">Score: </em> 22/22 <br/>
                </p>
            </div>

            <hr/>

            <div className="flex flex-col justify-center items-center h-screen pb-10">
                <h1 className="font-bold text-8xl text-green-400 pb-10">About Game</h1>
                <p className="text-4xl font-bold">
                    In this game you play as an astronaut ad investigate the Mars. <br/>
                    Collect the ores and use them for activating oxygen machines. <br/>
                    After having enough oxygen level the planet will be totally colonized!
                </p>

                <h1 className="font-bold text-4xl pt-10">Want to know More?</h1>
                <h1 className="font-bold text-4xl">Click <Link href="/gamepage" className="font-bold text-4xl text-red-400">This!</Link></h1>
            </div>
        </>
    )
}
