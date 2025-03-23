import React from "react";
import { RiEditLine } from "react-icons/ri";
import cover from "../assets/Cover.png"


function CustomerDetailsForm({customer}) {
  return (
      <div className="flex-1">
        {/* Cover */}
        <div className={` w-full h-[200px] rounded-xl relative`}>
          <img
            src={cover}
            alt="background"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-4 bottom-4">
            <label
              htmlFor="image"
              className="w-20 h-20 bg-white rounded-full flex justify-center items-center cursor-pointer"
            ></label>
            <RiEditLine
              size={30}
              className="absolute -bottom-3 -right-3 p-2 text-sm text-white bg-[#514EF3] rounded-full -translate-x-1/2 -translate-y-1/2"
            />
            <input className="hidden" type="file" name="image" id="image" />
          </div>
        </div>
        {/* form */}
        <form className="mt-6 ">
          <div className="flex-col sm:flex-row flex justify-between gap-4">
            <div className="flex flex-col flex-1">
              <label className="font-semibold" htmlFor="name">
                First Name
              </label>
              <input
                className="outline-none p-4 rounded-xl bg-[#EEF6FB]"
                value={customer.firstName || ""}
                readOnly
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="font-semibold" htmlFor="name">
                Last Name
              </label>
              <input
                className="outline-none p-4 rounded-xl bg-[#EEF6FB]"
                value={customer.lastName || ""}
                readOnly
                type="text"
                name="name"
                id="name"
              />
            </div>
          </div>
          <div className="flex-col sm:flex-row mt-6 flex justify-between gap-4">
            <div className="flex flex-col flex-1">
              <label className="font-semibold" htmlFor="name">
                Email
              </label>
              <input
                className="outline-none p-4 rounded-xl bg-[#EEF6FB]"
                value={customer.email || ""}
                readOnly
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="font-semibold" htmlFor="name">
                Password
              </label>
              <input
                className="outline-none p-4 rounded-xl bg-[#EEF6FB]"
                value={customer.phone || ""}
                readOnly
                type="text"
                name="name"
                id="name"
              />
            </div>
          </div>
          <div className="mt-6 flex flex-col flex-1">
            <label className="font-semibold" htmlFor="name">
              Address
            </label>
            <input
              className="outline-none p-4 rounded-xl bg-[#EEF6FB]"
              value={customer.address || ""}
              readOnly
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="mt-6 flex-col sm:flex-row flex justify-between gap-4">
            <div className="flex flex-col flex-1">
              <label className="font-semibold" htmlFor="name">
                city
              </label>
              <input
                className="outline-none p-4 rounded-xl bg-[#EEF6FB]"
                value={customer.city || ""}
                readOnly
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="font-semibold" htmlFor="name">
                State
              </label>
              <input
                className="outline-none p-4 rounded-xl bg-[#EEF6FB]"
                value={customer.state || ""}
                readOnly
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="font-semibold" htmlFor="name">
                Zip
              </label>
              <input
                className="outline-none p-4 rounded-xl bg-[#EEF6FB]"
                value={customer.zip || ""}
                readOnly
                type="text"
                name="name"
                id="name"
              />
            </div>
          </div>
        </form>
      </div>
  );
}

export default CustomerDetailsForm;
