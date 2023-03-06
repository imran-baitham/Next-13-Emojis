/* eslint-disable @next/next/no-img-element */
import React from 'react'

import bgIMG from '../../../public/assets/bg.png'
import profileIMG from '../../../public/assets/imran.jpeg'

const Hero = () => {
  return (
    <>
      <div className="mt-20 mb-10">
        <div>
          <img
            className="h-32 w-full object-cover lg:h-48"
            src={profile.coverImageUrl.src}
            alt=""
          />
        </div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <img
                className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                src={profile.imageUrl.src}
                alt=""
              />
            </div>
            <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="mt-6 min-w-0 flex-1 2xl:block">
                <h1 className="truncate text-2xl font-bold text-gray-900 dark:text-white">
                  {profile.name}
                </h1>
                <p className="text-gray-500 text-sm">{profile.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero

const profile = {
  name: 'Imran Baitham',
  bio: 'Welcome to my emojidb. 😍',
  imageUrl: profileIMG,
  coverImageUrl: bgIMG,
}
