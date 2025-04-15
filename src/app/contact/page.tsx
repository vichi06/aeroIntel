import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white font-[family-name:var(--font-space-mono)]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        <main className="flex flex-col gap-16">
          {/* Hero Section */}
          <section className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--orange)]">
              Contact Us
            </h1>
          </section>

          {/* Contact Information Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-[var(--grey)] rounded-lg p-8 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h2 className="text-2xl font-bold text-[var(--orange)] mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-700 mb-8">
                  Have questions about our technology or interested in
                  partnership opportunities? We&apos;d love to hear from you.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--orange)] mb-2">
                      Email
                    </h3>
                    <p className="text-gray-700">info@aerointel.eu</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--orange)] mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-700">+31 (0) 20 123 4567</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--orange)] mb-2">
                      Address
                    </h3>
                    <p className="text-gray-700">
                      AeroIntel B.V.
                      <br />
                      Science Park 400
                      <br />
                      1098 XH Amsterdam
                      <br />
                      The Netherlands
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[var(--grey)] rounded-lg p-8 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
              <h2 className="text-2xl font-bold text-[var(--orange)] mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--orange)] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md bg-white border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-[var(--orange)] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--orange)] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md bg-white border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-[var(--orange)] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[var(--orange)] mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 rounded-md bg-white border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-[var(--orange)] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--orange)] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-white border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-[var(--orange)] focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[var(--orange)] text-white hover:bg-white hover:text-[var(--orange)] px-6 py-3 rounded-md font-medium transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
