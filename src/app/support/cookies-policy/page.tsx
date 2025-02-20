import BasicLayout from "@/layouts/BasicLayout"
import { HeadingText, ListItems, ParaText } from "@/components/SupportPage/CommonTextStyles"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://ailawgpt.com/support/cookies-policy",
  }
}

const page = () => {
  return (
    <BasicLayout>
      <div className='w-full flex justify-center items-center py-10 px-7'>
        <div className='w-full max-w-screen-xl'>
          <h1 className='text-5xl font-semibold mb-5'>Cookies Policy</h1>

          {/* Content */}
          <div>

            <ParaText>
              To improve your experience when visiting LegallYour, we employ the use of cookies.
              This Cookies Policy describes what cookies are, how we use collecting cookies, and how you can control cookies.
            </ParaText>

            <HeadingText>What Are Cookies?</HeadingText>

            <ParaText>
              A cookie is a text file that gets placed on your computer under a website’s authorization. With expanded files,
              this Web site offers some data to enhance your browsing experience specifically because it lets this Web site remember your preferences, settings,
              and actions in the future:
            </ParaText>

            <HeadingText>How We Use Cookies</HeadingText>

            <ParaText>
              We use cookies for the following purposes:
            </ParaText>

            <ListItems items={[
              'Essential Cookies: These are needed for the operation of our website and for you to receive certain services',
              'Performance Cookies: Analytics cookies These types of cookies allow us to provide better and more relevant information to you and to understand how our website is used.',
              'Functionality Cookies: These cookies help the website to remember information about your preferences, for instance, your language preference or any other preference you have made about the website.',
              'Targeting/Advertising Cookies: These cookies are used to display adverts with certain products, etc that seem relevant to you from your usage of the website. It means that, for delivering the target advertisement, we may join with third-party services.'
            ]} />

            <HeadingText>Types of Cookies We Use</HeadingText>

            <ListItems items={[
              'Session Cookies: These are those cookies that get a very limited time in the device and are deleted once the browser is closed. They make it possible to handle your session and enable the website to work properly if you allow local storage.',
              'Persistent Cookies: These stay on your device for a given amount of time or you can delete them yourself. They help us recall your preferences and activities during your following visits to our site.',
              'Third-Party Cookies: Our website may also include cookies placed by third parties (for example Google Analytics, social media buttons). These cookies are governed by the privacy policies of the third parties that those salty treats belong to.'
            ]} />

            <HeadingText>Managing Cookies</HeadingText>

            <ParaText>
              You also have the option to either enable or disable cookies via settings of the browser being used by you.
              All major web browsers allow you to change your cookie preferences, for instance, block or delete cookies. Please remember that
              the disabling of cookies will hinder the overall performance of this website.
            </ParaText>

            <ParaText>
              To manage cookies:
            </ParaText>

            <ListItems items={[
              'Google Chrome: Select the Start button, Settings, Privacy & Security, Cookies and site data.',
              'Mozilla Firefox: Open Firefox and click on the Menu button then select Option , Privacy & Security, then finally Cookies and Site Data.',
              'Microsoft Edge: Navigate through Settings and click on Cookies and Site Permissions.',
              'Safari: Select, ‘Preferences,’ then ‘Privacy,’ then ‘Cookies and Website Data.’'
            ]} />

            <HeadingText>Consent to Cookies</HeadingText>

            <ParaText>
              Through accessing our website you agree to the use of cookies based on the policy outlined below.
              If you disagree with any of these cookies, please scroll down to the bottom of this page for information
              on how to do this or simply avoid using the website.
            </ParaText>

            <HeadingText>Revision to This Cookies Policy</HeadingText>

            <ParaText>
              In the future, we may change the Cookies Policy in order to reflect some changes in practice or for other reasons,
              connected with business, legal or regulation requirements. Any changes that will be made will be posted on
              this website page and the change in policy will take effect from the date it is posted.
            </ParaText>

            <HeadingText>Contact Us</HeadingText>

            <ParaText>If you have any questions or concerns about this Cookies Policy, please contact us at:</ParaText>

            <ParaText>Email address: <Link href={'mailto:legallyours23@gmail.com'}>legallyours23@gmail.com</Link></ParaText>
            <ParaText>
              Phone number:
              <Link href={'tel:+91 93 183 49 265'}>+91 93 183 49 265</Link>,
              <Link href={'tel:+91 93 107 16 023'}>+91 93 107 16 023</Link>
            </ParaText>

            <ParaText>
              When you continue to use our site, you consent to our use of cookies as provided for herein the policy.
            </ParaText>

          </div>
        </div>
      </div>
    </BasicLayout>
  )
}

export default page