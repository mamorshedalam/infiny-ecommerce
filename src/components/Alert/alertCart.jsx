import React from 'react';

export default function AlertCart({ bg, show, children }) {

     return (
          <p data-bg={bg} className={`data-[bg=red]:bg-red-500/90 data-[bg=green]:bg-green-500/90 ${show ? "opacity-100 visible" : "opacity-0 invisible"} fixed top-6 right-4 drop-shadow-xl text-white px-4 py-2 sl-animated-xl`}>
               The product is {bg == "red" ? "Removed" : "Added"}
          </p>
     )
}