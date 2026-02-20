'use client';

import React from 'react';
import TextType from './TextType/TextType';

export default function HeroTyping() {
  return (
    <TextType
      text={[
        'Strategy Focus',
        'Student Fund',
        'Quant Multi-Asset',
        'Multi-Asset Strategy',
        'USYD FXIA',
        'SF',
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
