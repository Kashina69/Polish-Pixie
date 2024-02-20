import Image from 'next/image'
import { IoChevronForwardCircleOutline } from "react-icons/io5";

function ServiceComponet({ serviceName, time, price, imgSrc }) {
  return (
    <div className="flex w-full group">
      <div className='m-3'>
        <Image
          src={imgSrc}
          width={50}
          height={50}
          alt={serviceName + " image"}
          className='rounded-full' />

      </div>
      <div className=' flex justify-between bg w-full'>
        <div>
          <h3 className='ml-2 mt-4'>{serviceName}</h3>
          <p className='ml-3 text-sm'> {time} mins - ₹{price}
          </p>
        </div>
        <IoChevronForwardCircleOutline className='mr-3 mt-7' />
      </div>
    </div>
  )
}

export default ServiceComponet