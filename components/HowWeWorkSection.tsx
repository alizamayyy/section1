import React from 'react'

interface HowWeWorkSectionProps {
  headerImage: string;
  headerImage1: string;
}
const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({
  headerImage,
  headerImage1,
}) => {
  return (
    <div className='flex flex-row '>
      <div className='w-[50%]'>
        <div className="text-left text-xs p-8">
          How we work
          <h1 className='text-2xl font-bold mb-10'>We exist for non-profits, social enterprises, activists. We exist for
          non-profits, social enterprises, activists.</h1>
          <div className='flex flex-row items-center mb-2'>
          <div className='bg-blue-100 w-min p-2 rounded-[30px] mr-1'>
            01
          </div>
          <h3 className='text-lg font-bold'>Start a fundraiser</h3>
          </div>
          <p className='mb-4 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare convallis est ac venenatis. Ut non dui sit amet erat egestas viverra. Morbi sed feugiat mauris.</p>
          <div className='flex flex-row items-center mb-2'>
          <div className='bg-blue-100 w-min p-2 rounded-[30px] mr-1'>
            01
          </div>
          <h3 className='text-lg font-bold'>Raise money from different sources</h3>
          </div>
          <p className='mb-4 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare convallis est ac venenatis. Ut non dui sit amet erat egestas viverra. Morbi sed feugiat mauris.</p>
          <div className='flex flex-row items-center mb-2'>
          <div className='bg-blue-100 w-min p-2 rounded-[30px] mr-1'>
            01
          </div>
          <h3 className='text-lg font-bold'>Gather all the money and give relief for people in need</h3>
          </div>
          <p className='mb-4 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare convallis est ac venenatis. Ut non dui sit amet erat egestas viverra. Morbi sed feugiat mauris.</p>
          <div className='flex flex-row items-center mb-2'>
          <div className='bg-blue-100 w-min p-2 rounded-[30px] mr-1'>
            01
          </div>
          <h3 className='text-lg font-bold'>Donate</h3>
          </div>
          <p className='mb-4 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare convallis est ac venenatis. Ut non dui sit amet erat egestas viverra. Morbi sed feugiat mauris.</p>
        </div>
      </div>
      <div className='w-[50%] relative'>
      <img
            src={headerImage}
            alt="Header Image"
            className="w-[340px] h-[350px] rounded-[17px] right-0 absolute"
          />
      <img
            src={headerImage1}
            alt="Header Image"
            className="w-[340px] h-[300px] rounded-[17px] bottom-20 left-20 absolute"
          />
      </div>
    </div>
  )
}

export default HowWeWorkSection
