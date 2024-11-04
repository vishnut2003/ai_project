import BasicLayout from "@/layouts/BasicLayout";
import { contractItems, identityItems, propertyItems } from "./contactFormItems";

const ContactForm = () => {
        
        
  return (
    <BasicLayout>
    <div className="max-w-2xl mx-auto p-6 bg-black rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form className="space-y-4">
        {/* Grid for First Name and Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block font-medium mb-1">First Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="text-black w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block font-medium mb-1">Last Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="text-black w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Grid for Email Address and Phone Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block font-medium mb-1">Email Address <span className="text-red-500">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="text-black w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="text-black w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

       
        {/**/}


        
        {/* Dropdown for Property */}
        <div>
          <label htmlFor="property" className="block font-medium mb-1">
            What is the property being sold? <span className="text-red-500">*</span>
          </label>
          <select
            id="property"
            name="property"
            required
            className="text-black w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select an option</option>
            {propertyItems.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Dropdown for Contract */}
        <div>
            
          <label htmlFor="contract" className="block font-medium mb-1">
            <h1>In Contract*</h1>
            Have you signed an agreement with the buyer? <span className="text-red-500">*</span>
          </label>
          <select
            id="contract"
            name="contract"
            required
            className="text-black w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select an option</option>
            {contractItems.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Dropdown for Identity */}
        <div>
          <label htmlFor="identity" className="block font-medium mb-1">
            How do you identify yourself? <span className="text-red-500">*</span>
          </label>
          <select
            id="identity"
            name="identity"
            required
            className="text-black w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select an option</option>
            {identityItems.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Text Area */}
        <div>
          <label htmlFor="message" className="block font-medium mb-1">
            How may we help you? <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            placeholder="Help me understand how I can help you?"
          ></textarea>
        </div>

        {/* Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="blogSignup"
            name="blogSignup"
            className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="blogSignup" className="ml-2 block text-sm">
            Sign Up for 1031 Exchange Blog?
          </label>
        </div>
        <button
          type="submit"
          className="w-28 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Send 
        </button>

      </form>
    </div>
    </BasicLayout>
  );
};

export default ContactForm;