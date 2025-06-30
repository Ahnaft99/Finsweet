import React, { useState } from 'react'
import Container from './Container'
import { CiCirclePlus } from "react-icons/ci"

const Question = () => {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)

  return (
    <div className="py-[50px] bg-[#F9FAFB]">
      <Container className="flex flex-col lg:flex-row gap-10 px-4">
        
        <div className="w-full lg:w-4/12">
          <h1 className="text-[28px] lg:text-[36px] font-semibold text-[#282938] mb-4">
            Frequently asked questions
          </h1>
          <a className="text-[16px] text-[#2405F2] underline" href="#">
            Contact us for more info
          </a>
        </div>

        <div className="w-full lg:w-8/12">
          <ul className="space-y-6">

            <li className="border-b pb-4 cursor-pointer" onClick={() => setShow1(!show1)}>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <span className="text-[#2405F2] font-bold">01</span>
                  <h2 className="text-[18px] font-medium text-[#282938]">How much time does it take?</h2>
                </div>
                <CiCirclePlus className="text-[24px]" />
              </div>
              {show1 && (
                <p className="mt-2 text-[#555] text-[15px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              )}
            </li>

            <li className="border-b pb-4 cursor-pointer" onClick={() => setShow2(!show2)}>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <span className="text-[#2405F2] font-bold">02</span>
                  <h2 className="text-[18px] font-medium text-[#282938]">What is your class naming convention?</h2>
                </div>
                <CiCirclePlus className="text-[24px]" />
              </div>
              {show2 && (
                <p className="mt-2 text-[#555] text-[15px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              )}
            </li>

            <li className="border-b pb-4 cursor-pointer" onClick={() => setShow3(!show3)}>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <span className="text-[#2405F2] font-bold">03</span>
                  <h2 className="text-[18px] font-medium text-[#282938]">How do you communicate?</h2>
                </div>
                <CiCirclePlus className="text-[24px]" />
              </div>
              {show3 && (
                <p className="mt-2 text-[#555] text-[15px]">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              )}
            </li>

            <li className="border-b pb-4 cursor-pointer" onClick={() => setShow4(!show4)}>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <span className="text-[#2405F2] font-bold">04</span>
                  <h2 className="text-[18px] font-medium text-[#282938]">I have a bigger project. Can you handle it?</h2>
                </div>
                <CiCirclePlus className="text-[24px]" />
              </div>
              {show4 && (
                <p className="mt-2 text-[#555] text-[15px]">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              )}
            </li>

            <li className="border-b pb-4 cursor-pointer" onClick={() => setShow5(!show5)}>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <span className="text-[#2405F2] font-bold">05</span>
                  <h2 className="text-[18px] font-medium text-[#282938]">What is your class naming convention?</h2>
                </div>
                <CiCirclePlus className="text-[24px]" />
              </div>
              {show5 && (
                <p className="mt-2 text-[#555] text-[15px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              )}
            </li>

          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Question
