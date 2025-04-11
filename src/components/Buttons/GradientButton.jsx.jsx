import { Link } from "react-router-dom"

const GradientButton = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 overflow-hidden"
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
    </Link>
  )
}

export default GradientButton
