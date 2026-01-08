import React from 'react'

const Contact = () => {
  return (
    <div className="mb-14 bg-white p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Contact us</h1>
        
        <form className="">
          <textarea 
            className="w-full h-48 p-4 border border-gray-200 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message here..."
          />
          
          <div className="flex justify-end mt-6">
            <button 
              type="submit"
              className="bg-gradient-to-r from-[#0F4C81] to-[#00B4D8] text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-shadow"
            >
              Submit
            </button>
          </div>
        </form>
        
        <div className="text-left ">
          <h2 className="text-[90px] font-bold text-[#12121280] mb-2">Live</h2>
          <h2 className="text-[90px] -mt-16 font-bold text-[#12121280] ">it up!</h2>
          <p className="text-gray-500">
            Crafted with <span className="text-red-500">❤</span> in Kozhikode, India
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
