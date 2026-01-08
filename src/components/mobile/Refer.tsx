import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function Refer() {
  return (
    <div className="bg-[#FF5C0208] border border-[#FF5C02] mt-10 pb-2 rounded-sm relative overflow-hidden">
        <div className="flex flex-col gap-2 p-3">
          <p className="text-[#3D155F] font-bold text-[24px]">Refer & Earn 100</p>
          <p className="text-black w-56 text-sm">
            Rewards Await – Start Referring Now!
          </p>
          <Link href="https://www.seclob.com/referral">
            <button className="w-24 py-1.5 text-xs bg-gradient-to-r from-[#FF0004] to-[#FF5C02] text-white rounded-lg">
              Refer now
            </button>
          </Link>
        </div>
        <Image
          src="/assets/landing/gift3d.webp"
          width={96}
          height={96}
          className="w-30 absolute bottom-0 right-0"
          alt="Referral Illustration"
        />
      </div>
  )
}

export default Refer