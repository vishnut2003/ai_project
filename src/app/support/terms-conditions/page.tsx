import BasicLayout from '@/layouts/BasicLayout'
import { HeadingText, ListItems, ParaText } from '@/components/SupportPage/CommonTextStyles'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: "https://ailawgpt.com/support/terms-contitions",
  }
}

const TermsCondition = () => {
  return (
    <BasicLayout>
      <div className='w-full flex justify-center items-center py-10 px-7'>
        <div className='w-full max-w-screen-xl'>
          <h1 className='text-5xl font-semibold mb-5'>Terms & Conditions</h1>

          {/* Content */}
          <div>
            <ParaText>
              Welcome to LegallYours. You agree to these Terms & Conditions every time you visit and/or have an interaction with our
              website. Any user who is accessing this Website and its products or services or any user providing information in forms
              on the Website agrees to the terms stated on this policy.
            </ParaText>

            <HeadingText>General Information</HeadingText>

            <ParaText>
              It is hereby expressly stated that any information which is provided on this website is
              intended to be informative, and should not be construed as legal advice. Although we strive to provide
              the most current and accurate information available we do not guarantee that such information is current, accurate or complete.
              If you rely on information provided on this website you do so at your sole risk.
            </ParaText>

            <HeadingText>Legal Services</HeadingText>

            <ParaText>
              Sometimes our website may provide some legal help, may provide consultation with a lawyer,
              but mere access to this site shall not create an attorney-client relationship . An engagement letter formishes
              the probable nature of the legal relationship between the attorney and the client and the former may not act as the latter’s
              attorney until the engagement letter has been signed by both parties.
            </ParaText>

            <HeadingText>Use of Website</HeadingText>

            <ParaText>You covenant that you will use this website only for legal purposes. You are prohibited from:</ParaText>

            <ListItems items={[
              'Failing to observe any lawful statistic or standard that may be in force.',
              'Any act or activity to intrude into a website, server or network without any proper authorization.',
              'Tampering with the functioning of the website or the security of the network we operate.',
            ]} />

            <HeadingText>Intellectual Property</HeadingText>

            <ParaText>
              All text, graphics, logos, icons, images, computer software, and other materials on this Web site,
              unless otherwise stated, are protected by copyright as the work of LegallYours or its content suppliers.
              It is prohibited to copy, distribute, modify or otherwise utilise any of the content on this website in any
              way unless prior permission has been granted.
            </ParaText>

            <HeadingText>Links to Third-Party Websites</HeadingText>

            <ParaText>
              On our site you will get links to third party sites. We are not associated with these sites,
              and therefore, will not take any responsibility for the material and policies of these web-sites. As always, it remains your
              exclusive duty to use all links containing the access to other third parties internet sites.
            </ParaText>

            <HeadingText>Limitation of Liability</HeadingText>

            <ParaText>
              Notwithstanding the foregoing provisions of this LegallYours shall not be liable for any damages whatsoever,
              whether direct, indirect, punitive, special, incidental or consequential relating to the use or inability to use any of our website or services,
              or otherwise arising out of your use of the website even if LegallYours have been advised of the possibility of such damages.
            </ParaText>

            <HeadingText>Indemnification</HeadingText>

            <ParaText>
              With regard to your use of the website and adherence to these Terms & Conditions,
              you also assume full legal responsibility to indemnify all in connection to LegallYours including but
              not limited to officers, employees, agents, and affiliates from all claims, damages, liabilities, and expenses.
            </ParaText>

            <HeadingText>Privacy</HeadingText>

            <ParaText>
              Our other terms and conditions include the way information is processed and used, which is described in our Privacy Policy To the extent
              you use this website, the Privacy Policy shall apply.
            </ParaText>

            <HeadingText>Modifications to Terms & Conditions</HeadingText>

            <ParaText>
              We are entitled to change, add to and/or remove these Terms & Conditions from time to
              time. Here we will state any changes that need to be made and subsequent changes will come into
              force the moment they are posted on this page.
            </ParaText>

            <HeadingText>Contact Us</HeadingText>

            <ParaText>If you have any questions or concerns about these Terms & Conditions, please contact us at:</ParaText>

            <ParaText>Email address: <Link href={'mailto:legallyours23@gmail.com'}>legallyours23@gmail.com</Link></ParaText>
            <ParaText>
              Phone number:
              <Link href={'tel:+91 93 183 49 265'}>+91 93 183 49 265</Link>,
              <Link href={'tel:+91 93 107 16 023'}>+91 93 107 16 023</Link>

            </ParaText>

            <ParaText>
              When doing business with us and utilize our website you well agree to be bound to adhere to the Terms & Conditions put in place.
            </ParaText>

          </div>
        </div>
      </div>
    </BasicLayout>
  )
}

export default TermsCondition