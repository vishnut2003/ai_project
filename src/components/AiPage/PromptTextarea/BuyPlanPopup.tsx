import Image from "next/image"
import Link from "next/link"

const BuyPlanPopup = ({closePopup}: {
  closePopup: () => void,
}) => {
  return (
    <div
      className="fixed z-50 top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center"
    >
      <div
        className="bg-secodary-color shadow-xl rounded-md w-full max-w-screen-sm min-h-[300px] flex justify-center items-center"
      >
        <div
          className="flex justify-center items-center w-full"
        >
          <Image
            alt="Activate Pro"
            src={'/assets/activate-pro-popup.png'}
            width={500}
            height={500}
            style={{
              width: '150px',
            }}
          />
        </div>
        <div
          className="w-full space-y-2"
        >
          <h2
            className="text-3xl font-semibold"
          >Activate Pro</h2>
          <p
            className="m-0 text-lg"
          >Purchase our yearly or monthly subscription for unlimited access</p>

          <div
            className="flex gap-3 items-center"
          >
            <Link
              href={'/dashboard/pricing'}
              className="block max-w-max py-2 px-4 bg-white text-secodary-color text-sm font-medium rounded-md"
            >
              Purchase
            </Link>
            <button
              className="py-2 px-4 border border-white text-sm font-medium rounded-md"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyPlanPopup