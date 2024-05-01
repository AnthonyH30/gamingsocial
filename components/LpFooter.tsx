import React from 'react'

export default function LpFooter() {
  return (
    <footer className='bg-black text-xs flex flex-col md:flex-row items-center justify-center md:justify-between text-white min-h-20 border-t border-white gap-4 py-6 md:px-24'>
        <p className='hover:text-red-600 ease-in duration-200 cursor-pointer'>© 2024 All Rights Reserved</p>
        <ul className='flex flex-col md:flex-row gap-4'>
            <li className='hover:text-red-600 ease-in duration-200 cursor-pointer'>Privacy Policy</li>
            <li className='hover:text-red-600 ease-in duration-200 cursor-pointer'>Terms of Use</li>
            <li className='hover:text-red-600 ease-in duration-200 cursor-pointer'>Sales and Refunds</li>
            <li className='hover:text-red-600 ease-in duration-200 cursor-pointer'>Legal</li>
            <li className='hover:text-red-600 ease-in duration-200 cursor-pointer'>Site Map</li>
        </ul>
    </footer>
  )
}
