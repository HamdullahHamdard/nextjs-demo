import { revalidatePath } from "next/cache";

type MokeUser = {
    id: number;
    name: string;
};

export default async function MockUsers(){
    const res = await fetch("https://679f4aa624322f8329c3463d.mockapi.io/users");
    const users = await res.json();

    async function addUser(formData: FormData){
        "use server"
        const name = formData.get("name");
        const res = await fetch("https://679f4aa624322f8329c3463d.mockapi.io/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Authorization: "Bearer YOUR_PRIVATE_KEY"
            },
            body: JSON.stringify({name}),
        });
        const newUser = await res.json();
        revalidatePath('mock-users');
        console.log(newUser);
    }

    return (
        <div className="py-10">
        <form action={addUser} className="mb-4">
            <input type="text" name="name" required className="border text-black rounded-lg p-2 mr-2" />
            <button className="inline-flex items-center justify-center px-8 py-2 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg">
                Add User
            </button>
        </form>
        <div className="grid grid-cols-10 gap-4 py-10">
            {
                users.map((user: MokeUser) => (
                    <div key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                        {user.name}
                    </div>
                ))
            }
        </div>
        </div>
    );
}