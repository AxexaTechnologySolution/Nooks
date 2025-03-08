import axios from "axios";
import emailjs from '@emailjs/browser';
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Contact = () => {
  const handleMapClick = () => {
    window.open(
      "https://maps.app.goo.gl/UBGunZ6gnkmcTTD57?g_st=com.google.maps.preview.copy",
      "_blank"
    );
  };

  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);

  const [errors, setErrors] = useState({});

  const notification = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate inputs
    const validationErrors = {};
    if (!email) validationErrors.email = "Email is required.";
    if (!phone) validationErrors.phone = "Phone number is required.";
    if (!name) validationErrors.name = "Name is required.";
    if (!description) validationErrors.description = "Description is required.";
    if (!company) validationErrors.company = "Company/Organization is required.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      validationErrors.email = "Invalid email format.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If no errors, proceed to send the email
    setLoading(true);
    setDisable(true);

    try {
      await sendEmail();
      setLoading(false);
      setDisable(false);
      toast.success("Your message has been sent successfully!")
      // Optionally reset the form fields
      setCompany("");
      setName("");
      setPhone("");
      setEmail("");
      setDescription("");
      setErrors({});
    } catch (error) {
      console.log('FAILED...', error);
      setLoading(false);
      setDisable(false);
    }
  };

  const form = useRef();

  const sendEmail = async () => {  
    return new Promise((resolve, reject) => {  
      // emailjs.sendForm('service_n0hejtc', 'template_tl4wm4j', form.current, {  
      //   publicKey: '4N09K4BwBYmcG-APg',  
      // })  
      emailjs.sendForm('service_zsl8my8', 'template_56b829g', form.current, {  
        publicKey: '-Dl51UG9sFXlq8HPS',  
      })  
      .then((result) => {  
        console.log('SUCCESS!', result.text);  
        resolve(result);  
      }, (error) => {  
        console.error('FAILED...', error.text);  
        reject(error);  
      });  
    });  
  };  

  return (
    <section className="text-gray-600 body-font relative">
      <div className="my-2 flex items-center justify-between container px-5 mx-auto">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold text-gray-500 lg:text-3xl mt-10 mb-4">
            Contact Us
          </h2>
        </div>
      </div>
      <div className="container px-5 py-2 mx-auto flex sm:flex-nowrap flex-wrap">
        <div
          className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-5 flex items-end justify-start relative"
          onClick={handleMapClick}
          style={{ cursor: "pointer" }}
        >
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.2989204746236!2d76.97802597509104!3d10.940777589218174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b102afe24c1%3A0x4c0581f26547af2c!2sNooks%20Technologies%20Pvt%20Ltd%20-%20Unit%201!5e0!3m2!1sen!2sin!4v1727934071391!5m2!1sen!2sin"
          />
          <div className="bg-white w-fit relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-5">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-xs md:text-sm">
              398/1A 18, 399/183, Okkilipalayam Road, Malumichampatti.P.O, Coimbatore 641050
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <Link className="leading-relaxed text-xs md:text-sm">
                furniture.nooks@gmail.com
              </Link>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-xs md:text-sm">
                84899 11110 / 9442119121 / 9442115121
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Explore our collection at Nooks and find the piece that best suits
            you
          </p>

          <form ref={form} onSubmit={notification}>
            <div className="relative mb-4">
              <label
                htmlFor="company"
                className="leading-7 text-sm text-gray-600"
              >
                Company/Organization
              </label>
              <input
                type="text"
                id="company"
                onChange={(e) => setCompany(e.target.value)}
                value={company}
                name="user_company"
                className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-1 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.company && (
                <p className="text-red-500 text-xs mt-1">{errors.company}</p>
              )}
            </div>

            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="user_name"
                className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-1 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div className="relative mb-4">
              <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
                Phone Number
              </label>
              <input
                type="number"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                name="user_phone"
                className="w-full remove-arrow hide-arrow bg-white rounded border border-gray-300 focus:border-black focus:ring-1 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="user_email"
                className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-1 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="description"
                className="leading-7 text-sm text-gray-600"
              >
                Description
              </label>
              <textarea
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                name="user_description"
                className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-1 focus:ring-black h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">{errors.description}</p>
              )}
            </div>

            <button
              type="submit"
              className={`text-white w-full bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg ${
                loading || disable ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading || disable} // Disable button if loading or disabled
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

