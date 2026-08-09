/**
 * Payment Service for handling Paystack donations
 * Keeps API integration logic isolated from the UI components.
 */

export const initializePayment = async ({ email, amount, name, purpose, onSuccess, onClose, onError }) => {
  const paystackKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  if (!paystackKey) {
    // If key is not configured, simulate payment flow for development
    console.warn("Paystack Public Key (VITE_PAYSTACK_PUBLIC_KEY) is missing. Running in simulator mode.");
    
    // Simulate API initialization delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Trigger success callback after simulation
    onSuccess({
      reference: `SIM-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      status: 'success',
      amount,
      email,
      name,
      purpose
    });
    return;
  }

  // If Paystack is configured, load the Paystack inline popup
  try {
    const handler = window.PaystackPop.setup({
      key: paystackKey,
      email: email,
      amount: amount * 100, // Paystack expects amount in kobo/cents
      currency: "NGN", // Can be customized or made dynamic
      metadata: {
        custom_fields: [
          {
            display_name: "Donor Name",
            variable_name: "donor_name",
            value: name
          },
          {
            display_name: "Donation Purpose",
            variable_name: "donation_purpose",
            value: purpose
          }
        ]
      },
      callback: function(response) {
        onSuccess({
          reference: response.reference,
          status: 'success',
          amount,
          email,
          name,
          purpose
        });
      },
      onClose: function() {
        if (onClose) onClose();
      }
    });

    handler.openIframe();
  } catch (err) {
    console.error("Paystack initialization failed:", err);
    if (onError) onError(err);
  }
};
