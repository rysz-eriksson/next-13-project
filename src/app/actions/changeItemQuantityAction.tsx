"use server";

import { revalidatePath } from "next/cache";
import { changeCartItemQuantity } from "@/api/cart";

export const changeItemQuantity = async (itemId: string, quantity: number) => {
    console.log(itemId, quantity)
    const order = await changeCartItemQuantity(itemId, quantity);
    if (!(order && order.quantity !== undefined && order.quantity !== null)) {
        throw new Error(`Failed to change quantity of item ${itemId}`);
    }

    revalidatePath("/cart/");
}