import ServicesComponet from '@/Components/Services/ServiceComponet'
import { FaMapLocation } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import Image from 'next/image'


import acrylic from "../../../public/images/acrylic_extensions.jpeg"
import extension from '../../../public/images/extension_removal.jpeg'
import feet from '../../../public/images/feet_power_polish.jpeg'
import gel from '../../../public/images/gel_extensions.jpeg'
import overlay from '../../../public/images/overlay_gel_acrylic.jpeg'
import permanent from '../../../public/images/permanent_extensions_refill.jpeg'
import power from '../../../public/images/power_polish.jpeg'
import temporaryextensions from '../../../public/images/temporaryextensions.ico'


const availableServices = [
  ["Power Polish", 150, 700, power],
  ["Gel Extensions", 180, 1300, gel],
  ["Acrylic Extensions", 180, 1400, acrylic],
  ["Overlay Gel & Acrylic", 150, 800, overlay],
  ["Permanent Extensions Refill", 150, 950, permanent],
  ["Temporary Extensions", 150, 800, temporaryextensions],
  ["Extension Removal", 90, 650, extension],
  ["Feet Power Polish", 90, 350, feet]
];

let morningTiming = "10:30";
let eveningTiming = "10:30";


function ServicesSection() {
  return (
    <div id=" servicesSection" className='sm:w-1/4'>
      <div>
        <h2 className='font-medium text-xl mb-6 ml-2 mt-10'>Services Available</h2>
      </div>
      <div id="servicesOptions">
        {availableServices.map((service, index) => (
          <ServicesComponet
            key={index}
            serviceName={service[0]}
            time={service[1]}
            price={service[2]}
            imgSrc={service[3].src}
          />

        ))}
      </div>


      <footer>
        <div id="Contact info">
          <div>
            <a href="https://www.google.com/maps/search/?api=1&query=4064%20Second%20Floor%20Sector%2046D%2BChandigarh%2BChandigarh%2B160047&query=-8.5036172,115.2547038"><FaMapLocation />4064 Second Floor Sector 46D, Chandigarh, Chandigarh, 160047</a>
          </div>
          <div><a href="tel:+91 81969 55555"><IoIosCall />+91 81969 55555</a></div>
          <div><a href="mailto:vanshitakaur809@gmail.com"><CgMail />Email</a></div>
        </div>
        <div>
          <h1>Business hours</h1>
          <p>Monday - Saturday {morningTiming}am - {eveningTiming}pm </p>
        </div>
      </footer>
    </div>
  )
}

export default ServicesSection