import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { BeatLoader } from 'react-spinners';

const EMAIL_PUBLIC_KEY = 'Ef9O09bOaw0GIKcB0';
const EMAIL_TEMPLATE_ID = 'template_9bybmgk';
const EMAIL_SERVICE_ID = 'service_63xw4ab';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = form.name?.trim();
        const user_email = form.email?.trim();
        const message = form.message;

        if (!username || !user_email || !message) {
            return toast.error("Please fill all the fields", {
                position: 'bottom-right',
            });
        }

        setLoading(true);

        emailjs
            .send(
                EMAIL_SERVICE_ID,
                EMAIL_TEMPLATE_ID,
                {
                    from_name: username,
                    to_name: "Nithin Manda",
                    reply_to: user_email,
                    to_email: "vpnstudios1@gmail.com",
                    message: message,
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
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
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
        <div id='contactUs' className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-20">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="md:flex">
                    <div className="md:flex-shrink-0 md:w-1/2">
                        <img 
                            className="h-full w-full object-cover" 
                            src="https://images.pexels.com/photos/4041407/pexels-photo-4041407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="Contact Us" 
                        />
                    </div>
                    <div className="p-8 md:w-1/2">
                        <h2 className="text-3xl font-extrabold text-gray-900">Get in touch with us</h2>
                        <p className="mt-2 text-sm text-gray-600">We'd love to hear from you! Please fill out the form below.</p>
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Subject"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Message"
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    {loading ? <BeatLoader size={10} color="#ffffff" /> : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;