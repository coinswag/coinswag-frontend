import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import showToast from "@/src/utils/showToast";

import Cookies from "js-cookie";

import { useNavigate } from "react-router-dom";

export function UserOptions() {
	const navigate = useNavigate();
	const handleLogOut = async()=> {
		try{
			Cookies.remove("coinswag-token");
			navigate("/login");
			showToast.success("Logout successful")

		}catch(error){
			if(error instanceof Error) {
				showToast.error(error.message)
			}
			console.log(error)
		}
	}
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<span className=" cursor-pointer h-8 w-8 rounded-full flex justify-center items-center">
					<img
						className="w-full rounded-full block"
						src="/images/no-profile.jpg"
						alt=""
					/>
				</span>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56 left-8">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem onClick={()=> navigate("/dashboard/profile")}>Profile</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem onClick={()=>navigate("/new-store")}>
						Create Store{" "}
						<DropdownMenuShortcut>
							<img
								className="w-4 invert-[.4]"
								src="/icons/add.svg"
								alt=""
							/>
						</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>All Stores</DropdownMenuItem>

			
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem disabled>GitHub</DropdownMenuItem>
				<DropdownMenuItem>Support</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={handleLogOut}>
					Log out
					<DropdownMenuShortcut>
						<img
							className="w-5 invert-[.4]"
							src="/icons/logout.svg"
							alt=""
						/>
					</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
