import Form from "@/src/ui/invoices/create-form";
import Breadcrumbs from "@/src/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/src/lib/data";

import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Create Invoice",
};
export default async function CreateInvoice() {
	const customers = await fetchCustomers();
	return (
		<main>
			<Breadcrumbs
				breadcrumbs={[
					{ label: "Invoices", href: "/dashboard/invoices" },
					{
						label: "Create Invoice",
						href: "/dashboard/invoices/create",
						active: true,
					},
				]}
			/>
			<Form customers={customers} />
		</main>
	);
}
