import React, { useEffect, useState } from "react";
import {
  useWriteContract,
  useWaitForTransactionReceipt,
  useAccount,
} from "wagmi";
import { Button } from "@/src/components/ui/button";
import { Input } from "../../ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import StockList from "../lists/StockList";
import { merchStoreAbi } from "@/src/lib/abi";
import { parseEventLogs } from "viem";

import useCurrentStore, { ProductProps } from "@/src/hooks/useCurrentStore";
import toast from "react-hot-toast";
import showToast from "@/src/utils/showToast";
import usePost from "../../../hooks/usePost";

// Assume you have your contract ABI and address

export function NewProductCard() {
  const { writeContract, data: hash } = useWriteContract();
  const { currentStore, addProduct } = useCurrentStore();
  const {
    data: txReceipt,
    isLoading: isConfirming,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({
    hash,
  });

  const { postData } = usePost();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null as File | null,
    price: 22n,
    stock: 8n,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { isDisconnected } = useAccount();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, image: e.target.files![0]! }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    if (currentStore) {
      writeContract({
        address: currentStore.storeAddress as `0x${string}`,
        abi: merchStoreAbi,
        functionName: "createProduct",
        args: [formData.name, formData.description, 22n, 3n, "M"],
      });
    } else {
      toast.error("no store state available.");
    }
  };

  useEffect(() => {
    if (isDisconnected) {
      showToast.error("Please connect your wallet");
      setIsLoading(false);
      return;
    }

    const createProductOnBackend = async () => {
      if (txReceipt && isConfirmed) {
        const parsedLogArgs = parseEventLogs({
          logs: txReceipt.logs,
          abi: merchStoreAbi,
          eventName: "ProductCreated",
        })[0].args;

        const product: ProductProps = {
          isActive: true,
          name: parsedLogArgs.name,
          price: Number(parsedLogArgs.price),
          quantity: Number(parsedLogArgs.quantity),
          productId: parsedLogArgs.productId.toString(),
          description: "Place holder description",
          size: "M",
          imageUri: "https://localhost:3000/sample",
        };
        try {
          const result = await postData("/product", JSON.stringify(product));
          addProduct(product);
          console.log("result from backend call: ", result);
          showToast.success("product created Successfully");
        } catch (error) {
          if (error instanceof Error) {
            console.log(error);
            showToast.error("Error creating product");
          }
        } finally {
          setIsLoading(false);
        }
      }
    };

    createProductOnBackend();
  }, [
    txReceipt,
    isConfirmed,
    postData,
    isDisconnected,
    isConfirming,
    addProduct,
  ]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center justify-between bg-primary text-sm text-white gap-1 px-4 py-2 font-bold rounded-md">
          <img className="w-5 invert" src="/icons/add.svg" alt="" />
          Create Product
        </button>
      </SheetTrigger>
      <SheetContent className="w-[45%] overflow-y-auto new__product__card">
        <SheetHeader>
          <SheetTitle className="text-2xl">Create Merch</SheetTitle>
          <SheetDescription>
            Provide the details below to create a new merch in your shop.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-1.5 mt-6">
            <Label className="mb-2 required" htmlFor="name">
              Name
            </Label>
            <Input
              required
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full h-10"
            />
            <span className="text-gray-500 text-sm">
              Give your product a short and clear name.
            </span>
          </div>
          <div className="grid w-full items-center gap-1.5 mt-6">
            <Label className="mb-2 required" htmlFor="description">
              Description
            </Label>
            <Textarea
              required
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full h-18 resize-none"
            />
            <span className="text-gray-500 text-sm">
              Give your product a short and clear description.
            </span>
          </div>
          <div className="grid w-full items-center gap-1.5 mt-6">
            <Label className="mb-2 required" htmlFor="image">
              Product Image
            </Label>
            <Input
              type="file"
              id="image"
              name="image"
              onChange={handleImageUpload}
              accept="image/jpeg,image/png"
              className="hidden"
            />
            <label
              htmlFor="image"
              className="border border-spacing-4 border-dashed border-gray-400 rounded-xl flex flex-col items-center py-9 hover:border-solid hover:border-primary cursor-pointer"
            >
              <img
                className="w-8 invert-[.5] mb-2"
                src="/icons/upload.svg"
                alt=""
              />
              <p className="font-semibold text-[1rem]">
                Click here to add a product image
              </p>
              <span className="text-[.7rem] text-gray-400">
                Supports only JPG, JPEG and PNG
              </span>
            </label>
            {formData.image && (
              <div className="flex justify-between items-center gap-3 border border-gray-300 px-4 py-3 rounded-lg border-dashed">
                <img
                  className="w-16"
                  src={URL.createObjectURL(formData.image)}
                  alt="Uploaded"
                />
                <div className="mr-auto">
                  <p className="font-semibold text-gray-800">
                    {formData.image.name}
                  </p>
                  <span className="text-gray-500">
                    {(formData.image.size / 1024).toFixed(2)}kB
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, image: null }))
                  }
                  className="w-8 h-8 rounded-full flex justify-center items-center bg-gray-400 p-1"
                >
                  <img className="invert" src="/icons/cancel.svg" alt="" />
                </button>
              </div>
            )}
          </div>
          <StockList />
          <SheetFooter className="mt-4">
            <Button className="w-full py-6" type="submit" disabled={isLoading}>
              {isLoading ? "Processing..." : "Save changes"}
            </Button>
          </SheetFooter>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </SheetContent>
    </Sheet>
  );
}
