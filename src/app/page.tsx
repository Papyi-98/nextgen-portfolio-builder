export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            NextGen Portfolio Builder
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Create stunning developer portfolios with AI-powered content suggestions,
            beautiful templates, and one-click deployment.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/dashboard"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Get Started
            </a>
            <a
              href="/templates"
              className="inline-block border border-gray-300 dark:border-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              View Templates
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
