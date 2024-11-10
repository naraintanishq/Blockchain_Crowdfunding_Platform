import React from 'react'

const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donation"];
  const contactList = [
   { title : "support@whitecompany.com", url : "support@whitecompany.com"},
   { title : "info@whitecompany.com", url : "support@whitecompany.com"},
    {title : "contact us",  url : '/contect'},
  ]

  const usefullLink = [{title : "Home", url : '/'}, {title : "About", url : '/about'}, {title : "Comapany Bio", url : '/about'}];
  return (
    <footer className='text-center text-white backgroundMain lg:text-left ' >
      <div className='mx-6 py-10 text-center md:text-left '>
        <div className='grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
        
          <div className=''>
            <h6 className='mb-4 flex items-center justify-center font-semibold uppercase md:justify-start'>
              Proudcts
            </h6>
            {productList.map((el, i) => (
              <p className='mb-4' key={i+1}>
                <a href='#!'>
                  {el}
                </a>
              </p>
            ))}
          </div>
          <div className=''>
            <h6 className='mb-4 flex items-center justify-center font-semibold uppercase md:justify-start'>
              Useful Links
            </h6>
            {usefullLink.map((el, i) => (
              <p className='mb-4' key={i + 1}>
                <a href={el.url}>
                  {el.title}
                </a>
              </p>
            ))}
          </div>
          <div className=''>
            <h6 className='mb-4 flex items-center justify-center font-semibold uppercase md:justify-start'>
              Contact
            </h6>
            {contactList.map((el, i) => (
              <p className='mb-4' key={i + 1}>
                <a href={el.url}>
                  {el.title}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className='backgroundMain p-6 text-center'>
        <span>©️ 2024 Copyright: </span>
        <a className='font-semibold' 
           href='https://tailwind-elements.com/'>
            White Company
           </a>
      </div>
    </footer>
  )
}

export default Footer;