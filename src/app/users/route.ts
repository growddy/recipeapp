/*
export const users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
];

export async function GET() {
    return Response.json(users);
}
export async function POST(request: Request) {
    const user = await request.json();
    const newUser = {
        id: users.length + 1,
        name: user.name,
    };
    users.push(newUser);
    return new Response(JSON.stringify(newUser), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}
*/