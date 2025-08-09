export interface CreateOrderDTO {
    user: string;
    truck: string;
    status?: "created" | "in transit" | "completed";
    pickUp: string;
    dropOff: string;
}
export interface UpdateOrderDTO {
    user?: string;
    truck?: string;
    status?: "created" | "in transit" | "completed";
    pickUp?: string;
    dropOff?: string;
}
export interface UpdateOrderStatusDTO {
    status: "created" | "in transit" | "completed";
}
//# sourceMappingURL=order.dto.d.ts.map