import type { Request, Response } from "express";
export declare class OrderController {
    static createOrder(req: Request, res: Response): Promise<void>;
    static updateOrder(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static getOrders(req: Request, res: Response): Promise<void>;
    static deleteOrder(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static updateOrderStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=order.controller.d.ts.map