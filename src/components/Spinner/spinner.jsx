import React from 'react';
import './spinner.css'

/**
 * @param {number} h e.g: Height
 * @param {number} w e.g: Width
 * @returns 
 */

export default function Spinner({ h = 25, w = 25 }) {
     return (
          <svg className="spinner stroke-red-500" viewBox='0 0 50 50' style={{ height: h, width: w }}>
               <circle
                    className='path'
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="5"
               >
               </circle>
          </svg>
     );
};