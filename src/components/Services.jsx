import 'react-vertical-timeline-component/style.min.css';

export const servicesand = [
    {
        'service':'Wedding Photography',
        'points':'Pre-wedding Shoot,Haldi Shoot',
        'logo': 'https://dlmphotography.in/wp-content/uploads/2022/04/7F3A6066.jpg',
        'company':'vpn_studios'
    },
    {
      'service':'Out Door Photography',
      'points':'Outdoor Shooting,Song making',
      'logo': 'https://shotmemories.com/wp-content/uploads/2023/09/SMP02500-scaled.jpg',
      'company':'vpn_studios'
  },
    {
        'service':'Birthday Evnets',
        'points':'Outdoor Shooting,Baby Shoots,Cake Cutting',
        'logo': 'https://images.pexels.com/photos/15867013/pexels-photo-15867013/free-photo-of-cute-baby-girl-lying-on-blanket-indoors.jpeg?auto=compress&cs=tinysrgb&w=800',
        'company':'vpn_studios'
    },
    {
        'service':'Gift Items',
        'points':'Marraige Gift Items',
        'logo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51BKKz2SZrbzyDDQJ-YQLgQnhogUuqCfKow&s',
        'company':'vpn_studios'
    },
    {
        'service':'Photo Frames',
        'points':'Photo Frames of any size',
        'logo': 'https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/India%20LOB/Photo%20Frames/IN_Premium_Photo_frame_004',
        'company':'vpn_studios'
    },
    {
      'service':'LED Walls',
      'points':'LED walls for marraiges and other events',
      'logo': 'https://content.jdmagicbox.com/comp/karimnagar/dc/9999px878.x878.090730135257.k4i3dc/catalogue/shivani-led-walls-mancherial-chowrasta-karimnagar-photographers-zz6txg0k9l.jpg',
      'company':'vpn_studios'
  }
]
const Services = () => {
    return (
    <div className='experience bg-white w-screen text-white p-6' id='services'>
      <div className='px-2 sm:px-16'>
        <p className='font-light'>We are happy to serve</p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Our Services.</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 ">
          {servicesand.map((item) => (
            <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
              <a href="#">
                <img className="rounded-t-lg" src={item.logo} alt={item.title} />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.service}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.points}</p>
                
              </div>
            </div>
          ))}
      </div>



     

       {/* <VerticalTimeline className='mt-9'>
        {servicesand.map((service,ind) => (
          <VerticalTimelineElement
            className="relative vertical-timeline-element--work"
            contentStyle={{ background: "#4b5563", color: "#fff", }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={service.service}
            iconStyle={{ background: '#4b5563' }}
            icon={
              <a className='flex justify-center items-center w-full h-full' href="#" target='_blank'>
                <h1 className='text-white text-4xl'>{ind}</h1>
              </a>
            }
          >
            <div>
              <h3 className='text-white text-[24px] font-bold'>{service.service}</h3>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
              {service.points.map((point, index) => (
                <li
                  key={`experience-point-${index}`}
                  className='text-white text-[14px] pl-1 tracking-wider'
                >
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline> */}

    </div>
    )
}

export default Services;