import { ArrowLeft, CheckCheck, Info } from "lucide-react";
import InputFild from "./inputFild";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";

export default function PromoteMyStoreSection() {
  const [selected, setSelected] = useState("Silver");
  const types = ["Silver", "Gold", "Platinum"];
  return (
    <div className=" max-w-6xl px-4 mt-12 mx-auto w-full flex flex-col gap-4">
      <div className=" w-fit mx-auto items-center flex flex-col gap-4">
        <p className=" text-3xl md:text-4xl font-medium text-center">
          Profile Setup
        </p>
        <p className=" text-gray-600 text-center">
          Manage all your account settings and preferences
        </p>
      </div>
      <div className=" flex flex-col w-full gap-4">
        <div className=" flex flex-col gap-2">
          <div className=" flex gap-2 items-center">
            <p className=" font-semibold text-lg">Subscription Plan</p>
            <IButton />
          </div>
          <SelectPlan
            selected={selected}
            setSelected={setSelected}
            types={types}
          />
        </div>
        <div className=" px-4 md:px-0 flex gap-4 flex-col md:flex-row max-w-3xl mx-auto w-full">
          <div className=" flex flex-col gap-2 rounded-md border h-96 w-full border-primary-red p-3">
            <p className=" border-b-2 text-primary-red font-semibold text-lg py-2 text-center">
              Silver
            </p>
            <p>
              {" "}
              <span className=" text-primary-red">-</span> Free Listing
            </p>
            <p>
              {" "}
              <span className=" text-primary-red">-</span> Get discovered InTown
              through search
            </p>
            <div className=" h-full flex items-end justify-center">
              <img src="./silver.png" className="" />
            </div>
          </div>
          <div className=" flex from-yellow-200 via-20% via-yellow-50 to-yellow-500 bg-gradient-to-b flex-col gap-2 rounded-md border h-96 w-full border-primary-red p-3">
            <p className=" border-b-2 text-primary-red font-semibold text-lg py-2 text-center">
              Gold
            </p>
            <p>
              {" "}
              <span className=" text-primary-red">-</span> Gold - Enhanced
              Visibility
            </p>
            <p>
              {" "}
              <span className=" text-primary-red">-</span> Get featured in
              prominent app sections and update your offers monthly
            </p>
            <div className="  h-full flex items-end justify-center">
              <img src="./gold.png" className="" />
            </div>
          </div>
          <div className=" flex from-zinc-200 via-20% via-zinc-50 to-zinc-400 bg-gradient-to-b flex-col gap-2 rounded-md border h-96 w-full border-primary-red p-3">
            <p className=" border-b-2 text-primary-red font-semibold text-lg py-2 text-center">
              Platinum
            </p>
            <p>
              {" "}
              <span className=" text-primary-red">-</span> Platinum - Maximum
              Exposure
            </p>
            <p>
              {" "}
              <span className=" text-primary-red">-</span>{" "}
              Get premium placement, weekly offer updates, and priority support
            </p>
            <div className=" h-full flex items-end justify-center">
              <img src="./platinum.png" className="" />
            </div>
          </div>
        </div>
        <div className=" max-w-3xl flex-col md:flex-row mx-auto w-full flex gap-6">
          <InputFild label={"offer Days"} notNsc={true} />
          <InputFild label={"offer Hours"} notNsc={true} />
          <InputFild
            label={"Maximum changes per offer"}
            disable={true}
            notNsc={true}
          />
        </div>
        <div className=" max-w-x2l w-full mx-auto flex flex-col gap-2">
          <p className=" text-xl font-semibold">Plan Pricing</p>
          <ShowPricing selected={selected} />
        </div>
      </div>
      <div className=" w-full max-w-6xl px-4 mx-auto justify-end flex gap-4 items-end">
        {/* <img
          src="/swipe-animation.gif"
          alt="Swipe Animation"
          className="hidden"
        /> */}
        <Link
          href={`/vendor-dashbord?form=3`}
          className=" flex items-center gap-2 w-fit rounded-md text-primary-red border-primary-red border px-4 py-2"
        >
          <p className=" font-semibold">Back</p>
          <ArrowLeft size={20} />
        </Link>
        <Link
          href={"/"}
          className=" w-fit rounded-md text-white flex items-center gap-2 bg-primary-red px-4 py-2"
        >
          <p className=" font-semibold">Finish</p>
          <CheckCheck color="white" size={20} />
        </Link>
      </div>
    </div>
  );
}

