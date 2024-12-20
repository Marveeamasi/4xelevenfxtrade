import Link from 'next/link'
import React from 'react'
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='flex w-full flex-col'>
    <div className='flex items-center sm:items-start gap-5 max-sm:flex-col'>
       <div className='flex-[1] flex max-sm:flex-col-reverse max-sm:justify-center sm:items-start items-center p-4 sm:px-20 gap-4 sm:gap-10 mt-20'>
    <div className='sm:flex-[1] flex flex-col gap-4 max-sm:w-full items-start max-sm:items-center'>
      <h1 className='text-2xl'>Disclaimer</h1>
      <hr className='w-10 bg-col h-1'/>
      <Link href={'/'} className='sm:flex hidden gap-3 items-center'>
        <img src="logo.png" alt="logo" className='w-6 lg:w-8 h-auto rounded-full shadow-glow-mild' />
        <span className='text-2xlg font-[900] text-col'>4Elevenfxtrade</span>
      </Link>
      <p className='max-sm:text-center max-sm:my-5 font-extralight text-sm'>This website is not directed at any jurisdiction and is
         not intended for any use that would be contrary to local law or regulation.
      Risk Warning: Trading leveraged products such as Forex and CFDs may not be suitable for all 
      investors as they carry a high degree of risk to your investment. Before deciding to trade any such leveraged
       products you should carefully consider your 
      investment objectives, level of experience, and risk appetite, and if necessary seek independent advice to full
       understand the risk involved</p>
      
    </div>
  </div>
  <div className='flex-[1] flex max-sm:flex-col-reverse max-sm:justify-center sm:items-start items-center p-4 sm:px-20 gap-4 sm:gap-10 mt-20'>
    <div className='sm:flex-[1] flex flex-col gap-4 max-sm:w-full items-start max-sm:items-center'>
      <h1 className='text-2xl'>Useful Links</h1>
      <hr className='w-10 bg-col h-1'/>
      <a href="#about" className='text-sm font-extralight hover:font-bold'>About</a>
      <a href="#contact" className='text-sm font-extralight hover:font-bold'>Contact us</a>
      <a href="#plans" className='text-sm font-extralight hover:font-bold'>Plans</a>
      <Link href="/register" className='text-sm font-extralight hover:font-bold'>Create account</Link>
      <Link href="/login" className='text-sm font-extralight hover:font-bold'>Sign in</Link>
    </div>
  </div>
  <div className='flex-[1] flex max-sm:flex-col-reverse max-sm:justify-center sm:items-start items-center p-4 sm:px-20 gap-4 sm:gap-10 mt-20'>
    <div className='sm:flex-[1] flex flex-col gap-4 max-sm:w-full items-start max-sm:items-center'>
      <h1 className='text-2xl'>Socials</h1>
      <hr className='w-10 bg-col h-1'/>
      <div className='flex gap-5 items-center'>
      <!--a href="https://www.instagram.com/_4xeleventrades?igsh=eXowYXBza3c1Nmpi" target="_blank" className='text-2xl text-[#a2a1ab] hover:text-[#eee]'><FaInstagramSquare/></a-->
      <a href="https://api.whatsapp.com/send?phone=19367209438" target="_blank" className='text-2xl text-[#a2a1ab] hover:text-[#eee]'><FaWhatsappSquare/></a>
      <a href="https://www.facebook.com/share/r35f3RWicTbJcb8e/?mibextid=kFxxJD" className='text-2xl text-[#a2a1ab] hover:text-[#eee]'><FaFacebookSquare/></a>
      </div>
    </div>
  </div>
    </div>
    <div className='w-full flex sm:justify-between p-10 max-sm:flex-col-reverse max-sm:gap-5 max-sm:items-center'>
    <div className=' text-[11px] text-[#a2a1ab]'>© 2024 4Elevenfxtrade.com All Rights Reserved</div>
    <div className='flex items-center gap-1 text-[11px]'><a href="#" className='font-extralight hover:font-bold'>Terms & Condition</a> || <a href="" className='font-extralight hover:font-bold'>Privacy Policy</a></div>
    </div>
    </div>
  )
  <script>
  window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "wk6r3jm3",
    user_id: user.id, // IMPORTANT: Replace "user.id" with the variable you use to capture the user's ID
    name: user.name, // IMPORTANT: Replace "user.name" with the variable you use to capture the user's name
    email: user.email, // IMPORTANT: Replace "user.email" with the variable you use to capture the user's email address
    created_at: user.createdAt, // IMPORTANT: Replace "user.createdAt" with the variable you use to capture the user's sign-up date
  };
</script>


<script>
  // We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/wk6r3jm3'
  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/wk6r3jm3';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
</script>
}
