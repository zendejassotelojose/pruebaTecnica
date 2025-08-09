import type { Request, Response } from "express";
export declare class locationController {
    static createLocation(req: Request, res: Response): Promise<void>;
    static getLocations(req: Request, res: Response): Promise<void>;
    static deleteLocation(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static updateLocation(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=location.controller.d.ts.map