import React from 'react';
import Spinner from './spinner';

export default function LoadingMessage({ text }) {
    return (
        <div className='flex justify-center items-center '>
            <Spinner h={35} w={35} />
            <p className='ml-4 text-xl'> {text} Loading.... </p>
        </div>
    );
};
