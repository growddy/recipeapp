export const users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
  ];
  
  export async function GET({ params }: { params: { id: string } }) {
    const userId = parseInt(params.id, 10); // Convert the ID from string to number
    const user = users.find((u) => u.id === userId);
  
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        headers: { "Content-Type": "application/json" },
        status: 404,
      });
    }
  
    return new Response(JSON.stringify(user), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
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
  