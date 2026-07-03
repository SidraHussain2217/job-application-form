import { useFormContext } from "react-hook-form";
import { positions } from "../data/positions";
import { departments } from "../data/departments";
import {
  FaBriefcase,
  FaBuilding,
  FaUserTie,
  FaMoneyBillWave,
  FaClock,
} from "react-icons/fa";

export default function ProfessionalInfo() {
  const {

register,

formState:{ errors },

}=useFormContext();
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h2 className="text-3xl font-bold text-gray-800">
          Professional Information
        </h2>

        <p className="text-gray-500 mt-2">
          Tell us about your professional background.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {/* Position Applied For */}
          <div>
            <label className="font-semibold">
              Position Applied For *
            </label>

            <div className="relative mt-2">
              <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <select
  {...register("position", {
    required: "Please select a position",
  })}
    className={`w-full pl-12 pr-4 py-4 rounded-xl outline-none transition ${
    errors.position
      ? "border-2 border-red-500"
      : "border border-gray-300 focus:ring-2 focus:ring-blue-500"
  }`}
>
  <option value="">Select Position</option>

  {positions.map((position) => (
    <option key={position} value={position}>
      {position}
    </option>
  ))}
</select>
              {errors.position && (
  <p className="text-red-500 text-sm mt-2">
    {errors.position.message}
  </p>
)}
            </div>
          </div>

          {/* Department */}
          <div>
            <label className="font-semibold">
              Department
            </label>
<select
  {...register("department", {
    required: "Department is required",
  })}
  className={`mt-2 w-full px-4 py-4 rounded-xl outline-none transition ${
    errors.department
      ? "border-2 border-red-500"
      : "border border-gray-300 focus:ring-2 focus:ring-blue-500"
  }`}
>
  <option value="">Select Department</option>

  {departments.map((department) => (
    <option key={department} value={department}>
      {department}
    </option>
  ))}
</select>


       
          {errors.department && (
  <p className="text-red-500 text-sm mt-2">
    {errors.department.message}
  </p>  
          )}
          </div>

          {/* Current Company */}
          <div>
            <label className="font-semibold">
              Organization Name
            </label>

            <div className="relative mt-2">
              <FaBuilding className="absolute left-4 top-4 text-gray-400" />

              <input
                type="text"
                placeholder="Current Company"
                  {...register("company", {
                    required: "Organization Name is required",
                  })}
  className={`w-full pl-12 py-4 rounded-xl outline-none transition ${
        errors.company
          ? "border-2 border-red-500"
          : "border border-gray-300 focus:ring-2 focus:ring-blue-500"
      }`}
              />
            </div>
              {errors.company && (
    <p className="text-red-500 text-sm mt-2">
      {errors.company.message}
    </p>
  )}

          </div>

          {/* Designation */}
          <div>
            <label className="font-semibold">
              Current Designation
            </label>

            <div className="relative mt-2">
              <FaUserTie className="absolute left-4 top-4 text-gray-400" />

              <input
                type="text"
                placeholder="Your Job Title"
                  {...register("designation", {
                    required: "Designation is required"
                  })}
                className={`w-full pl-12 py-4 rounded-xl outline-none transition ${
                  errors.designation
                    ? "border-2 border-red-500"
                    : "border border-gray-300 focus:ring-2 focus:ring-blue-500"
                }`}
              />
            </div>
            {errors.designation && (
  <p className="text-red-500 text-sm mt-2">
    {errors.designation.message}
  </p>
)}
          </div>

          {/* Experience */}
          <div>
            <label className="font-semibold">
              Total Experience
            </label>

            <select
              {...register("experience", {
                required: "Experience is required"
              })}
              className={`mt-2 w-full px-4 py-4 rounded-xl outline-none transition ${
  errors.experience
    ? "border-2 border-red-500"
    : "border border-gray-300 focus:ring-2 focus:ring-blue-500"
}`}
            >
              <option value="">Select Experience</option>
              <option>Fresher</option>
              <option>0-1 Years</option>
              <option>1-3 Years</option>
              <option>3-5 Years</option>
              <option>5-10 Years</option>
              <option>10+ Years</option>
            </select>
            {errors.experience && (
  <p className="text-red-500 text-sm mt-2">
    {errors.experience.message}
  </p>
)}
          </div>

          {/* Notice Period */}
          <div>
            <label className="font-semibold">
              Notice Period
            </label>

            <div className="relative mt-2">
              <FaClock className="absolute left-4 top-4 text-gray-400" />

              <select
                {...register("noticePeriod",
                  {
                    required: "Notice Period is required"
                  }
                )}
               className={`w-full pl-12 pr-4 py-4 rounded-xl outline-none transition ${
  errors.noticePeriod
    ? "border-2 border-red-500"
    : "border border-gray-300 focus:ring-2 focus:ring-blue-500"
}`}
              >
                <option value="">Select Notice Period</option>
                <option>Immediate</option>
                <option>15 Days</option>
                <option>30 Days</option>
                <option>45 Days</option>
                <option>60 Days</option>
                <option>90 Days</option>
              </select>
            </div>
            {errors.noticePeriod && (
  <p className="text-red-500 text-sm mt-2">
    {errors.noticePeriod.message}
  </p>
)}
          </div>

          {/* Current Salary */}
          <div>
            <label className="font-semibold">
              Current Salary
            </label>

            <div className="relative mt-2">
              <FaMoneyBillWave className="absolute left-4 top-4 text-gray-400" />

              <input
                type="number"
                placeholder="50000"
                  {...register("currentSalary", {
                    required: "Current Salary is required"
                  })}
                className={`w-full pl-12 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.currentSalary ? "border-2 border-red-500" : ""
                }`}
              />
            </div>
            {errors.currentSalary && (
  <p className="text-red-500 text-sm mt-2">
    {errors.currentSalary.message}
  </p>
)}
          </div>

          {/* Expected Salary */}
          <div>
            <label className="font-semibold">
              Expected Salary
            </label>

            <div className="relative mt-2">
              <FaMoneyBillWave className="absolute left-4 top-4 text-gray-400" />

              <input
                type="number"
                placeholder="70000"
                {...register("expectedSalary", {
    required: "Expected Salary is required",
     min: {
    value: 1000,
    message: "Salary must be greater than 1000",
  },
  })}
                className={`w-full pl-12 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.expectedSalary ? "border-2 border-red-500" : ""
                }`}
              />
              {errors.expectedSalary && (
  <p className="text-red-500 text-sm mt-2">
    {errors.expectedSalary.message}
  </p>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}