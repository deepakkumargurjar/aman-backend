export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-gray-300">
      
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold text-accent">
            Aman Security Agency
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Operating under the Private Security Agency Regulation Act, 2005.
            ISO 9001:2015 Certified security service provider delivering
            professional, reliable and affordable security solutions.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Security Guards</li>
            <li>Bouncer Services</li>
            <li>Armed Security (Gunmen)</li>
            <li>Residential Security</li>
            <li>Industrial Security</li>
            <li>Event Security</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact Us
          </h3>
          <p className="text-sm">
            📍 Near Baba Properties,<br />
            Pratap Nagar, Jaipur,<br />
            Rajasthan – 302033
          </p>

          <p className="mt-3 text-sm">
            📞 +91 7627043748<br />
            📞 +91 9351636149
          </p>

          <p className="mt-3 text-sm">
            📧 operation@amansecurityservices.com
          </p>

          <p className="mt-2 text-sm">
            🕒 24×7 Service Available
          </p>
        </div>

      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-gray-700 py-6 px-4 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Aman Security Agency. All Rights Reserved.
        </p>
        <p className="mt-1 text-gray-500">
          PSARA Licensed | ISO 9001:2015 Certified
        </p>
      </div>

    </footer>
  )
}
