import React from "react";
import Item1 from "../Products/SameProduct";
import Card from "../Common/Card";

const Item = () => {
  return (
    <>
      <div className="w-full w-padding mx-auto max-w ">
        <div className="w-full grid grid-cols-1 justify-center items-center md:grid-cols-2 gap-10">
          <div className="w-full h-full flex flex-col gap-3 ">
            <div className="w-full  h-full bg-slate-200">
              <img className="w-full  h-full" src="/Images/item1.png" alt="1" />
            </div>
            <div className=" w-full  grid grid-cols-3 gap-3">
              <img className="w-full" src="/Images/item2.png" alt="1" />
              <img className="w-full" src="/Images/item3.png" alt="2" />
              <img className="w-full" src="/Images/item4.png" alt="3" />
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-col gap-5">
              <div className=" font-Mada font-bold text-3xl lg:text-[40px] text-[#0D1222]">
                Smart T-Shirt
              </div>
              <div className=" text-[#969696] text-sm lg:text-lg font-Poppins ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
                gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
                ullamcorper.
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                    fill="#FFD43C"
                  />
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                    fill="#FFD43C"
                  />
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                    fill="#FFD43C"
                  />
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                    fill="#FFD43C"
                  />
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                    fill="#FFD43C"
                  />
                </svg>

                <div className="ml-2 text-sm font-mada">(2k)</div>
              </div>

              <div className=" mt-2 text-[#0D1222] flex flex-col gap-3">
                <div className=" font-bold text-lg font-Poppins text-[#0D1222] ">
                  Quantity
                </div>

                <div className="w-full flex justify-between items-center">
                  <div className="border border-black flex gap-5 px-3 py-2 justify-center items-center">
                    <svg
                      width="18"
                      height="3"
                      viewBox="0 0 18 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5H16.5"
                        stroke="#DDDDDD"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>

                    <div className="font-bold font-mada text-xl">1</div>

                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.5 8.5H1M8.5 1V8.5V1ZM8.5 8.5V16V8.5ZM8.5 8.5H16H8.5Z"
                        stroke="#0D1222"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className=" font-Mada font-bold text-3xl lg:text-[40px] text-[#0D1222]">
                    $40 USD
                  </div>
                </div>
              </div>

              <div className="w-full flex gap-3 mt-5">
                <button className="btn-withbg w-full">Checkout</button>
                <div className="bg-gradient hover:bg-gray-200 px-2 text-white py-2 sm:text-lg font-bold rounded-sm hover:shadow-md animation">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.50353 11.9691C7.73956 10.0809 9.82049 9.04047 11.4726 9.98456L14.6766 11.8154C15.4965 12.2839 16.5029 12.2839 17.3227 11.8154L20.5267 9.98456C22.1789 9.04046 24.2598 10.0809 24.4958 11.9691L26.2917 26.3359C26.4906 27.9275 25.2496 29.3333 23.6456 29.3333H8.35376C6.74977 29.3333 5.50873 27.9275 5.70769 26.3359L7.50353 11.9691Z"
                      fill="white"
                    />
                    <path
                      d="M20 8V5.34722C20 3.86111 18.6768 2.66667 17.0646 2.66667H14.9354C13.308 2.66667 12 3.875 12 5.34722V8"
                      stroke="white"
                      stroke-width="1.6"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle
                      cx="12.0003"
                      cy="16.0001"
                      r="1.33333"
                      fill="#774BF6"
                    />
                    <circle
                      cx="20.0003"
                      cy="16.0001"
                      r="1.33333"
                      fill="#774BF6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full my-10 md:my-20 flex flex-col gap-10  justify-center items-center ">
          <div className=" font-mada text-3xl md:text-4xl lg:text-[40px] font-bold ">
            Same Product
          </div>
          <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-5">
            {Item1.map((val, index) => {
              console.log(index);
              return <Card key={val.id} {...val} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
