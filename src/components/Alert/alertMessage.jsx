import React from 'react';

export default function AlertMessage({ status, message }) {

     return (
          <p data-message={message} className={`data-[message=removed]:bg-red-500/90 data-[message=added]:bg-green-500/90 data-[message=updated]:bg-yellow-500/90 ${status ? "opacity-100 visible" : "opacity-0 invisible"} fixed top-6 right-4 drop-shadow-lg text-white px-4 py-2 sl-animated-lg z-50`}>
               The product is {message}
          </p>
     )
}