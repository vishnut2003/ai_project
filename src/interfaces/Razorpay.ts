export interface RazorpayOptions {
    key: string | undefined;
    amount: number;
    currency: string;
    name: string;
    description: string;
    order_id: string;
    handler: (response: RazorpayResponse) => Promise<void>;
    prefill: RazorpayPrefill;
    theme: RazorpayTheme;
}

export interface RazorpayResponse {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
}

export interface RazorpayPrefill {
    name: string;
    email: string;
    contact?: string;
}

export interface RazorpayTheme {
    color: string;
}