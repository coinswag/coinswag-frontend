import { Skeleton } from "../ui/skeleton";
import { Fragment, ReactNode } from "react";

type Props = { children: ReactNode; loading: boolean };

function TextLoader(props: Props) {
	return (
		<Fragment>
			{props.loading ? <Skeleton className=" w-12 h-7" /> : props.children}
		</Fragment>
	);
}
export default TextLoader;
