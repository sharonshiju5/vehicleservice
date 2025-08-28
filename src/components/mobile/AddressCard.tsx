import React from "react";
import { FaHome } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

const AddressCard: React.FC = () => {
  return (
    <div className="w-[90%] mx-auto border rounded-2xl p-4 shadow-sm bg-white flex flex-col gap-2 relative border-gray-200">
      {/* Name & Home Tag */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="font-medium text-gray-800">Nandhan ks</h2>
          <span className="flex items-center gap-1 text-purple-600 text-xs border border-purple-400 px-2 py-0.5 rounded-full">
            <FaHome size={12} />
            Home
          </span>
        </div>

        {/* Edit Icon */}
        <button className="text-purple-500 hover:text-purple-700 transition">
          <FiEdit2 size={18} />
        </button>
      </div>

      {/* Email */}
      <p className="text-sm text-gray-500">nandhanks99@gmail.com</p>

      {/* Phone */}
      <p className="text-sm text-gray-500">+91 9867453635</p>

      {/* Address */}
      <p className="text-sm text-gray-500">
        Kerala, Thrissur, Kunnamkulam, Ottapalam
      </p>
    </div>
  );
};

export default AddressCard;
