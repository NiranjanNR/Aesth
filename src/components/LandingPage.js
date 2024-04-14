import React from 'react'
import first from '../assets/first.png';
import second from '../assets/second.png';
import { Parallax } from 'react-scroll-parallax';

const LandingPage = () => {
    return (
        <div>
            <div className='h-[93vh] w-[100vw] bg-[#f7ede4b3] flex items-end'>
                <div className=''>
                    <div className='text-[2.3em] ml-32 font-semibold w-[600px] mb-2'>
                        <div className='mb-[-10px]'>CONNECTING PEOPLE</div>
                        <div>THROUGH INNOVATION</div>
                    </div>
                    <div className='mb-14 ml-32 w-[900px] text-[1.4em]'>
                        AESTHETIX IS PASSIONATE ABOUT DELIVERING COLLABORATIVE AUDIOVISUAL
                        SOLUTIONS TO ENHANCE THE WAY WE WORK, LEARN, AND LIVE.
                    </div>
                </div>
            </div>
            <div>
                <div className='h-[70vh] w-[100vw] flex justify-center items-center'>
                    <div className='flex items-center gap-10'>
                        <Parallax translateX={['-10px', '20px']} opacity={[0.2, 10]} className=''>
                            <div className='relative mr-12'>
                                <div className='bg-[#d49bd3b3] w-[650px] h-[400px] z-10 absolute'></div>
                                <img className='w-[530px] relative z-20 top-[-20px] left-[50px]' src={first} alt="first" />
                            </div>
                        </Parallax>
                        <Parallax translateX={['20px', '-10px']} opacity={[0.2, 10]}>
                            <div className='ml-32 font-semibold w-[630px] mb-2'>
                                <div className='text-[2em] mb-[0px] text-[#af4bac]'>IMPACTFUL AV INTEGRATION</div>
                                <div className='text-[1.4em] mb-[5px] text-[#761f73]'>Creating an Unparalleled Audiovisual Experience</div>
                                <div className='text-[1.2em] font-[400] text-slate-800/75'>Aesthetix creates reliable, scalable, and serviceable AV solutions that enable organizations to collaborate, create, and share ideas through state-of-the-art audiovisual and unified communication technologies.</div>
                            </div>
                        </Parallax>
                    </div>
                </div>
            </div>
            <div>
                <div className='h-[70vh] bg-[#f7ede470] w-[100vw] flex justify-center items-center mb-32'>
                    <div className='flex items-center gap-10'>
                        <Parallax translateX={['-10px', '10px']} opacity={[0.2, 10]} className=''>
                            <div className='font-semibold w-[630px] ml-[-80px] mb-2 mr-9'>
                                <div className='text-[2em] mb-[0px] text-[#af4bac]'>AV PROFESSIONAL SERVICES</div>
                                <div className='text-[1.4em] mb-[5px] text-[#761f73]'>Delivering Design, Build, and Service Excellence</div>
                                <div className='text-[1.2em] font-[400] text-slate-800/75'>With global reach, Aesthetix creates extraordinary client experiences from strategic planning and system design through deployment, training, managed services, and support. Our dedicated team comprises highly trained designers, engineers, technicians, and client services professionals who care.</div>
                            </div>
                        </Parallax>
                        <Parallax translateX={['10px', '-10px']} opacity={[0.2, 10]}>
                            <div className='relative'>
                                <div className='bg-[#db9ddab3] w-[650px] h-[400px] z-10 absolute'></div>
                                <img className='w-[530px] relative z-20 top-[-20px] left-[75px]' src={second} alt="first" />
                            </div>
                        </Parallax>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LandingPage