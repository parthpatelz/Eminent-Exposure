import home from '../assets/home.jpg'

const Home = () => {
    return (
        <div className="relative flex items-center justify-center h-screen">
      <img
        className="object-cover w-full h-full"
        src={home}
        alt="Home Image"
      />
      <div className="absolute text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          Looking for a wedding Photographer
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          
        </p>
      </div>
    </div>
    )
}

export default Home