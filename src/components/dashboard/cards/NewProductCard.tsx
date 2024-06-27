import { Button } from "@/src/components/ui/button";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/src/components/ui/sheet";

export function NewProductCard() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<button className="flex items-center justify-between bg-primary text-sm text-white gap-1 px-4 py-2 font-bold rounded-md">
					<img className="w-5 invert" src="/icons/add.svg" alt="" />
					Create Product
				</button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle className="text-2xl">Create Merch</SheetTitle>
					<SheetDescription>
						Provide the details below to create a new merch in your shop.
					</SheetDescription>
				</SheetHeader>

				<SheetFooter>
					<SheetClose asChild>
						<Button type="submit">Save changes</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
