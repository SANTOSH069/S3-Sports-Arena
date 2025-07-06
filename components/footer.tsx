import React from 'react'


const footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 border-t border-blue-900 mt-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-10 md:flex-row md:justify-between md:gap-0">
        <div className="flex-1 mb-8 md:mb-0 min-w-[220px]">
          <h6 className="text-xl font-bold text-white mb-4">Services</h6>
          <ul className="space-y-2">
            <li><a className="text-blue-100 hover:text-white transition" href="#">Branding</a></li>
            <li><a className="text-blue-100 hover:text-white transition" href="#">Design</a></li>
            <li><a className="text-blue-100 hover:text-white transition" href="#">Marketing</a></li>
            <li><a className="text-blue-100 hover:text-white transition" href="#">Advertisement</a></li>
          </ul>
        </div>
        <div className="flex-1 mb-8 md:mb-0 min-w-[220px]">
          <h6 className="text-xl font-bold text-white mb-4">Company</h6>
          <ul className="space-y-2">
            <li><a className="text-blue-100 hover:text-white transition" href="#">About us</a></li>
            <li><a className="text-blue-100 hover:text-white transition" href="#">Contact</a></li>
            <li><a className="text-blue-100 hover:text-white transition" href="#">Jobs</a></li>
            <li><a className="text-blue-100 hover:text-white transition" href="#">Press kit</a></li>
          </ul>
        </div>
        <div className="flex-1 mb-8 md:mb-0 min-w-[220px]">
          <h6 className="text-xl font-bold text-white mb-4">Legal</h6>
          <ul className="space-y-2">
            <li><a className="text-blue-100 hover:text-white transition" href="#">Terms of use</a></li>
            <li><a className="text-blue-100 hover:text-white transition" href="#">Privacy policy</a></li>
            <li><a className="text-blue-100 hover:text-white transition" href="#">Cookie policy</a></li>
          </ul>
        </div>
        <div className="flex-1 min-w-[220px]">
          <h6 className="text-xl font-bold text-white mb-4">Newsletter</h6>
          <form className="flex flex-col gap-2 w-full">
            <label className="text-blue-100 mb-1">Enter your email address</label>
            <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="username@site.com"
                className="flex-1 rounded-lg sm:rounded-l-lg sm:rounded-r-none border border-blue-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-blue-800 text-white placeholder:text-blue-200"
              />
              <button type="submit" className="rounded-lg sm:rounded-r-lg sm:rounded-l-none bg-blue-600 px-5 py-2 text-white font-semibold hover:bg-blue-500 transition mt-2 sm:mt-0">Book</button>
            </div>
          </form>
        </div>
      </div>
      <div className="border-t border-blue-800 py-4 text-center text-blue-200 text-sm bg-blue-900/80 mt-4">
        © {new Date().getFullYear()} S3 Sports Arena. All rights reserved.
      </div>
    </footer>
  );
}

export default footer
