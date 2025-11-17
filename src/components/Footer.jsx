export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-700">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400" />
          <span className="font-semibold">EstateAI</span>
        </div>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} EstateAI. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}
