'use client';

import React from 'react';
import TextType from './TextType/TextType';

export default function HeroTyping() {
  return (
    <TextType
      text={[
        'Strategic Focus',
        'Student Fund',
        'Quant Multi-Asset',
        'Multi-Asset Strategy',
        'USYD FXIA',
        'Syndeys F.?',
        '#ALPHAONLY',
        'Alpha Generators',
        'highalphalowbeta'
      ]}
      typingSpeed={70}
      deletingSpeed={70}
      pauseDuration={3500}
      initialDelay={300}
      loop
      showCursor
      cursorCharacter="_"
      cursorBlinkDuration={0.5}
      style={{ display: 'inline' }}
    />
  );
}