const planData = [
  {
    name: "Silver",
    data: ["500 / month", "2000 / Quaterly", "6000 / Yearly"],
  },
  {
    name: "Gold",
    data: ["1500 / month", "6000 / Quaterly", "18,000 / Yearly"],
  },
  {
    name: "Platinum",
    data: ["5000 / month", "20,000 / Quaterly", "60,000 / Yearly"],
  },
];

function ShowPricing({ selected }) {
  return (
    <div className="w-full flex-col md:flex-row flex max-w-xl gap-6">
      {planData.map((data) => {
        const isSelected = data.name === selected;
        return (
          <div key={data.name} className=" w-full max-w-52 flex flex-col">
            <p className=" text-primary-red">{data.name}</p>
            {data.data?.map((item) => {
              return (
                <p
                  className={isSelected ? "text-black" : "text-gray-400"}
                  key={item}
                >
                  {item}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function SelectPlan({ selected, setSelected, types }) {
  return (
    <div className=" flex cursor-pointer w-fit  gap-4">
      {types.map((item, index) => (
        <div
          onClick={() => setSelected(item)}
          key={index}
          className=" flex gap-1 items-center"
        >
          <input
            checked={selected === item}
            onChange={() => setSelected(item)}
            name="radio"
            type="radio"
            className="w-fit"
          />

          <p
            className={`${selected === item ? "text-black" : " text-gray-400"}`}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

const plans = [
  {
    name: "Silver",
    features: ["✅ Free Listing", "✅ Get discovered InTown through search"],
    pricing: { monthly: 500, quarterly: 2000, yearly: 6000 },
  },
  {
    name: "Gold",
    features: [
      "✅ Enhanced Visibility",
      "✅ Featured in prominent app sections",
      "✅ Update offers monthly",
    ],
    pricing: { monthly: 1500, quarterly: 6000, yearly: 18000 },
  },
  {
    name: "Platinum",
    features: [
      "✅ Maximum Exposure",
      "✅ Premium placement",
      "✅ Weekly offer updates",
      "✅ Priority support",
    ],
    pricing: { monthly: 5000, quarterly: 20000, yearly: 60000 },
  },
];

function IButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Info className="cursor-pointer" size={20} color="#666" />
      </DialogTrigger>

      <DialogContent
        showCloseButton={true}
        className="sm:max-w-[600px] h-full max-h-[80vh] overflow-y-auto p-6 rounded-lg"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center">
            Subscription Plans
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Compare and choose the best plan for your needs
          </DialogDescription>
        </DialogHeader>

        {/* Pricing Table */}
        <div className="overflow-x-auto min-h-48 h-full mt-4">
          <table className="w-full h-full border border-gray-300 rounded-md">
            <thead>
              <tr className="bg-gray-200 text-gray-800">
                <th className="p-3 text-left">Plan</th>
                <th className="p-3 text-center">Monthly</th>
                <th className="p-3 text-center">Quarterly</th>
                <th className="p-3 text-center">Yearly</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, index) => (
                <tr
                  key={plan.name}
                  className={`border-b text-gray-700 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="p-3 font-semibold">{plan.name}</td>
                  <td className="p-3 text-center">₹{plan.pricing.monthly}</td>
                  <td className="p-3 text-center">₹{plan.pricing.quarterly}</td>
                  <td className="p-3 text-center">₹{plan.pricing.yearly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Feature List */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">Plan Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="border border-gray-300 rounded-lg p-4 bg-gray-50"
              >
                <h4 className="text-md font-semibold mb-2">{plan.name}</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
