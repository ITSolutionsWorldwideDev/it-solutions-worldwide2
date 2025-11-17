// components/layout/home/SegmentTabComponent.tsx

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Option {
  label: string;
  value: string;
}

const services: Option[] = [
  { label: "Web Development", value: "web-dev" },
  { label: "UI/UX Design", value: "ui-ux" },
  { label: "Digital Marketing", value: "digital-marketing" },
];

const serviceOptions: Record<string, Option[]> = {
  "web-dev": [
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Full Stack", value: "fullstack" },
  ],
  "ui-ux": [
    { label: "Wireframing", value: "wireframing" },
    { label: "Prototyping", value: "prototyping" },
  ],
  "digital-marketing": [
    { label: "SEO", value: "seo" },
    { label: "Content Marketing", value: "content" },
  ],
};

const euCountries = [
  "Netherlands",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Belgium",
  "Austria",
  "Sweden",
];

export default function SegmentTabs() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    country: "Netherlands",
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);
  const handleSkip = () => setStep((prev) => prev + 1);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) {
      alert("Email is mandatory!");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, service: selectedService, option: selectedOption }),
      });
      if (res.ok) {
        setSuccess(true);
        setFormData({ email: "", name: "", phone: "", country: "Netherlands", city: "" });
      } else alert("Failed to send enquiry. Please try again.");
    } catch (err) {
      console.error(err);
      alert("Error sending enquiry.");
    } finally {
      setLoading(false);
    }
  };

  const steps = ["Service", "Option", "Enquiry"];

  return (
    <div className="w-full mt-20 max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-8 relative">
        {steps.map((s, i) => (
          <div key={s} className="flex-1 flex items-center relative">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center z-10 text-white font-semibold ${
                step > i ? "bg-[#467a7e]" : "bg-gray-300"
              }`}
            >
              {i + 1}
            </div>
            {i !== steps.length - 1 && (
              <div
                className={`absolute top-3.5 left-10 h-1 flex-1 ${
                  step > i + 1 ? "bg-[#467a7e]" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Service */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-semibold">Select a Service</h2>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="border px-3 py-2 rounded shadow-sm focus:ring-2 focus:ring-[#467a7e]"
            >
              <option value="">-- Select Service --</option>
              {services.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
            <div className="flex justify-between mt-4">
              <button onClick={handleSkip} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                Skip
              </button>
              <button
                disabled={!selectedService}
                onClick={handleNext}
                className={`px-4 py-2 bg-[#467a7e] text-white rounded ${
                  !selectedService ? "opacity-50 cursor-not-allowed" : "hover:bg-[#356666]"
                }`}
              >
                Continue
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Option */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-semibold">Select Option</h2>
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="border px-3 py-2 rounded shadow-sm focus:ring-2 focus:ring-[#467a7e]"
            >
              <option value="">-- Select Option --</option>
              {selectedService &&
                serviceOptions[selectedService].map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
            </select>
            <div className="flex justify-between mt-4">
              <button onClick={handleBack} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                Go Back
              </button>
              <div className="flex gap-2">
                <button onClick={handleSkip} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                  Skip
                </button>
                <button
                  disabled={!selectedOption}
                  onClick={handleNext}
                  className={`px-4 py-2 bg-[#467a7e] text-white rounded ${
                    !selectedOption ? "opacity-50 cursor-not-allowed" : "hover:bg-[#356666]"
                  }`}
                >
                  Continue
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Enquiry Form */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-semibold">Enquiry Form</h2>
            {success && (
              <div className="p-4 bg-green-100 text-green-800 rounded">Enquiry sent successfully!</div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                name="email"
                placeholder="Email (required)"
                required
                value={formData.email}
                onChange={handleFormChange}
                className="border px-3 py-2 rounded shadow-sm focus:ring-2 focus:ring-[#467a7e]"
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleFormChange}
                className="border px-3 py-2 rounded shadow-sm focus:ring-2 focus:ring-[#467a7e]"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleFormChange}
                className="border px-3 py-2 rounded shadow-sm focus:ring-2 focus:ring-[#467a7e]"
              />
              <select
                name="country"
                value={formData.country}
                onChange={handleFormChange}
                className="border px-3 py-2 rounded shadow-sm focus:ring-2 focus:ring-[#467a7e]"
              >
                {euCountries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleFormChange}
                className="border px-3 py-2 rounded shadow-sm focus:ring-2 focus:ring-[#467a7e]"
              />
              <div className="flex justify-between mt-2">
                <button onClick={handleBack} type="button" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                  Go Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-[#467a7e] text-white rounded hover:bg-[#356666]"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


/* "use client";
import { useState } from "react";

interface Option {
  label: string;
  value: string;
}

const services: Option[] = [
  { label: "Web Development", value: "web-dev" },
  { label: "UI/UX Design", value: "ui-ux" },
  { label: "Digital Marketing", value: "digital-marketing" },
];

const serviceOptions: Record<string, Option[]> = {
  "web-dev": [
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Full Stack", value: "fullstack" },
  ],
  "ui-ux": [
    { label: "Wireframing", value: "wireframing" },
    { label: "Prototyping", value: "prototyping" },
  ],
  "digital-marketing": [
    { label: "SEO", value: "seo" },
    { label: "Content Marketing", value: "content" },
  ],
};

const euCountries = [
  "Netherlands",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Belgium",
  "Austria",
  "Sweden",
];

export default function SegmentTabs() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    country: "Netherlands",
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleSkip = () => setStep((prev) => prev + 1);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) {
      alert("Email is mandatory!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, service: selectedService, option: selectedOption }),
      });
      if (res.ok) {
        setSuccess(true);
        setFormData({ email: "", name: "", phone: "", country: "Netherlands", city: "" });
      } else {
        alert("Failed to send enquiry. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending enquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
    //  Step 1: Select Service
      {step === 1 && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Select a Service</h2>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="">-- Select Service --</option>
            {services.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
          <div className="flex justify-between mt-4">
            <button
              onClick={handleSkip}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Skip
            </button>
            <button
              disabled={!selectedService}
              onClick={handleNext}
              className={`px-4 py-2 bg-[#467a7e] text-white rounded ${
                !selectedService ? "opacity-50 cursor-not-allowed" : "hover:bg-[#356666]"
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      // Step 2: Select Option
      {step === 2 && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Select Option</h2>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="">-- Select Option --</option>
            {selectedService &&
              serviceOptions[selectedService].map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
          </select>
          <div className="flex justify-between mt-4">
            <button
              onClick={handleSkip}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Skip
            </button>
            <button
              disabled={!selectedOption}
              onClick={handleNext}
              className={`px-4 py-2 bg-[#467a7e] text-white rounded ${
                !selectedOption ? "opacity-50 cursor-not-allowed" : "hover:bg-[#356666]"
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      // Step 3: Enquiry Form 
      {step === 3 && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Enquiry Form</h2>
          {success && (
            <div className="p-4 bg-green-100 text-green-800 rounded">Enquiry sent successfully!</div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              name="email"
              placeholder="Email (required)"
              required
              value={formData.email}
              onChange={handleFormChange}
              className="border px-3 py-2 rounded"
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleFormChange}
              className="border px-3 py-2 rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleFormChange}
              className="border px-3 py-2 rounded"
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleFormChange}
              className="border px-3 py-2 rounded"
            >
              {euCountries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleFormChange}
              className="border px-3 py-2 rounded"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-[#467a7e] text-white rounded hover:bg-[#356666]"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
} */
