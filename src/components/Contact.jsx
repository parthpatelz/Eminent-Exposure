import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser'

const EMAIL_PUBLIC_KEY = 'oj298PHc8fXWmnMcY'
const EMAIL_TEMPLATE_ID = 'template_wbcc9bb'
const EMAIL_SERVICE_ID = 'service_8f09mn8'

const Contact = () => {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target)
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)

        const username = form.name?.trim()
        const user_email = form.email?.trim()
        const message = form.message

        if (!username || !user_email || !message) {
            return toast.error("Please fill all the fields", {
                position: 'bottom-right',
            })
        }

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
                    setForm((prevForm) => ({
                        ...prevForm,
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    }));
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
        <div id='contactUs' style={{ marginTop: '7rem' }} className='h-screen'>
            <div class="h-75 w-75 mx-auto">
                <div class="wrapper img" style={{ backgroundImage: 'url(https://preview.colorlib.com/theme/bootstrap/contact-form-08/images/img.jpg.webp)' }} >
                    <div class="row">
                        <div class="col-md-9 col-lg-7">
                            <div class="contact-wrap w-100 p-md-5 p-4">
                                <h3 class="mb-4">Get in touch with us</h3>
                                <form id="contactForm" name="contactForm" class="contactForm" novalidate="novalidate" onSubmit={handleSubmit}>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label" for="name">Full Name</label>
                                                <input type="text" class="form-control" name="name" id="name" placeholder="Name" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label" for="email">Email Address</label>
                                                <input type="email" class="form-control" name="email" id="email" placeholder="Email" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label class="label" for="subject">Subject</label>
                                                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label class="label" for="#">Message</label>
                                                <textarea name="message" class="form-control" id="message" cols="30" rows="4" placeholder="Message" onChange={handleChange}></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="submit" value="Send Message" class="btn btn-primary" />
                                                <div class="submitting"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;
