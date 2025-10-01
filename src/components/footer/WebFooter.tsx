'use client'

import Link from 'next/link'
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa6'
import { FiGlobe } from 'react-icons/fi'

export default function WebFooter() {
  return (
    <footer className="bottom-0 left-0 w-full bg-purple-900 text-white">
      <div className="mx-auto max-w-screen-xl py-3 px-6 lg:px-12 md:px-6">
        <div className="flex justify-between lg:gap-8 md:gap-3">
          <div className="col-span-1">
            <a
              href="/"
              className="flex gap-3 lg:flex-row flex-col text-4xl items-center justify-center"
            >
              <div className="flex items-center gap-3">
                <img
                  src="/assets/logo/Layer_1 (7).png"
                  alt="Seclob Logo"
                  width={140}
                  height={40}
                  className="h-16 w-auto"
                />
              </div>
              <p className="font-bold">Seclob</p>
            </a>
          </div>
          <div className="col-span-1">
            <h3 className="font-medium text-base mb-2">Company</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/about" className="cursor-not-allowed pointer-events-none ">About</a>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <a href="/careers">Careers</a>
                  <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded">
                    NEW
                  </span>
                </div>
              </li>
              {/* <li>
                <a href="/cookies">Cookies</a>
              </li>
              <li>
                <a href="/security">Security</a>
              </li> */}
              {/* <li>
                <a href="/privacy">Privacy</a>
              </li> */}
              {/* <li>
                <a href="/abuse">Abuse</a>
              </li>
              <li>
                <a href="/charges">Charges</a>
              </li> */}
              {/* <li>
                <a href="/terms">Terms</a>
              </li> */}
            </ul>
          </div>

          {/* Product Section */}
          <div className="col-span-1">
            <h3 className="font-medium text-base mb-2">Product</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/" className="">Service</a>
              </li>
              <li>
                <a href="https://www.seclob.com/e-card">Ecard</a>
              </li>
              {/* <li>
                <a href="/awards">Deal</a>
              </li>
              <li>
                <a href="/agencies">Secmart</a>
              </li>
              <li>
                <a href="/startups">News</a>
              </li>
              <li>
                <a href="/freelancers">Jobportal</a>
              </li> */}
              {/* <li>
                <a href="/business">Delivery</a>
              </li>
              <li>
                <a href="/pricing">Gocab</a>
              </li> */}
            </ul>
          </div>

          {/* Resources Section */}
          <div className="col-span-1">
            <h3 className="font-medium text-base mb-2">Resources</h3>
            <ul className="space-y-1 text-sm">
              {/* <li>
                <a href="/desktop-apps">Desktop Apps</a>
              </li> */}
              {/* <li>
                <a href="/partners">Partners</a>
              </li> */}
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.seclob.seclob_reseller_app" className="cursor-pointer ">Seclob Reseller</a>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.seclob_partner_app" className="cursor-pointer">Seclob Partner</a>
              </li>
              {/* <li>
                <a href="/helpful-tips" className="cursor-not-allowed pointer-events-none ">Helpful Tips</a>
              </li> */}
            </ul>
          </div>

          {/* Support & Social Section */}
          <div className="col-span-1">
            <div className="mb-4">
              <h3 className="font-medium text-base mb-2">Support</h3>
              <ul className="space-y-1 text-sm">
                {/* <li>
                  <a href="/updates" className="cursor-not-allowed pointer-events-none ">Updates</a>
                </li>
                <li>
                  <a href="/hype-feed" className="cursor-not-allowed pointer-events-none ">Hype Feed</a>
                </li>
                <li>
                  <a href="/community" className="cursor-not-allowed pointer-events-none ">Community</a>
                </li> */}
                <li>
                  <Link href="https://www.seclob.com/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          {/*cunsumer links  */}
          <div>
            <h3 className="font-medium text-base mb-2">Consumer Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href='https://www.seclob.com/privacy-policy'>Privacy Policy</Link>
              </li>
              <li>
                <Link href='https://www.seclob.com/cancellation-return'>Cancellation and Return</Link>
              </li>
              <li>
                <Link href='https://www.seclob.com/terms-conditions'>Terms and Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex space-x-4 mb-3 md:mb-0">
            <a href="https://youtube.com/@seclob" aria-label="YouTube">
              <BsYoutube className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/seclob_official" aria-label="Instagram">
              <BsInstagram className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/share/1B3omMSgj1/" aria-label="Facebook">
              <FaFacebook className="h-5 w-5" />
            </a>
            <a href="https://x.com/SeclobTech" aria-label="Twitter">
              <BsTwitter className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/seclobtechnologies" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a href="https://www.seclobtechnologies.com" aria-label="Website" target="_blank" rel="noopener noreferrer">
              <FiGlobe className="h-5 w-5" />
            </a>
          </div>

          <div>
            <h3 className="font-medium text-base mb-2">Get the app</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <a href="https://play.google.com/store/apps/details?id=com.seclob.seclob_reseller_app" className="inline-block">
                <img
                  src="/assets/logo/googleplay.webp"
                  alt="Download on App Store"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </a>
              <a href="https://apps.apple.com/in/app/seclob-reseller/id6746757963" className="inline-block">
                <img
                  src="/assets/logo/Group (2).webp"
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
          
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-purple-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Seclob Technologies Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}