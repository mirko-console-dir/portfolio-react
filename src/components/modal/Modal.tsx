import { lock } from "@/assets/works";
import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
};
const Modal = ({ isOpen, onClose, title }: ModalProps) => {
  const handleOnClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  if (isOpen) {
    return (
      <div>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none no-select">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full neumorphism__out__modal outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">{title}</h3>
                <img
                    src={lock}
                    alt="source code"
                    className="w-8 h-auto object-contain rotate-12"
                    />
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                  Unfortunately, this repository is private. To respect the
                  privacy of the company I worked for, I cannot share the base
                  code. However, I would be happy to demonstrate the features I
                  implemented during an interview.
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 neumorphism__out font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded"
                  type="button"
                  onClick={handleOnClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
      </div>
    );
  }
};
export default Modal;
