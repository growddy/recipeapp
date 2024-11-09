"use client";
import { useRouter } from "next/navigation";

export default function Create() {
    const router = useRouter();
    return (
        <div>
            <h1>Create A New Recipe</h1>
            <button
                onClick={() => router.push("/")}
                className="bg-blue-500 text-white p-2 rounded-md"
                >
                Return Home
            </button>
        </div>
    );
}