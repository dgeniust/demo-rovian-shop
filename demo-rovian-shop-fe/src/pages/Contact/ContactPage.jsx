import React from "react";
import logo from "../../assets/blackHorizontal_final.png";
import celeb from "../../assets/kjw.jpg";
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#fffafb] text-black font-sans antialiased">
      {/* Main Content */}
      <section className="pt-24 pb-16 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Image & Details */}
          <div className="space-y-12">
            <div className="aspect-[4/3] bg-white border border-neutral-100 p-2 shadow-inner">
              <img
                src="https://i.pinimg.com/736x/fa/5c/3b/fa5c3ba91c1ddcf3c87186c3b0bf10be.jpg"
                alt="ROVIAN watch"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-500 mb-2 block">
                Reach Out To Us
              </span>
              <h2 className="text-4xl font-semibold tracking-tight leading-tight mb-4">
                ROVIAN’s Devotion to Horology,
                <br /> Your Connection to Us.
              </h2>
              <p className="text-sm text-neutral-600 mb-8">
                For inquiries, expert advice, and boutique services. Or just
                reach out manually to{" "}
                <a
                  href="mailto:hello@rovianwatch.com"
                  className="font-medium text-black underline underline-offset-2"
                >
                  hello@rovianwatch.com
                </a>
                .
              </p>

              <div className="grid sm:grid-cols-3 gap-8 text-sm">
                {[
                  {
                    title: "ROVIAN Watch Care",
                    desc: "For maintenance, repairs, and technical inquiries.",
                    contact: "care@rovianwatch.com",
                  },
                  {
                    title: "Visit Our Boutique",
                    desc: "Experience ROVIAN's flagship London location.",
                    contact: "15 Savile Row, London, W1S 3PF",
                  },
                  {
                    title: "Speak with an Expert",
                    desc: "For personalized consultations and advice.",
                    contact: "+44 (0) 20 7123 4567",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="space-y-2 border-l border-black pl-4 py-1"
                  >
                    <h4 className="font-semibold text-base">{item.title}</h4>
                    <p className="text-neutral-600 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                    <p className="font-medium text-black mt-1 text-xs">
                      {item.contact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 md:p-10 border border-neutral-100 shadow-sm">
            <div className="flex justify-center mb-2">
              <img src={logo} alt="" className="w-[50%] h-[50%] " />
            </div>
            {/* <h3 className="text-3xl font-semibold tracking-tight mb-1">
              Connect with ROVIAN.
            </h3> */}
            <p className="text-sm text-neutral-600 mb-8">
              Or just reach out manually to{" "}
              <a
                href="mailto:hello@rovianwatch.com"
                className="text-black font-medium hover:underline"
              >
                hello@rovianwatch.com
              </a>
            </p>
            <form className="space-y-6 text-sm">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium mb-1.5">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter your first name..."
                    className="w-full p-3 border border-neutral-200 bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1.5">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter your last name..."
                    className="w-full p-3 border border-neutral-200 bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="w-full p-3 border border-neutral-200 bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                />
              </div>

              <div>
                <label className="block font-medium mb-1.5">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                    GB (+44)
                  </div>
                  <input
                    type="tel"
                    placeholder="(0) 20 7123 0000"
                    className="w-full p-3 pl-24 border border-neutral-200 bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium mb-1.5">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your interest in ROVIAN timepieces, specific models, or any inquiries you have. We are here to assist you."
                  className="w-full p-3 border border-neutral-200 bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none"
                ></textarea>
                <div className="text-xs text-neutral-400 text-right mt-1">
                  0/1000
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white p-3 font-semibold hover:bg-neutral-800 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
