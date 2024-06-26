
export type ServerResponse<T = any> = {
	data: T ;
	message: string;
	success: boolean;
 };
