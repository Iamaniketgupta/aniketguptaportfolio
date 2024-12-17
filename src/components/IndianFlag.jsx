import React from 'react'

export default function IndianFlag() {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 40"
    width="30"
    height="20"
  >
    <rect width="60" height="13.33" fill="#FF9933" />
    <rect y="13.33" width="60" height="13.33" fill="#FFFFFF" />
    <rect y="26.67" width="60" height="13.33" fill="#138808" />
    <circle cx="30" cy="20" r="4.5" fill="none" stroke="#000088" strokeWidth="1.5" />
    <g fill="none" stroke="#000088" strokeWidth="0.5">
      <path d="M30 15.5V24.5M34.5 20H25.5M32.5 16.5L27.5 23.5M27.5 16.5L32.5 23.5" />
      <path d="M31.87 15.87L28.13 24.13M28.13 15.87L31.87 24.13" />
      <path d="M33.75 16.75L26.25 23.25M26.25 16.75L33.75 23.25" />
    </g>
  </svg>
  )
}
