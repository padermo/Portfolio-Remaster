import React from 'react'
import Image from 'next/image'
import email from '@/assets/email.svg'
import whatsapp from '@/assets/whatsapp.svg'
import github from '@/assets/github.svg'
import linkedin from '@/assets/linkedin.svg'

type SocialData = {
  name: string,
  link: string,
  icon: string
}

function Social() {

  const data: SocialData[] = [{name:'GitHub', link:'https://github.com/padermo', icon: github}, {name:'LinkedIn', link:'https://www.linkedin.com/in/fabioestevezeh', icon: linkedin}, {name:'Email', link:'mailto:fabioaeh96@gmail.com', icon: email}, {name:'WhatsApp', link:'https://wa.link/8v2vng', icon:whatsapp}]

  return (
    <div className='social'>
      {
        data.map((el, i) => (
          <a href={el.link} key={i} className={`social_link social_link-${el.name.toLowerCase()}`}>
            <Image src={el.icon} alt={`icon ${el.name}`} className='social_icon'/>
          </a>
        ))
      }
    </div>
  )
}

export default Social