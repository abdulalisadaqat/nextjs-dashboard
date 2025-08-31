import Form from "@/src/ui/invoices/edit-form";
import Breadcrumbs from "@/src/ui/invoices/breadcrumbs";
import { fetchCustomers, fetchInvoiceById } from "@/src/lib/data";
import { notFound } from "next/navigation";

import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Edit Invoice",
};

type PropsType = {
	params: Promise<{ id: string }>;
};
export default async function Page(props: PropsType) {
	const params = await props.params;
	const id = params.id;

	const [invoice, customers] = await Promise.all([
		fetchInvoiceById(id),
		fetchCustomers(),
	]);

	if (!invoice) notFound();

	return (
		<main>
			<Breadcrumbs
				breadcrumbs={[
					{ label: "Invoices", href: "/dashboard/invoices" },
					{
						label: "Edit Invoice",
						href: `/dashboard/invoices/${id}/edit`,
						active: true,
					},
				]}
			/>
			<Form invoice={invoice} customers={customers} />
		</main>
	);
}
