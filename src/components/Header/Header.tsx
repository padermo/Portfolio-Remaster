'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import Social from '../Social/Social';

function Header() {
  const translate = useTranslations('Heading');

  const name: string = translate('title.name');
  let arrayName: string[] = name.split('');

  return (
    <header className='header'>
      <div className='header_left'>
        <div className='header_texts'>
          <div className='header_title'>
            <h2>{translate('title.text')}</h2>
            <h1 className='header_name'>
              {arrayName &&
                arrayName.map((el, i) => (
                  <span key={i} className={`header_name-${i}`}>
                    {el}
                  </span>
                ))}
            </h1>
          </div>
          <h2 className='header_subtitle'>
            <span>{translate('subtitle.text')}</span>
            <span className='header_subtitle-web'>{translate('subtitle.web')}</span>
            <span>{translate('subtitle.connector')}</span>
            <span className='header_subtitle-mobile'>{translate('subtitle.mobile')}</span>
          </h2>
          <Social/>
        </div>
      </div>
    </header>
  );
}

export default Header;
