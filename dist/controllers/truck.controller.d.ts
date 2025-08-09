import type { Request, Response } from "express";
export declare class TruckController {
    static registerTruck(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static updateTruck(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static getTrucks(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static deleteTruck(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=truck.controller.d.ts.map