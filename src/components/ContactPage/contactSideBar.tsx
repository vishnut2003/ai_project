
const ContactSideBar = () =>{
    return(<div className="sticky top-0"  /*MAIN DIV */>
    <div className="max-w-2xl mx-auto p-2 bg-secodary-color rounded-lg shadow-md">
        <a href="/contact"><img className="hover:opacity-75 transition rounded-lg" src="/ContactPage/contact-up.jpg" alt=""/></a>
    </div>
        
    <div className="flex items-center max-w- mx-auto p-1 bg-primary-color rounded-lg shadow-md">
        <div className="flex flex-col">
            <b><h1>1031 Exchange Blog</h1></b>
            <a href="#" className="py-2 bg-primary-color hover: opacity -75 transition">1031 Exchange Replacement Property Options</a>
            <a href="#" className="py-2 bg-primary-color hover: opacity -75 transition">Coronavirus (COVID-19) - 1031 Exchange Update - IRS Notice 2020-23</a>
            <a href="#" className="py-2 bg-primary-color hover: opacity -75 transition">1031 Exchange Oil, Gas, Mineral and Water Rights as Replacement Property</a>
            <a href="#" className="py-2 bg-primary-color hover: opacity -75 transition">The Top 7 Reasons You Can't Do a 1031 Exchange</a>

        </div>
    </div>

    <div className="max-w-2xl mx-auto p-2 bg-secodary-color rounded-lg shadow-md">
    <a href="/contact"><img className="hover:opacity-75 transition rounded-lg" src="/ContactPage/contact-down.jpg" alt=""/></a>
    </div>
    </div>
    )
}

export default ContactSideBar;