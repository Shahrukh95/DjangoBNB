import Image from "next/image";

const RenterReservationsPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <h1 className="my-6 text-2xl">My reservations</h1>

      <div className="space-y-4">
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src={"/beach_1.jpg"}
                alt="Beach House"
                className="hover:scale-110 object-cover transition h-full w-full"
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 space-y-2">
            <h2 className="mb-4 text-xl">Property Name</h2>
            <p><strong>Check in date: </strong>14/2/2024</p>
            <p><strong>Check out date: </strong>16/2/2024</p>

            <p><strong>Number of nights: </strong>2</p>
            <p><strong>Total Price: </strong>$200</p>

            <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">Go to property</div>
          </div>

        </div>



        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src={"/beach_1.jpg"}
                alt="Beach House"
                className="hover:scale-110 object-cover transition h-full w-full"
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 space-y-2">
            <h2 className="mb-4 text-xl">Property Name</h2>
            <p><strong>Check in date: </strong>14/2/2024</p>
            <p><strong>Check out date: </strong>16/2/2024</p>

            <p><strong>Number of nights: </strong>2</p>
            <p><strong>Total Price: </strong>$200</p>

            <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">Go to property</div>
          </div>

        </div>


      </div>
    </main>
  );
};

export default RenterReservationsPage;
