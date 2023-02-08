import React from 'react'

const contact = () => {
    return (
        <>
            <div className=" pb-10 ">
                <div className="wrapper">
                    <div className='line_container py-10'>
                        <div className='line'>
                        </div>
                    </div>
                    <h1 className='text-center text-2xl sm:text-4xl font-semibold mb-10'>
                        SAY HELLO!
                    </h1>
                    <p className='text-center ' >We would love to hear from you. Tell us how we can help you and we will revert to you within next 24 hours with an
                        appropriate cost and timeline to execute your project.</p>

                    <div className="grid_contact mt-10">

                        <div>
                            <form action="">
                                <input className='mr-5 mb-5  w-full sm:w-[40%] text-[#c1c1c1] p-[8px] border rounded-md border-solid ' type="text" placeholder='Name*' />
                                <input className=' w-full sm:w-[40%] text-[#c1c1c1] p-[8px] border rounded-md border-solid ' type="text" placeholder='Email Address*' /> <br />
                                <input className=' mt-5 sm:mt-0 w-full sm:w-[40%] text-[#c1c1c1] p-[8px] border rounded-md border-solid ' type="text" placeholder='Phone Number*' />
                                <select className=' mt-5 sm:mt-0  sm:ml-5 border rounded-md border-solid  p-[12px] w-full sm:w-[40%]' name="" id="">
                                    
                                    <option value="">Search Engine</option>
                                    <option value="">From Friend/Colleague</option>
                                    <option value="">Print Media</option>
                                    <option value="">Social Media</option>
                                    <option value="">American Design Awards</option>
                                    <option value="">Behance</option>
                                    <option value="">Other</option>
                                </select>
                                {/* dropdown */}

                                <div className='flex justify-between max-w-[520px] mt-5 '>
                                <p className='mb-2 mt-7 '>Cooomments / Feedback / Enquiry</p>
                                <img className='h-[70px] w-[100px] sm:w-[100px]  sm:mb-[-20px] z-50' src="/text-area-bg (1).png" alt="" />

                                </div>
                                
                                <textarea className='border rounded-md border-solid border-[#2c353d]  w-full sm:w-[84%]' name="" id="" cols="30" rows="10"></textarea> <br />

                                <input className='mt-5 w-[60%] text-[#c1c1c1] p-[8px] border rounded-md border-solid border-[#2c353d]' type="text" placeholder='Security text*' /> <br />

                                <button className='bg-[#f55950] border rounded-full border-solid border-[#f55950] mt-10 mb-10 sm:mb-0  px-20 py-2' >Submit</button>
                            </form>
                        </div>
                        <div>
                            
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14023.93747650242!2d77.20204!3d28.510118000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1e37290a49d%3A0x9842e5d808e820bb!2sRadical%20Reflex!5e0!3m2!1sen!2sus!4v1675233272963!5m2!1sen!2sus" width="600" height="333"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <div className="grid_contact1 mt-10">
                                <div>
                                    <h1 className='text-2xl ' >Radical Reflex</h1>
                                    <p className='text-[#f55950] py-5' > 3B, Top Floor, Kehar Singh Estate Saidulajab, Saket, New Delhi-110068 India</p>
                                </div>
                                <div className='flex gap-[20px]'>
                                    <a href=""><img className='max-w-[50px] max-h-[50px]' src="/icons8-facebook-50.png" alt="" /></a>
                                    <a href=""> <img className='max-w-[50px] max-h-[50px]' src="/icons8-gmail-logo-50.png" alt="" /></a>
                                    <a href=""> <img className='max-w-[50px] max-h-[50px]' src="/icons8-linkedin-circled-50.png" alt="" /></a> 
                                   <a href=""><img className='max-w-[50px] max-h-[50px]' src="/icons8-twitter-50.png" alt="" /></a>
                                   
                                    
                                </div>

                                <div class="grid_contact_last  sm:max-w-[200px] mt-5">
                                <div><a className='border-r-2 pr-5 border-solid border-[#f55950]' href="">08929477333</a></div>
                                <div><a className='border-r-2 pr-5 border-solid border-[#f55950]' href="">09818488606</a></div>
                                <div><a className='border-l-2 pl-5 border-solid border-[#f55950]' href="">pankaj@radicalreflex.com
                                </a></div>

                            </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default contact