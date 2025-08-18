import Link from 'next/link'
import React from 'react'

function Refer() {
  return (
    <div className="bg-[#eae1fd] border border-[#782FF8] mt-10 rounded-xl relative overflow-hidden">
        <div className="flex flex-col gap-2 p-3">
          <p className="text-[#782FF8] font-bold text-base">Refer & Earn 100</p>
          <p className="text-black w-56 text-sm">
            Rewards Await – Start Referring Now!
          </p>
          <Link href="/referral">
            <button className="w-24 py-1.5 text-xs bg-[#782FF8] text-white rounded-lg">
              Refer now
            </button>
          </Link>
        </div>
        <img
          src="/assets/landing/gift3d.webp"
          className="w-24 absolute -bottom-8 -right-3"
          alt="Referral Illustration"
        />
      </div>
  )
}

export default Refer