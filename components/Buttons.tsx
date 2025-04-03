import React from 'react'


interface buttonProps{
	className: string;
	label: string;
}

const Buttons = ({ className,label}:buttonProps) => {
  return (
    <button
      className={`${className} bg-white rounded-full py-2 px-5 `}>
      {label}
    </button>
  );
}

export default Buttons

