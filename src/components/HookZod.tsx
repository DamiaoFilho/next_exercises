import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User } from "@/types/types";

type Props = {
    setUser: (user: User) => void;
};

const formSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .min(3, "Name must be at least 3 characters"),
    email: z
        .string()
        .min(1, "Email is required")
        .email("Please enter a valid email address"),
    phone: z
        .string()
        .min(1, "Phone is required")
        .refine((value) => {
            const digits = value.replace(/\D/g, "");
            return digits.length >= 10 && digits.length <= 11;
        }, "Phone must be 10 digits (landline) or 11 digits (mobile)")
});

type FormData = z.infer<typeof formSchema>;

function formatPhone(value: string) {
    const digits = value.replace(/\D/g, "");
    
    if (digits.length <= 2) {
        return digits;
    } else if (digits.length <= 7) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    } else if (digits.length <= 10) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    } else {
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
    }
}

export default function HookZod({ setUser }: Props) {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: ""
        }
    });

    const phoneValue = watch("phone");

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhone(e.target.value);
        setValue("phone", formatted);
    };

    const onSubmit = (data: FormData) => {
        setUser(data);
    };

    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <label className="flex flex-col text-left">
                Name
                <input
                    {...register("name")}
                    className="border rounded px-2 py-1"
                    type="text"
                />
                {errors.name && (
                    <span className="text-red-500">{errors.name.message}</span>
                )}
            </label>

            <label className="flex flex-col text-left">
                Email
                <input
                    {...register("email")}
                    className="border rounded px-2 py-1"
                    type="email"
                />
                {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                )}
            </label>

            <label className="flex flex-col text-left">
                Phone
                <input
                    {...register("phone")}
                    className="border rounded px-2 py-1"
                    type="tel"
                    value={phoneValue}
                    onChange={handlePhoneChange}
                    maxLength={14}
                    placeholder="(11) 99999-9999"
                />
                {errors.phone && (
                    <span className="text-red-500">{errors.phone.message}</span>
                )}
            </label>

            <button
                className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600"
                type="submit"
            >
                Submit
            </button>
        </form>
    );
}
