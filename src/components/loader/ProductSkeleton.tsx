
import { TableCell, TableRow } from "@/src/components/ui/table";
import { Skeleton } from "../ui/skeleton";



export default function ProductSkeleton() {
	return (
		<TableRow>
			<TableCell className="hidden sm:table-cell">
				<Skeleton className="aspect-square rounded-md object-cover h-[64px] w-[64px]" />
			</TableCell>
			<TableCell className="font-medium">
				<Skeleton className="h-4 w-full" />
			</TableCell>
			<TableCell>
			<Skeleton className="h-4 w-full" />
			</TableCell>
			<TableCell>
         <Skeleton className="h-4 w-full" />
			</TableCell>
			<TableCell className="hidden md:table-cell">
         <Skeleton className="h-4 w-full" />
			</TableCell>
			<TableCell className="hidden md:table-cell">
			<Skeleton className="h-4 w-full" />
			</TableCell>
			<TableCell>
			<Skeleton className="h-4 w-full" />
			</TableCell>
		</TableRow>
	);
}
