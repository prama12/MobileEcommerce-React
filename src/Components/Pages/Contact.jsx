import React from "react";
import ContactComponent from "../Common/Contact-component";

const Contact = () => {
  return (
    <>
      {/* hero section  */}
      <div className="w-full h-fit hero-gradient">
        <div className="w-full max-w w-padding relative">
          <div className="w-full grid sm:grid-cols-2 xl:mb-32 mb-5 ">
            <div className="w-full flex flex-col gap-7">
              <div className=" font-Mada font-bold text-white text-4xl">
                Contact
              </div>
              <div className=" font-Poppins text-[#F4F4F4] text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
                gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
                ullamcorper.
              </div>
            </div>
          </div>
          <div className=" relative xl:absolute mx-auto xl:-bottom-32 xl:left-[10%] 2xl:left-[20%] grid md:grid-cols-2 lg:flex items-center justify-center gap-5 sm:gap-10 sm:p-5 xl:p-0">
            <div>
              <ContactComponent
                svg={
                  <svg
                    width="14"
                    height="23"
                    viewBox="0 0 14 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 0.199951C10.88 0.199951 14 3.35995 14 7.23995C14 13.96 7 22.76 7 22.76C7 22.76 0 13.96 0 7.23995C0 3.35995 3.12 0.199951 7 0.199951ZM7 10.68C8.84 10.68 10.32 9.19995 10.32 7.35995C10.32 5.51995 8.84 3.99995 7 3.99995C5.16 3.99995 3.68 5.51995 3.68 7.35995C3.68 9.19995 5.16 10.68 7 10.68Z"
                      fill="white"
                    />
                  </svg>
                }
                title="location"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. "
              />
            </div>
            <div>
              <ContactComponent
                svg={
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.124198 5.71983C0.166198 5.35784 0.327198 5.0178 0.604198 4.69869L4.4442 0.86945C4.7432 0.614167 4.9672 0.657047 5.1162 0.997092L8.2202 6.80478C8.3912 7.14482 8.3372 7.4749 8.0602 7.794L6.6522 9.19806C6.3962 9.45334 6.2472 9.78341 6.2042 10.1873C6.2042 10.8255 6.5352 11.6442 7.1962 12.6444C7.8572 13.6446 8.5082 14.4952 9.1482 15.1982L10.1402 16.2183C10.4392 16.5165 10.8222 16.8835 11.2932 17.3192C11.7622 17.755 12.5352 18.3294 13.6122 19.0424C14.6892 19.7554 15.5382 20.1114 16.1562 20.1114C16.5612 20.1114 16.9032 19.9728 17.1802 19.6966L18.8452 18.0372C19.1442 17.7391 19.4632 17.6962 19.8042 17.9096L25.4052 21.1964C25.5542 21.2821 25.6402 21.3928 25.6612 21.5314C25.6822 21.67 25.6402 21.7927 25.5332 21.8984L21.6932 25.7276C21.3732 26.0038 21.0312 26.1644 20.6702 26.2053C19.6242 26.3549 18.4452 26.2113 17.1332 25.7745C15.8212 25.3377 14.6062 24.7583 13.4862 24.0354C12.3662 23.3124 11.3262 22.5785 10.3662 21.8346C9.4062 21.0897 8.6382 20.4514 8.0622 19.9199L7.2302 19.1212C7.0172 18.9088 6.7342 18.6166 6.3822 18.2436C6.0302 17.8707 5.4152 17.1388 4.5402 16.0428C3.6652 14.9469 2.9082 13.8779 2.2682 12.8358C1.6282 11.7938 1.0742 10.6071 0.604198 9.27783C0.135198 7.94856 -0.0248016 6.7619 0.124198 5.71983Z"
                      fill="white"
                    />
                  </svg>
                }
                title="Contact"
                content="T-shirt12@gmail.com"
                content2="(021) 12345678"
              />
            </div>
          </div>
        </div>
      </div>

      {/* contact from  */}
      <div className=" w-full w-padding mb-20 max-w">
        <div className=" font-Mada font-bold text-3xl sm:text-[40px] xl:mt-40 mt-5 sm:mt-10 text-center">
          Send a Message
        </div>

        <div className="sm:w-10/12 mt-10 mx-auto  ">
          <form className="flex flex-col gap-5 xsm:gap-10">
            <div className="grid sm:grid-cols-2 gap-5 xsm:gap-10 ">
              <input
                className="contact-form"
                type="text"
                name="fname"
                placeholder="First Name"
              />
              <input
                className="contact-form"
                type="text"
                name="lname"
                placeholder="Last Name"
              />
            </div>
            <div className="">
              <input
                className="contact-form"
                type="text"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div className="">
              <textarea
                className="contact-form h-48"
                name="description"
                placeholder="Description"
              />
            </div>
            <div className=" flex justify-center items-center mt-5 ">
              <div className=" w-fit">
                <button className="btn-withbg">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
