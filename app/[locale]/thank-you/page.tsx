import React from "react";

const thankYouPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ service: string }>;
}) => {
  const params = await searchParams;
  // console.log(params);
  const { service } = params;
  // console.log(service);
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-white via-gray-50 to-teal-50 px-4">
      <div className="max-w-md text-center bg-white shadow-lg rounded-2xl p-8 border">
        {/* <div className="text-5xl mb-4">🎉</div> */}

        <h1 className="text-3xl font-bold text-slate-900 mb-2">Thank You!</h1>

        <p className="text-slate-600 mb-6">
          Your consultation request has been received successfully for {service}
          . Our team will contact you within 24–48 hours.
        </p>

        <div className="bg-teal-50 text-teal-800 text-sm p-3 rounded-lg mb-6">
          ✓ We’ve received your details
          <br />
          ✓ You’ll get a response soon
          <br />✓ Check your WhatsApp or email
        </div>

        <a
          href="/"
          className="inline-block bg-teal-800 hover:bg-teal-900 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default thankYouPage;
