const ContactDetails = () =>{
    return (
        <div className="max-w-2xl mx-auto p-6 bg-secodary-color rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">CONTACT</h2>
          <hr className="mb-4 border-gray-300" />
          <p className="text-white-700 mb-4">
            Atlas 1031 Exchange has proudly served clients seeking I.R.C § 1031 counsel as Qualified Intermediaries with precision and excellence for over 16 years. We often personally meet with clients, and speak at educational events on “Tax Deferred Exchanges.”
          </p>
          <p className="text-white-700 mb-2">
            <strong>Email:</strong> info@atlas1031.com
          </p>
          <p className="text-white-700 mb-4">
            <strong>Phone:</strong> 1-800-227-1031
          </p>
    
          <div className="flex flex-col md:flex-row justify-between text-white-700">
            <div className="mb-4 md:mb-0">
              <p className="font-semibold">Orlando Office</p>
              <p>1816 Bimini Drive, Orlando, FL 32806</p>
            </div>
            <div>
              <p className="font-semibold">Naples Office</p>
              <p>1725 Marsh Run, Naples, FL 34109</p>
            </div>
          </div>
        </div>
      );
    };
export default ContactDetails;