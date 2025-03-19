import axios from "axios";

export interface ValidUserSubscription {
    validTill: Date,
    daysLeft: string,
}

export async function validateUserSubscription() {
    return new Promise<ValidUserSubscription | null>(async (resolve, reject) => {
        try {
            const response: {
                data: {
                    expiryDate: string | null,
                }
            } = await axios.get('/api/auth/get-subscription-expiry');

            if (!response.data.expiryDate) {
                return resolve(null);
            }

            const expiryDate = new Date(response.data.expiryDate);
            const todayDate = new Date();

            if (expiryDate < todayDate) {
                return resolve(null);
            }

            const daysLeft = formatDuration(expiryDate.getTime() - todayDate.getTime())
            const SubscriptionDetails: ValidUserSubscription = {
                validTill: expiryDate,
                daysLeft,
            }

            return resolve(SubscriptionDetails);
        } catch (err) {
            return reject(err);
        }
    })
}

function formatDuration(milliseconds: number) {
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return `${days} D, ${hours} HR`;
}