import { ShippingFormInput, ShippingFormSchema } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

export default function ShippingForm({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInput) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInput>({
    resolver: zodResolver(ShippingFormSchema),
  });

  const router = useRouter();

  const handleShipping: SubmitHandler<ShippingFormInput> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShipping)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="fullName" className="text-sm text-gray-300 font-medium">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          {...register("fullName")}
          placeholder="Enter your full name"
          className="border border-gray-700 focus:border-gray-100 rounded-lg outline-none py-2 px-3"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm text-gray-300 font-medium">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          placeholder="Enter your email address"
          className="border border-gray-700 focus:border-gray-100 rounded-lg outline-none py-2 px-3"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-sm text-gray-300 font-medium">
          Phone Number
        </label>
        <input
          type="text"
          id="phone"
          {...register("phone")}
          placeholder="Enter your phone number"
          className="border border-gray-700 focus:border-gray-100 rounded-lg outline-none py-2 px-3"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-sm text-gray-300 font-medium">
          Address
        </label>
        <input
          type="text"
          id="address"
          {...register("address")}
          placeholder="Enter your address"
          className="border border-gray-700 focus:border-gray-100 rounded-lg outline-none py-2 px-3"
        />
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-sm text-gray-300 font-medium">
          City
        </label>
        <input
          type="text"
          id="city"
          {...register("city")}
          placeholder="Enter your city"
          className="border border-gray-700 focus:border-gray-100 rounded-lg outline-none py-2 px-3"
        />
        {errors.city && (
          <p className="text-red-500 text-sm">{errors.city.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-gray-100 text-gray-800 p-2 rounded-lg cursor-pointer flex items-center justify-center hover:bg-white/75 hover:text-black transition-colors"
      >
        Continue
        <ArrowRight className="ml-2 w-5 h-5" />
      </button>
    </form>
  );
}
