export default function TestPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Test Page</h1>
        <p className="text-gray-600">If you can see this, Next.js is working.</p>
        <div className="mt-4 space-y-2">
          <a href="/simple-auth" className="block text-blue-600 hover:underline">
            → Try Simple Auth
          </a>
          <a href="/auth" className="block text-blue-600 hover:underline">
            → Try Auth Page
          </a>
          <a href="/contact" className="block text-blue-600 hover:underline">
            → Go to Contact
          </a>
        </div>
      </div>
    </div>
  );
}
