import React from 'react';
import clsx from 'clsx';

function List({ children, ...props }) {
  return <li className={clsx(['text-base lg:text-xl mb-3 font-body  list-inside list-disc'])}>{children}</li>;
}

export default List;
