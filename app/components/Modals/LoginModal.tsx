"use client";

import CustomButton from "../Forms/CustomButton";
import Modal from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";

const LoginModal = () => {
  const loginModal = useLoginModal();

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

        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">The error message</div>

        <CustomButton label="Submit" onClick={() => console.log("Test")} />
      </form>
    </>
  );

  return (
    <Modal
      label="Log in to DjangoBNB"
      close={loginModal.close}
      content={content}
      isOpen={loginModal.isOpen}
    />
  );
};

export default LoginModal;
