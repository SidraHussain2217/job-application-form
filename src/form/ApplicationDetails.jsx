import { useFormContext } from "react-hook-form";

import { FaMapMarkerAlt, FaLanguage } from "react-icons/fa";

export default function ApplicationDetails() {
  const {
  register,
  formState: { errors },
} = useFormContext();

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h2 className="text-3xl font-bold">
          Application Details
        </h2>

        <p className="text-gray-500 mt-2">
          Tell us more about yourself.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {/* Preferred Location */}
          <div>
            <label className="font-semibold">
              Preferred Job Location
            </label>

            <div className="relative mt-2">
              <FaMapMarkerAlt className="absolute left-4 top-4 text-gray-400" />

              <select
                {...register("preferredLocation", {
                  required: "Preferred Location is required"
                })}
                className={`w-full pl-12 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.preferredLocation ? "border-2 border-red-500" : ""
                }`}
              >
                <option value="">Select Location</option>
                <option>Dubai</option>
                <option>Abu Dhabi</option>
                <option>Sharjah</option>
                <option>Riyadh</option>
                <option>Jeddah</option>
                <option>Doha</option>
                <option>Kuwait City</option>
                <option>Muscat</option>
                <option>Bahrain</option>
              </select>
              {errors.preferredLocation && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.preferredLocation.message}
                </p>
              )}
            </div>
          </div>

          {/* Joining Date */}
          <div>
            <label className="font-semibold">
              Available Joining Date
            </label>

            <input
              type="date"
             
             className="mt-2 w-full border rounded-xl p-4 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Languages */}
          <div>
            <label className="font-semibold">
              Languages Known
            </label>

            <div className="relative mt-2">
              <FaLanguage className="absolute left-4 top-4 text-gray-400" />

              <input
                type="text"
                placeholder="English, Hindi, Urdu"
                {...register("languages", {
                  required: "Languages Known is required"
                })}
                className={`w-full pl-12 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.languages ? "border-2 border-red-500" : ""
                }`}
              />
            </div>
            {errors.languages && (
  <p className="text-red-500 text-sm mt-2">
    {errors.languages.message}
  </p>
)}
          </div>

          {/* Skills */}
          <div>
            <label className="font-semibold">
              Skills
            </label>

            <input
              type="text"
              placeholder="Enter your technical and soft skills separated by commas"
              className="mt-2 w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

        </div>

        {/* Cover Letter */}

        <div className="mt-10">

          <label className="font-semibold">
            Cover Letter
          </label>

          <textarea
            rows="7"
            placeholder="Write a short cover letter explaining why you are the best candidate for this position..."
            className="mt-2 w-full border rounded-xl p-4 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
          />

        </div>

        {/* Declaration */}

        <div className="mt-8 flex items-start gap-3">

          <input
            type="checkbox"
            className="mt-1 h-5 w-5 accent-blue-600"
          />

          <p className="text-gray-600">
            I confirm that all the information provided above is true and
            accurate. I agree to the company's recruitment policy.
          </p>

        </div>

        {/* Submit Button */}

        <button
          className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition"
        >
          Submit Application →
        </button>

      </div>
    </section>
  );
}