import { useFormContext} from "react-hook-form";

import { FaUser, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";
import { nationalities } from "../data/nationalities";
import { countries } from "../data/countries";
export default function PersonalInfo() {
  
    const {
    register,
    formState: { errors },
  } = useFormContext();

  
  return (
    <section id ="apply-form" className="bg-gray-50 py-20">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h2 className="text-4xl font-bold text-center text-gray-800">
          Apply for Job
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Fill in your personal information below.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {/* Full Name */}

          <div>

            <label className="font-semibold">
              Full Name *
            </label>

            <div className="relative mt-2">

              <FaUser className="absolute left-4 top-4 text-gray-400"/>

              <input
              type="text"
              placeholder="Enter your full name"
              {...register("fullName", {
    required: "Full Name is required",
  })}
                className={`w-full pl-12 pr-4 py-4 rounded-xl outline-none transition ${
    errors.fullName
      ? "border-2 border-red-500"
      : "border border-gray-300 focus:ring-2 focus:ring-blue-500"
  }`}
              />
              {errors.fullName && (
  <p className="text-red-500 text-sm mt-1">
    {errors.fullName.message}
  </p>
)}

            </div>

          </div>

          {/* Email */}

          <div>

            <label className="font-semibold">
              Email *
            </label>

            <div className="relative mt-2">

              <FaEnvelope className="absolute left-4 top-4 text-gray-400"/>

              <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
    required: "Email is required",
    
pattern:{

value:/^\S+@\S+\.\S+$/,

message:"Invalid Email"
}
  })}
            className={`w-full pl-12 pr-4 py-4 rounded-xl outline-none transition ${
  errors.email
    ? "border-2 border-red-500"
    : "border border-gray-300 focus:ring-2 focus:ring-blue-500"
}`}
              />
{
errors.email&&

<p className="text-red-500">

{errors.email.message}

</p>

}
            </div>

          </div>

          {/* Phone */}

          <div>

            <label className="font-semibold">
              Phone Number *
            </label>

            <div className="relative mt-2">

              <FaPhone className="absolute left-4 top-4 text-gray-400"/>

              <input
              type="tel"
              placeholder="+971 5X XXX XXXX"
              {...register("phone", {
    required: "Phone Number is required",
    minLength:{

value:10,

message:"Minimum 10 digits"

}
  })}
className={`w-full pl-12 pr-4 py-4 rounded-xl outline-none transition ${
  errors.phone
    ? "border-2 border-red-500"
    : "border border-gray-300 focus:ring-2 focus:ring-blue-500"
}`}
              />

{errors.phone && (
  <p className="text-red-500 text-sm mt-1">
    {errors.phone.message}
  </p>
)}
            </div>

          </div>

          {/* DOB */}

          <div>

            <label className="font-semibold">
              Date of Birth
            </label>

            <input
            type="date"
             {...register("dob", {
    required: "Date of Birth is required",
  })}
            className={`w-full px-4 py-4 rounded-xl outline-none transition ${
  errors.dob
    ? "border-2 border-red-500"
    : "border border-gray-300 focus:ring-2 focus:ring-blue-500"
}`}
            />
{errors.dob && (
  <p className="text-red-500 text-sm mt-1">
    {errors.dob.message}
  </p>
)}
          </div>

          {/* Nationality */}

          <div>

            <label className="font-semibold">
              Nationality
            </label>

            <div className="relative mt-2">

              <FaGlobe className="absolute left-4 top-4 text-gray-400"/>

              <select
               {...register("nationality", {
    required: "Nationality is required",
  })}
              className={`w-full pl-12 pr-4 py-4 rounded-xl outline-none transition ${
  errors.nationality
    ? "border-2 border-red-500"
    : "border border-gray-300 focus:ring-2 focus:ring-blue-500"
}`}
 >

 <option value="">Select Nationality</option>

  {nationalities.map((nationality) => (
    <option key={nationality} value={nationality}>
      {nationality}
    </option>
  ))}
              

              </select>
{errors.nationality && (
  <p className="text-red-500 text-sm mt-1">
    {errors.nationality.message}
  </p>
)}
            </div>

          </div>

          {/* Current Country */}

          <div>

            <label className="font-semibold">
              Current Country
            </label>

            <select
              {...register("country", {
    required: "Country is required",
  })}
           className={`w-full px-4 py-4 rounded-xl outline-none transition ${
  errors.country
    ? "border-2 border-red-500"
    : "border border-gray-300 focus:ring-2 focus:ring-blue-500"
}`}>
 <option value="">Select Country</option>

  {countries.map((country) => (
    <option key={country} value={country}>
      {country}
    </option>
  ))}
            

            </select>

{errors.country && (
  <p className="text-red-500 text-sm mt-1">
    {errors.country.message}
  </p>
)}
          </div>

          {/* Current City */}

          <div>

            <label className="font-semibold">
              Current City
            </label>

            <input
            type="text"
            placeholder="Dubai"
             {...register("city", {
    required: "City is required",
  })}
           className={`w-full px-4 py-4 rounded-xl outline-none transition ${
  errors.city
    ? "border-2 border-red-500"
    : "border border-gray-300 focus:ring-2 focus:ring-blue-500"
}`}
            />
{errors.city && (
  <p className="text-red-500 text-sm mt-1">
    {errors.city.message}
  </p>
)}
          </div>

          {/* LinkedIn */}

          <div>

            <label className="font-semibold">
              LinkedIn Profile
            </label>

            <input
            type="url"
            placeholder="https://linkedin.com/in/username"
            className="mt-2 w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />

          </div>

        </div>

      </div>

    </section>
  );
}