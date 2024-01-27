import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import home from '../assets/home.jpg';
import wedIcon from '../assets/wedicon.ico'
export const servicesand = [
    {
        'service':'Wedding Photography',
        'points':['Outdoor Shooting','Pre-wedding Shoot','Haldi Shoot'],
        'logo': `${home}`,
        'company':'vpn_studios'
    },
    {
        'service':'Birthday Evnets',
        'points':['Outdoor Shooting','Baby Shoots','Cake Cutting'],
        'logo': 'https://assets.hackclub.com/icon-rounded.svg',
        'company':'vpn_studios'
    },
    {
        'service':'Gift Items',
        'points':['Marraige Gift Items','Cup printing','Tshirt Printing'],
        'logo': 'https://assets.hackclub.com/icon-rounded.svg',
        'company':'vpn_studios'
    },
    {
        'service':'Photo Albums',
        'points':['Photo Albums of any size','Back Light albums'],
        'logo': 'https://assets.hackclub.com/icon-rounded.svg',
        'company':'vpn_studios'
    }
]
const Services = () => {
    return (
    <div className='experience bg-black w-screen text-white px-4 py-16' id='services'>
      <div className='px-2 sm:px-16'>
        <p className='font-light'>We are happy to serve</p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Our Services.</h2>
      </div>
      <VerticalTimeline className='mt-9'>
        {servicesand.map((service) => (
          <VerticalTimelineElement
            className="relative vertical-timeline-element--work"
            contentStyle={{ background: "#00CED1", color: "#fff", }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={service.service}
            iconStyle={{ background: '#fff' }}
            icon={
              <a className='flex justify-center items-center w-full h-full' href="#" target='_blank'>
                <img
                  src={service.logo}
                  alt={service.company}
                  className='w-[60%] h-[60%] object-contain'
                />
              </a>
            }
          >
            <div>
              <h3 className='text-white text-[24px] font-bold'>{service.service}</h3>
              {/* <p
                className='text-secondary text-[16px] font-semibold'
                style={{ margin: 0 }}
              >
                {service.}
              </p> */}
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
              {service.points.map((point, index) => (
                <li
                  key={`experience-point-${index}`}
                  className='text-white-100 text-[14px] pl-1 tracking-wider'
                >
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
    )
}

export default Services;