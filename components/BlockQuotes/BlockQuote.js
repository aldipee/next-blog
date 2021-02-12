import React from 'react';
import clsx from 'clsx';

function BlockQuote({ children, ...props }) {
  return (
    <blockquote
      className={clsx([
        'relative p-3 text-base mb-3 lg:text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote',
      ])}
    >
      {children}
    </blockquote>
  );
}

export default BlockQuote;
