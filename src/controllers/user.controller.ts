import type { Request, Response  } from "express";
import type { RegisterUserDto, LoginUserDto } from "../dtos/user.dto.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model.js";




export class UserController {

    static async register(req: Request, res: Response): Promise<Response> {
        const { email, password }: RegisterUserDto = req.body;
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new UserModel({ email, password: hashedPassword });
            await newUser.save();
            return res.status(201).json({ message: "Usuario registrado exitosamente" });
        }
        catch (error) {
            return res.status(500).json({ message: "Error al registrar usuario", error });
        }

    }

    static async login(req: Request, res: Response): Promise<Response> {
        const { email, password }: LoginUserDto = req.body;
        try {
            const user = await UserModel.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: "Credenciales inválidas" });
            }
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: "1h" });
            return res.status(200).json({ message: "Login exitoso", token });
        }
        catch (error) {
            return res.status(500).json({ message: "Error al iniciar sesión", error });
        }

    }
}