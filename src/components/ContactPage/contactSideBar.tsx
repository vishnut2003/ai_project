import { Button } from "../ui/button";

const ContactSideBar = () =>{
    return(<div className="mt-6 sticky top-0 max-h-max mb-8 "  /*MAIN DIV */>
    <div className="max-w-max mx-auto p-2 bg-secodary-color rounded-lg shadow-md">
        <a href="/contact"><img className="hover:opacity-75 transition rounded-lg" src="/ContactPage/contact-up.jpg" alt=""/></a>
    </div>
        
    <div className="flex bg-primary-color rounded-lg shadow-md">
        <div className="flex flex-col px-5 pt-4 pb-4 max-w-max">
            <div className="flex justify-center"><b><h1>1031 Exchange Blog</h1></b></div>
            <a href="#" className="mt-6 rounded-2xl py-2 bg-primary-color hover:bg-blue-400 transition-all">↪ 1031 Exchange Replacement Property Options</a>
            <a href="#" className="rounded-2xl py-2 bg-primary-color hover:bg-blue-400 transition-all">↪ Coronavirus (COVID-19) - 1031 Exchange Update - IRS Notice 2020-23</a>
            <a href="#" className="rounded-2xl py-2 bg-primary-color hover:bg-blue-400 transition-all">↪ 1031 Exchange Oil, Gas, Mineral and Water Rights as Replacement Property</a>
            <a href="#" className="mb-6 rounded-2xl py-2 bg-primary-color hover:bg-blue-400 transition-all">↪ The Top 7 Reasons You Can't Do a 1031 Exchange</a>
            <div className="flex justify-end"><Button className="text-lg bg-blue-400 hover:opacity-75 hover:text-white">More blogs ⏎</Button>
            </div>
        </div>
    </div>

    {/* <div className="max-w-max mx-auto p-2 bg-secodary-color rounded-lg shadow-md">
    <a href="/contact"><img className="hover:opacity-75 transition rounded-lg" src="/ContactPage/contact-down.jpg" alt=""/></a>
    </div> */}
    </div>
    )
}

export default ContactSideBar;