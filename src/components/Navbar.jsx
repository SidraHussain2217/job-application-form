import { FaBriefcase } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">

        <div className="flex items-center gap-3">

          <FaBriefcase
            className="text-blue-600 text-3xl"
          />

          <div>

            <h2 className="font-bold text-2xl">
              InsureHire
            </h2>

            <p className="text-gray-500 text-sm">
              Connecting Insurance Talent
            </p>

          </div>

        </div>

       <button
  onClick={() => {
    document
      .getElementById("apply-form")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
>
  Apply Now
</button>
      </div>

    </nav>
  );
}