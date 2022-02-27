import React from "react";

type Props = {};

const Story = (props: Props) => {
  return (
    <div className="sm:p-5  md:p-10 xl:p-28">
      <div className="p-5 py-10 lg:p-20 bg-white space-y-10">
        <div className="text-center text-3xl font-bold">OUR STORY</div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div
            className="h-96 w-full overflow-hidden p-5 bg-center ease-in duration-300"
            style={{
              backgroundImage: `url("img1.jpeg")`,
            }}
          >
            <div className="w-full h-full border p-5 flex items-end text-3xl font-bold text-white justify-center">
              Our Story
            </div>
          </div>
          <div className="md:col-span-2">
            SLR Techno & Trade Pvt. Ltd. is a trading firm established in the
            year 2012 to capitalize the growing automobile sector in Nepal. SLR
            was appointed as the sole authorized distributor of Motorhead
            motorcycles for Nepal by Chongqing Fuego Power Co. Ltd. Motorhead
            Motorcycle is a Guinness world record holding company based in
            China. Motorhead earned its world record in 2015 for longest journey
            in a motorcycle, travelling over 35,000km in a single journey. We
            specialize in offering the premium quality off-road and dual sport
            motorcycles in an affordable price range. However, we are not only
            limited to selling Motorhead bikes, we also strive to provide
            reliable after sales support to our costumers. Our dealership
            network is established across the major cities of Nepal.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
