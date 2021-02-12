import React from 'react';
import clsx from 'clsx';

function UnorderList({ children }) {
  return <ul className={clsx(['mb-10'])}>{children}</ul>;
}

export default UnorderList;
