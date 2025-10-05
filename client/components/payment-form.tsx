import { PaymentFormInput, PaymentFormSchema } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

export default function PaymentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInput>({
    resolver: zodResolver(PaymentFormSchema),
  });

  const router = useRouter();

  const handlePayment: SubmitHandler<PaymentFormInput> = (data) => {};

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handlePayment)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm text-gray-300 font-medium">
          Name on Card
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          placeholder="Enter your full name"
          className="border border-gray-700 focus:border-gray-100 rounded-lg outline-none py-2 px-3"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardNumber"
          className="text-sm text-gray-300 font-medium"
        >
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          {...register("cardNumber")}
          placeholder="Enter your card number"
          className="border border-gray-700 focus:border-gray-100 rounded-lg outline-none py-2 px-3"
        />
        {errors.cardNumber && (
          <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="expiryDate"
          className="text-sm text-gray-300 font-medium"
        >
          Expiry Date
        </label>
        <input
          type="text"
          id=" expiryDate"
          {...register("expiryDate")}
          placeholder="Enter your expiry date (MM/YY)"
          className="border border-gray-700 focus:border-gray-100 rounded-lg outline-none py-2 px-3"
        />
        {errors.expiryDate && (
          <p className="text-red-500 text-sm">{errors.expiryDate.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-sm text-gray-300 font-medium">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          {...register("cvv")}
          placeholder="Enter your CVV"
          className="border border-gray-700 focus:border-gray-100 rounded-lg outline-none py-2 px-3"
        />
        {errors.cvv && (
          <p className="text-red-500 text-sm">{errors.cvv.message}</p>
        )}
      </div>
      <div className="flex items-center gap-2 mt-4 px-4">
        <Image
          src="/klarna.png"
          alt="Card Payment"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/cards.png"
          alt="Card Payment"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/stripe.png"
          alt="Card Payment"
          width={50}
          height={25}
          className="rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-100 text-gray-800 p-2 rounded-lg cursor-pointer flex items-center justify-center hover:bg-white/75 hover:text-black transition-colors"
      >
        Checkout
        <ShoppingCart className="ml-2 w-5 h-5" />
      </button>
    </form>
  );
}
