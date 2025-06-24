"use client";

import CustomButton from "../Forms/CustomButton";
import Modal from "./Modal";
import useSignUpModal from "@/app/hooks/useSignUpModal";

const SignUpModal = () => {
  const signUpModal = useSignUpModal();

  const content = (
    <>
      <form className="space-y-4">
        <input
          placeholder="Your email"
          type="email"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        <input
          placeholder="Your password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        <input
          placeholder="Repeat password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          The error message
        </div>

        <CustomButton label="Submit" onClick={() => console.log("Test")} />
      </form>
    </>
  );

  return (
    <Modal
      label="SignUp to DjangoBNB"
      close={signUpModal.close}
      content={content}
      isOpen={signUpModal.isOpen}
    />
  );
};

export default SignUpModal;
