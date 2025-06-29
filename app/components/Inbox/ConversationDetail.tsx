'use client';

import CustomButton from "@/app/components/Forms/CustomButton";

const ConversationDetail = () => {
  return (
    <>
      <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
        <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
          <p className="font-bold text-gray-500">John Doe</p>
          <p>Message from the renter</p>
        </div>

        <div className="w-[80%] ml-auto py-4 px-6 rounded-xl bg-blue-200">
          <p className="font-bold text-gray-500">Shahrukh Azhar Ahsan</p>
          <p>Message from the host</p>
        </div>
      </div>

      <div className="fixed bottom-4 left-4 right-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
        <input type="text" placeholder="Type your message..." className="w-full p-2 bg-gray-200 rounded-xl" />
        
        <CustomButton className="w-[100px]" label="Send" onClick={() => console.log("Clicked")} />
      </div>
    </>
  );
};

export default ConversationDetail;
