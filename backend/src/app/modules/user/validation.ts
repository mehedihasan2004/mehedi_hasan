import { z } from "zod";
import { E_ROLE } from "../../../enums/common";

const ZCreateUser = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required!" }),
    email: z.string({ required_error: "Email is required!" }).email(),
    role: z
      .enum([...Object.keys(E_ROLE)] as [string, ...string[]])
      .default(E_ROLE.VISITOR)
      .optional(),
    image: z.string().optional(),
    messages: z.array(z.string()).optional(),
  }),
});

export const UserValidation = { ZCreateUser };
