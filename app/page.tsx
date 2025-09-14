// app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Baddies</h1>
      <p className="text-gray-400 mb-8">A simple hub linking to my other sites</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <a
          href="https://example1.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl text-lg font-semibold text-center shadow-lg hover:scale-105 transition"
        >
          Site One
        </a>

        <a
          href="https://example2.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl text-lg font-semibold text-center shadow-lg hover:scale-105 transition"
        >
          Site Two
        </a>

        <a
          href="https://example3.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl text-lg font-semibold text-center shadow-lg hover:scale-105 transition"
        >
          Site Three
        </a>
      </div>
    </main>
  )
}
