import { FaCloudUploadAlt, FaFilePdf, FaTrash } from "react-icons/fa";

import { useFormContext } from "react-hook-form";


export default function ResumeUpload() {
const  {
  register,
  setValue,
  watch,
  clearErrors,
  formState: { errors },
} = useFormContext();


  const file = watch("resume");

const handleFileChange = (e) => {
  const selectedFile = e.target.files[0];

  if (!selectedFile) return;

  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  if (!allowedTypes.includes(selectedFile.type)) {
    alert("Only PDF, DOC and DOCX files are allowed.");
    e.target.value = "";
    return;
  }

  if (selectedFile.size > 5 * 1024 * 1024) {
    alert("Maximum file size is 5 MB.");
    e.target.value = "";
    return;
  }

  // setFile(selectedFile);

  // React Hook Form
  setValue("resume", selectedFile, {
    shouldValidate: true,
        shouldDirty: true,
  shouldTouch: true,
  });
  clearErrors("resume"); // Clear any previous errors for the resume field
};
register("resume", {
  required: "Resume is required",
});

  return (
    <section className="bg-gray-50 py-12">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h2 className="text-3xl font-bold">
          Resume Upload
        </h2>

        <p className="text-gray-500 mt-2">
          Upload your latest resume.
        </p>

        <label
          htmlFor="resume"
          className="mt-8 flex flex-col items-center justify-center border-2 border-dashed border-blue-400 rounded-2xl h-72 cursor-pointer hover:bg-blue-50 transition"
        >

          <FaCloudUploadAlt className="text-6xl text-blue-600" />

          <h3 className="text-2xl font-semibold mt-4">
            Drag & Drop Resume
          </h3>

          <p className="text-gray-500 mt-2">
            or Click to Browse
          </p>

          <p className="text-sm text-gray-400 mt-4">
            PDF, DOC, DOCX (Max 5 MB)
          </p>
<input
  id="resume"
  type="file"
 
  accept=".pdf,.doc,.docx"
   className="hidden"
 
  onChange={
    handleFileChange     //
  }

/>
         

        </label>

{errors.resume && (
  <p className="text-red-500 text-sm mt-3 text-center">
    {errors.resume.message}
  </p>
)}
        {file && (

          <div className="mt-8 flex justify-between items-center bg-blue-50 rounded-xl p-4">

            <div className="flex items-center gap-4">

              <FaFilePdf className="text-red-500 text-3xl"/>

              <div>

                <h4 className="font-semibold">
                  {file.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>

              </div>

            </div>

            <button
            type="button"
              onClick={() =>{
                 // setFile(null);
                setValue("resume", null,{
                     shouldValidate: true,
                }); 
            }}
             // className="text-red-500 text-xl hover:scale-110 transition"
            >
              <FaTrash />
            </button>

          </div>

        )}

      </div>

    </section>
  );
}