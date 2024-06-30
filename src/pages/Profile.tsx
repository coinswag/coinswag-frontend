import useCurrentUser from "../hooks/useCurrentUser";

function Profile() {
	const { currentUser } = useCurrentUser();
	return (
		<div>
			<div className=" relative h-[10rem] bg-primary">
				<div className="absolute -translate-x-1/2 -translate-y-12 left-1/2 top-full flex flex-col justify-center ">
					<img
						className="bg-white p-2 shadow-lg w-[6rem] h-[6rem] rounded-full block mx-auto"
						src="/images/no-profile.jpg"
						alt=""
					/>
				</div>
			</div>
			<div className="text-center pt-12">
				<h2 className="font-bold text-xl flex justify-center items-center gap-1 text-gray-800">{currentUser?.username} <img className="w-7" src="/icons/verified.svg" alt="" /></h2>
            <p className=" text-gray-500 text-[.79rem]">{currentUser?.email}</p>
			</div>
		</div>
	);
}
export default Profile;
