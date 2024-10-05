
export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}