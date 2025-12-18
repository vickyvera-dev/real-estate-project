import React from "react";
import {
  BsBell,
  BsEnvelope,
  BsExclamationTriangle,
  BsInfoCircle,
  BsXCircle,
} from "react-icons/bs";

export default function Termsection() {
  return (
    <section id="terms-of-service" className="w-full border-b border-b-gray-300">
      {/* ===== HERO ===== */}
      <header
        className="text-center pt-36 pb-20 px-6 sm:px-10 md:px-16 lg:px-28"
        data-aos="zoom-in"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-950">
          Terms
        </h1>
        <p className="mt-4 max-w-4xl mx-auto text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
          Odio et unde deleniti. Officiis quo odio sint voluptas consequatur ut
          a odio voluptatem. Sit dolorum debitis veritatis natus dolores.
        </p>
      </header>

      {/* ===== BREADCRUMB ===== */}
      <nav className="bg-gray-100 py-5 px-6">
        <ul className="flex gap-2 text-sm sm:text-base max-w-7xl mx-auto">
          <li className="text-teal-600">
            <a href="/">Home</a>
          </li>
          <li className="text-gray-600">
            /{" "}
            <a href="/terms" className="hover:text-teal-600">
              Terms
            </a>
          </li>
        </ul>
      </nav>

      {/* ===== CONTENT ===== */}
      <main
        className="py-16 px-6 sm:px-10 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        {/* Page Intro */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-6 py-2 text-sm bg-gray-200 text-teal-700 rounded-full">
            Last Updated: February 27, 2025
          </span>
          <h2 className="mt-4 text-3xl text-[#323b3b]">Terms of Service</h2>
          <p className="mt-2 text-lg text-gray-600">
            Please read these terms carefully before using our services
          </p>
        </div>

        {/* ===== SECTIONS ===== */}
        <div className="mt-14 space-y-14">
          {/* Agreement */}
          <section>
            <h3 className="text-3xl mb-4 text-[#323b3b]">
              1. Agreement to Terms
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              By accessing our website and services, you agree to be bound by
              these Terms of Service and all applicable laws and regulations. If
              you do not agree with any of these terms, you are prohibited from
              using or accessing our services.
            </p>

            <div className="flex gap-4 bg-gray-100 p-4 rounded-lg">
              <BsInfoCircle size={26} className="text-teal-700 mt-1" />
              <p className="text-lg text-gray-600">
                These terms apply to all users, visitors, and others who access
                or use our services.
              </p>
            </div>
          </section>
          {/* Intellectual Property */}
          <section>
            <h3 className="text-3xl mb-4 text-[#323b3b]">
              2. Intellectual Property Rights
            </h3>
            <p className="text-lg text-gray-600 tracking-tighter mb-8">
              Our service and its original content, features, and functionality
              are owned by us and are protected by international copyright,
              trademark, patent, trade secret, and other intellectual property
              laws.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg text-gray-600">
              <li>All content is our exclusive property</li>
              <li>You may not copy or modify the content</li>
              <li>Our trademarks may not be used without permission</li>
              <li>Content is for personal, non-commercial use only</li>
            </ul>
          </section>
          {/* User Accounts */}
          <section>
            <h3 className="text-3xl mb-4 text-[#323b3b]">3. User Accounts</h3>
            <p className="text-lg text-gray-600 tracking-tighter mb-8">
              When you create an account with us, you must provide accurate,
              complete, and current information. Failure to do so constitutes a
              breach of the Terms, which may result in immediate termination of
              your account.
            </p>

            <div className="border-l-4 border-teal-700 pl-4 py-3 rounded-lg flex gap-4">
              <BsExclamationTriangle size={30} className="text-teal-700" />
              <div>
                <h5 className="text-xl text-[#323b3b]">Important Notice</h5>
                <p className="text-lg text-gray-600">
                  You are responsible for safeguarding the password and for all
                  activities that occur under your account.
                </p>
              </div>
            </div>
          </section>
          {/* Prohibited */}
          <section>
            <h3 className="text-3xl mb-4 text-[#323b3b]">
              4. Prohibited Activities
            </h3>
            <p className="text-lg text-gray-600 tracking-tighter mb-8">
              You may not access or use the Service for any purpose other than
              that for which we make it available.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Systematic retrieval of data or content",
                "Publishing malicious content",
                "Engaging in unauthorized framing",
                "Attempting to gain unauthorized access",
              ].map((item, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <BsXCircle className="text-red-500" />
                  <span className="text-lg text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </section>
          {/*-- Disclaimers --*/}{" "}
          <div id="disclaimer" className="content-section">
            <h3 className="text-3xl text-[#323b3b] mb-4">5. Disclaimers</h3>
            <p className="text-lg text-gray-600 tracking-tighter mb-8">
              Your use of our service is at your sole risk. The service is
              provided "AS IS" and "AS AVAILABLE" without warranties of any
              kind, whether express or implied.
            </p>
            <div className="disclaimer-box">
              <p className="text-lg text-gray-600 tracking-tighter mb-5 font-semibold">
                We do not guarantee that:
              </p>
              <ul className="text-lg text-gray-600 space-y-2 list-disc pl-6 mb-6">
                <li>The service will meet your requirements</li>
                <li>The service will be uninterrupted or error-free</li>
                <li>Results from using the service will be accurate</li>
                <li>Any errors will be corrected</li>
              </ul>
            </div>
          </div>
          {/*-- Limitation of Liability --*/}{" "}
          <div id="limitation" className="content-section">
            {" "}
            <h3 className="text-3xl text-[#323b3b] mb-4">
              6. Limitation of Liability
            </h3>{" "}
            <p className="text-lg text-gray-600 tracking-tighter mb-8">
              In no event shall we be liable for any indirect, punitive,
              incidental, special, consequential, or exemplary damages arising
              out of or in connection with your use of the service.
            </p>
          </div>


          {/*-- Indemnification --*/}
          <div id="indemnification" className="content-section">
           
            <h3 className="text-3xl text-[#323b3b] mb-4">
              7. Indemnification
            </h3>
            <p className="text-lg text-gray-600 tracking-tighter mb-8">
              You agree to defend, indemnify, and hold us harmless from and
              against any claims, liabilities, damages, losses, and expenses
              arising out of your use of the service.
            </p>
          </div>

          {/*-- Termination --*/}
          <div id="termination" className="content-section">
           
            <h3 className="text-3xl text-[#323b3b] mb-4">
              8. Termination
            </h3>
            <p className="text-lg text-gray-600 tracking-tighter mb-8">
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason whatsoever, including
              without limitation if you breach the Terms.
            </p>
          </div>

          {/*-- Governing Law --*/}
          <div id="governing-law" className="content-section">
            {" "}
            <h3 className="text-3xl text-[#323b3b] mb-4">
              9. Governing Law
            </h3>{" "}
            <p className="text-lg text-gray-600 tracking-tighter mb-8">
              These Terms shall be governed by and construed in accordance with
              the laws of [Your Country], without regard to its conflict of law
              provisions.
            </p>
          </div>
          {/* Changes */}
          <section>
            <h3 className="text-3xl mb-4 text-[#323b3b]">
              10. Changes to Terms
            </h3>
           
           <p className="text-lg text-gray-600 tracking-tighter mb-8">
            We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
           </p>
            <div className="flex gap-4 bg-gray-100 p-4 rounded-lg">
              <BsBell size={26} className="text-teal-700" />
              <p className="text-lg text-gray-600">
                Continued use means acceptance of updated terms.
              </p>
            </div>
          </section>
        </div>

        {/* ===== CONTACT ===== */}
        <section
          className="mt-20 bg-gray-100 p-8 rounded-lg flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          data-aos="fade-up"
        >
          <div className="p-4 bg-teal-700 text-white rounded-lg">
            <BsEnvelope size={28} />
          </div>

          <div>
            <h4 className="text-3xl text-[#323b3b]">Questions About Terms?</h4>
            <p className="mt-2 text-lg text-gray-600">
              If you have any questions about these Terms, please contact us.
            </p>
            <a
              href="#"
              className="inline-block mt-4 px-6 py-3 rounded-full bg-teal-700 text-white"
            >
              Contact Support
            </a>
          </div>
        </section>
      </main>
    </section>
  );
}
