import { ScanQrCode } from "lucide-react";
import InputFild from "./inputFild";

export  default function BankDetailsSection() {
    return <div className=' px-4 max-w-5xl mt-12 mx-auto w-full flex flex-col gap-4' >
      <div className=' w-fit mx-auto items-center flex flex-col gap-4' >
        <p className=' text-3xl md:text-4xl font-medium text-center' >Bank Details</p>
        <p className=' text-gray-600 text-center' >Add your bank details</p>
      </div>
      <div className=' flex flex-col gap-8 md:flex-row' >
        <div className=' flex shrink-0 flex-col max-w-56 mx-auto gap-4' >
          <p className=' text-3xl font-medium text-center md:text-left' >Bank Info</p>
          <p className=' text-gray-600 text-center md:text-left' >Set Up Your Bank Info</p>
          <img src='./qr.png' />
          <div className=' flex items-center gap-2 border rounded border-primary-red px-3 py-1.5'>
            <p className=' text-primary-red' >Generate a QR code</p>
            <ScanQrCode size={18} color='#b91c1c' />
          </div>
        </div>
        <div className=' flex flex-col gap-2 w-full' >
          <div className=' flex flex-col gap-2' >
            <div className=' w-full md:w-1/3' >
              <InputFild label={"IFSC Code"} />
            </div>
            <div className=' flex gap-2' >
              <div className=' w-full md:w-1/3' >
                <InputFild notNsc={true} disable={true} label={"Bank Name "} />
              </div>
              <div className=' w-full md:w-2/3' >
                <InputFild notNsc={true} disable={true} label={"Branch Name "} />
              </div>
            </div>
            <div className=' flex flex-col md:flex-row gap-2' >
              <div className=' w-full md:w-1/3' >
                <InputFild label={"Account Holder Name"} />
              </div>
              <div className=' w-full md:w-1/3' >
                <InputFild label={"Account Number"} />
              </div>
              <div className=' w-full md:w-1/3' >
                <InputFild label={"Confirm Account Number"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }