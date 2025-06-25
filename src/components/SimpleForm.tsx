import { useState } from "react";
import { User } from "@/types/types";

type Props = {
    setUser: (user: User) => void;
};

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

export default function SimpleForm({ setUser }: Props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { name?: string; email?: string; phone?: string } = {};

        if (!name) newErrors.name = "Name is required.";
        else if (name.length < 3) newErrors.name = "Name must be at least 3 characters.";

        if (!email) newErrors.email = "Email is required.";

        const digits = phone.replace(/\D/g, "");
        if (!phone) newErrors.phone = "Phone is required.";
        else if (digits.length < 10 || digits.length > 11) {
            newErrors.phone = "Phone must be 10 digits (landline) or 11 digits (mobile).";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setUser({ name, email, phone });
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        setPhone(formatPhone(input));
    };

    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
        >
            <label className="flex flex-col text-left">
                Name
                <input
                    className="border rounded px-2 py-1"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                {errors.name && <span className="text-red-500">{errors.name}</span>}
            </label>
            <label className="flex flex-col text-left">
                Email
                <input
                    className="border rounded px-2 py-1"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                {errors.email && <span className="text-red-500">{errors.email}</span>}
            </label>
            <label className="flex flex-col text-left">
                Phone
                <input
                    className="border rounded px-2 py-1"
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength={14} 
                    placeholder="(11) 99999-9999"
                />
                {errors.phone && <span className="text-red-500">{errors.phone}</span>}
            </label>
            <button
                className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
                type="submit"
            >
                Submit
            </button>
        </form>
    );
}