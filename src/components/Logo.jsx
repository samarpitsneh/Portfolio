import React from 'react'

const Logo = ({isLoading}) => {
  return (
    <a href="#home">
        <p className={`w-full bg-transparent p-5 font-semibold ${isLoading ? "text-white":"text-dark_primary"}  font-Paprika`}>
          
        &#123; Sneh &#125;
          
        </p>
    </a>
  )
}

export default Logo