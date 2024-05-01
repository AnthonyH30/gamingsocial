import React from 'react'

export default function LpFooter() {
  return (
    <footer className='bg-black text-xs flex flex-col md:flex-row items-center justify-center md:justify-between text-white min-h-20 border-t border-white gap-4 py-6 md:px-24'>
        <p>© 2024 All Rights Reserved</p>
        <ul className='flex flex-col md:flex-row gap-4'>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Sales and Refunds</li>
            <li>Legal</li>
            <li>Site Map</li>
        </ul>
    </footer>
  )
}
