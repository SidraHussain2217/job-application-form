import { useForm, FormProvider } from "react-hook-form";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import PersonalInfo from "../form/PersonalInfo";
import ProfessionalInfo from "../form/ProfessionalInfo";
import ResumeUpload from "../form/ResumeUpload";
import ApplicationDetails from "../form/ApplicationDetails";
import { toast } from "react-toastify";

export default function ApplyJob() {

  const methods = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
  console.log(data);

  toast.success("🎉 Application Submitted Successfully!");

  methods.reset();
};

  return (
    <>
      <Navbar />
      <Hero />

      <FormProvider {...methods}>

        <form onSubmit={methods.handleSubmit(onSubmit)}>

          <PersonalInfo />

          <ProfessionalInfo />

          <ResumeUpload />

          <ApplicationDetails />

        </form>

      </FormProvider>

    </>
  );
}