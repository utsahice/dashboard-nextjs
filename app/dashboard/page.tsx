import { cookies } from 'next/headers'

export default async function Dashboard() {
  const cookieStore = await cookies()
  const userEmail = cookieStore.get('user_email')?.value

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50'>
      <h1 className='text-5xl font-bold mb-5'>Welcome to Your Dashboard</h1>

      {userEmail ? (
        <>
          <p className='text-lg mb-6'>
            Logged in as: <span className='font-semibold'>{userEmail}</span>
          </p>
          <form action='/api/logout' method='POST'>
            <button
              type='submit'
              className='bg-red-600 text-white px-4 py-4 rounded-2xl'
            >
              Log Out
            </button>
          </form>
        </>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  )
}
