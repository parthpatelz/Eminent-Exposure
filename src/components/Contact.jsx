import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser'

const EMAIL_PUBLIC_KEY = 'oj298PHc8fXWmnMcY'
const EMAIL_TEMPLATE_ID = 'template_wbcc9bb'
const EMAIL_SERVICE_ID = 'service_8f09mn8'

const Contact = () => {
    const [loading,setLoading] = useState(false)
    const [form, setForm] = useState({
        firstName: '',
        email: '',
        purpose: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target)
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
        console.log(form)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)

        const username = form.firstName.trim() 
        const user_email = form.email.trim()
        const purpose = form.purpose.trim()

        emailjs
			.send(
				EMAIL_SERVICE_ID,
				EMAIL_TEMPLATE_ID,
				{
					from_name: username,
					to_name: "Nithin Manda",
					reply_to: user_email,
					to_email: "vpnstudios1@gmail.com",
					message: purpose,
				},
				EMAIL_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false);
					toast.success("We will be in touch with you soon! Thank You", {
						position: 'bottom-right',
					});
					setForm({
						firstName: "",
						email: "",
						service: "",
					});
				},
				(error) => {
					setLoading(false);
					console.error(error);
					toast.error("Uh, oh! Something went wrong. Please try again later.", {
						position: 'bottom-right',
					});
				}
			);        
    };

    return (
        <div id='contactUs'>
            <div className='flex flex-col items-center justify-center h-screen'>
                <h1 className="mt-6 text-4xl font-extrabold leading-none tracking-tight text-blue-900 md:text-5xl lg:text-6xl dark:text-white">
                    Contact <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Us</mark>
                </h1>
                <div className="mt-6">
                    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="firstName"
                                    id="floating_first_name"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="floating_first_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Name
                                </label>
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="email"
                                name="email"
                                id="floating_email"
                                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="floating_email"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email address
                            </label>
                        </div>
                        {/* Add a country selection dropdown */}
                        <div className="relative z-0 w-full mb-5 group">
                            <select
                                name="purpose"
                                id="purpose_of_email"
                                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                required
                                onChange={handleChange}
                                // value={form.purpose}
                            >
                                <option value="" disabled>Which service do you need?</option>
                                <option value="wedding">Wedding Photography</option>
                                <option value="birthday">Birthday Events</option>
                                <option value="otherphotography">Other Photography Events</option>
                                <option value="led">LED Rentals</option>
                                <option value="GiftItem">Order Gift Items</option>
                                <option value="photoAlbum">Order Photo Albums</option>
                            </select>
                            <label
                                htmlFor="purpose_of_email"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Purpose
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Contact;
