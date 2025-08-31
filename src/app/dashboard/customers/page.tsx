import CustomersTable from "@/src/ui/customers/table";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Customers",
};
export default async function Customers(props: {
	searchParams?: Promise<{
		query?: string;
	}>;
}) {
	const searchParams = await props.searchParams;
	const query = searchParams?.query || "";
	return (
		<>
			<CustomersTable query={query} />
		</>
	);
}
