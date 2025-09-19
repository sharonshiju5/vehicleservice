import React from 'react'

interface AddressStepProps {
  onNext: () => void;
  onBack: () => void;
}

function AddressStep({ onNext, onBack }: AddressStepProps) {
  return (
    <>
      <h1 className='font-medium text-[16px] leading-[26px] tracking-[0.01px] pt-2'>Add Address</h1>
      
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-4 pb-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600">Address form will be implemented here</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={onBack}
          className="w-[30%] h-[42px] border border-[#7722FF] text-[#7722FF] rounded-xl font-medium text-sm transition-all duration-300 hover:bg-[#7722FF] hover:text-white"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="w-[70%] h-[42px] bg-[#7722FF] text-white rounded-xl font-medium text-sm transition-all duration-300 hover:bg-[#6611EE]"
        >
          Book Service
        </button>
      </div>
    </>
  )
}

export default AddressStep