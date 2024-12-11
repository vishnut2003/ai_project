import BasicLayout from '@/layouts/BasicLayout'
import Link from 'next/link'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <BasicLayout>
      <div className='w-full flex justify-center items-center py-10 px-7'>
        <div className='w-full max-w-screen-xl'>
          <h1 className='text-5xl font-semibold mb-5'>Privacy Policy</h1>

          {/* content */}
          <div>

            <ParaText>
              We understand that privacy is important to you, and Legall yours is designed with this in mind therefore protecting your personal information.
              This Privacy Policy explains what information we collect when you access our website or when you use our services of a legal nature.
            </ParaText>

            <HeadingText>Information We Collect</HeadingText>

            <ParaText>
              Depending on the nature of your interactions with us, you may provide us with your identification card, your address,
              email address, phone number, or other related information. This information is provided when you complete forms, engage in
              communications with us, and when you use website services.
            </ParaText>

            <HeadingText>How We Use Your Information</HeadingText>

            <ParaText>We use the collected information to:</ParaText>

            <ListItems items={[
              'The legal aid should be provided and the support in legal matters.',
              'Answer your questions and be in a position to communicate with you.',
              'Improve our website and services.',
              'For sharing updates, newsletters or any other communication (if you have consented).',
              'Comply with legal obligations.',

            ]} />

            <HeadingText>Sharing Your Information</HeadingText>

            <ParaText>We do not sell, rent, or share your personal information with third parties except as follows:</ParaText>

            <ListItems items={[
              'With third parties who help in managing our website and services.',
              'As needed to comply with the law, a legal proceeding, or to protect our legal rights.'
            ]} />

            <HeadingText>Data Security</HeadingText>

            <ParaText>
              We use all measures within our discretion to ensure your identity is protected from unauthorized parties for viewing,
              disclosing or modifying your information or for other improper uses of your personal information. However, no method of data
              transmission over the internet can be absolutely secure, and we do not claim to provide it.
            </ParaText>

            <HeadingText>Cookies</HeadingText>

            <ParaText>
              Cookies on this site may be used to improve your experience whilst using our website.
              Cookies are small bytes of text that our web server places on your drive that assist in usage tracking and other functionalities.
              Cookies can also be controlled via your browser, to strictly limit their use on your device.
            </ParaText>

            <HeadingText>Your Rights</HeadingText>

            <ParaText>
              You have the right of access, of rectification of your data, and to erase them; If you wish to exercise these rights, please <Link href={'/contact'}>Contact us</Link>.
            </ParaText>

            <HeadingText>Changes to This Privacy Policy</HeadingText>

            <ParaText>
              We may update the right to edit this Privacy Policy from time to time.
              Any changes in the policy shall be also marked on this page, and the
              policy comes into force as soon as it is updated.
            </ParaText>

            <HeadingText>Contact Us</HeadingText>

            <ParaText>Email: <Link href={'mailto:legallyours23@gmail.com'}>legallyours23@gmail.com</Link></ParaText>
            <ParaText>Phone Number: <Link href={'tel:(+91) 93 183 49 265'}>+91 93 183 49 265</Link>, <Link href={'tel: (+91) 93 107 16 023'}> +91 93 107 16 023</Link></ParaText>

            <ParaText>Your use of this website constitutes your agreement to this Privacy Policy.</ParaText>

          </div>
        </div>
      </div>
    </BasicLayout>
  )
}

export function HeadingText({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <h2 className='font-semibold text-[25px]'>{children}</h2>
  )
}

export function ParaText({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <p className='font-thin text-[18px] mb-6'>{children}</p>
  )
}

export function ListItems({ items }: Readonly<{
  items: string[]
}>) {
  return (
    <ul className='list-disc pl-8'>
      {items.map((item, index) => (
        <li className='font-thin text-[18px]' key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default PrivacyPolicy