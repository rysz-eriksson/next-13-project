import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { formatPrice } from "../ui/utils";
import { CartGetByIdDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlRequest";
 
export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;
 
	if (!cartId) {
		redirect("/");
	}
 
	const { order: cart } = await executeGraphql(CartGetByIdDocument, {
		id: cartId,
	});
 
	if (!cart) {
		redirect("/");
	}
 
	return (
		<div>
			<h1>Order #{cart.id} summary</h1>
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{cart.orderItems.map((item) => {
						if (!item.product) {
							return null;
						}
						return (
							<tr key={item.product.id}>
								<td>{item.product.name}</td>
								<td>{item.quantity}</td>
								<td>{formatPrice(item.product.price)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}