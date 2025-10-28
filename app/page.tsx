import { cookies } from 'next/headers';

export default async function Home() {
  const cookieStore = await cookies(); 
  const userEmail = cookieStore.get('user_email')?.value;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>

      {userEmail ? (
        <>
          <p className="text-lg text-gray-700 mb-6">
            Logged in as: <span className="font-semibold">{userEmail}</span>
          </p>
          <form action="/api/logout" method="POST">
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Log Out
            </button>
          </form>
        </>
      ) : (
        <p className="text-gray-500">No user data found.</p>
      )}
    </div>
  );
}
