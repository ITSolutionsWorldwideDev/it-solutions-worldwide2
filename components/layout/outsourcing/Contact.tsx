// app/contact/page.tsx

"use client";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      name: (form.name as unknown as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      phone: (form.phone as HTMLInputElement).value,
      company: (form.company as HTMLInputElement).value,
      service: (form.service as HTMLInputElement).value,
      message: (form.message as HTMLTextAreaElement).value,
    };
    console.log(formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to send message");
    }
  };

  return (
    <section className="w-full min-h-screen bg-linear-to-br from-[#002025] via-[#002A30] to-[#00373F] flex items-center justify-center px-4 py-16 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-0 right-0"></div>

      <div className="relative z-10 max-w-7xl w-full">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Let&apos;s <span className="text-[#22A3AD]">Connect</span>
          </h1>

          <p className="text-gray-300 mt-4 text-sm md:text-base">
            Ready to transform your business? Get in touch with our experts
            today
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>

            <p className="text-gray-300 leading-7 mb-8 max-w-xl">
              Have a project in mind? We&apos;d love to hear from you. Send us a
              message and we&apos;ll respond as soon as possible.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Email */}
              <div className="bg-[#03272d] border border-white/5 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <Mail className="text-cyan-400" size={24} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Email Us</p>
                  <h4 className="text-white font-semibold">
                    info@itsolutionsworldwide.com
                  </h4>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-[#03272d] border border-white/5 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <Phone className="text-cyan-400" size={24} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Call Us</p>
                  <h4 className="text-white font-semibold">+31 10 766 0786</h4>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-[#03272d] border border-white/5 rounded-2xl p-5 flex items-center gap-4 mt-5">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <MapPin className="text-cyan-400" size={24} />
              </div>

              <div>
                <p className="text-gray-400 text-sm">Visit Us</p>
                <h4 className="text-white font-semibold">
                  Mandenmakerstraat 100C, 3194 DG Hoogvliet Rotterdam,
                  Netherlands
                </h4>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>

              <div className="flex items-center gap-4">
                {[
                  <Facebook key="fb" size={18} />,
                  <Twitter key="tw" size={18} />,
                  <Linkedin key="li" size={18} />,
                  <Instagram key="ig" size={18} />,
                ].map((icon, index) => (
                  <div
                    key={index}
                    className="w-11 h-11 rounded-xl bg-[#03272d] border border-white/5 flex items-center justify-center text-white hover:bg-cyan-500/20 transition-all duration-300 cursor-pointer"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-3xl overflow-hidden border border-white/5">
              <iframe
                src="https://www.google.com/maps?q=Rotterdam&output=embed"
                width="100%"
                height="250"
                loading="lazy"
                className="w-full"
              ></iframe>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-[#03272d]/90 border border-white/5 rounded-3xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-white text-sm mb-2 block">
                    Your Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full h-12 rounded-xl bg-[#00171b] border border-white/5 px-4 text-white outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="text-white text-sm mb-2 block">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full h-12 rounded-xl bg-[#00171b] border border-white/5 px-4 text-white outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-white text-sm mb-2 block">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    name="phone"
                    placeholder="+31 xx xxx-xxxx"
                    className="w-full h-12 rounded-xl bg-[#00171b] border border-white/5 px-4 text-white outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="text-white text-sm mb-2 block">
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    placeholder="Your Company"
                    className="w-full h-12 rounded-xl bg-[#00171b] border border-white/5 px-4 text-white outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="text-white text-sm mb-2 block">
                  Service Interested In
                </label>

                <input
                  type="text"
                  name="service"
                  className="w-full h-12 rounded-xl bg-[#00171b] border border-white/5 px-4 text-white outline-none focus:border-cyan-400"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-white text-sm mb-2 block">
                  Your Message *
                </label>

                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl bg-[#00171b] border border-white/5 px-4 py-4 text-white outline-none resize-none focus:border-cyan-400"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full h-14 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-white font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
