
const Navbar = () => {
     return (
        <nav class=" p-4 text-black fixed w-full z-10 top-0" style={{ cursor: 'default' }}>
            <div class="mx-auto text-center flex w-5/6 justify-between">
            <div class="text-3xl sm:text-2xl font-extrabold"><a href="#">VPN Studios</a></div>
            <ul class="hidden font-medium sm:flex space-x-4 sm:items-center sm:text-lg">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">Services</a></li>
                <li><a href="#experience">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;