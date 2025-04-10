import { Link } from "react-router-dom"
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Send,
  Shield,
  Clock,
  Award,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 mb-2">
                Quantity Takeoff
              </h3>
              <p className="text-slate-300">
                Professional quantity takeoff software for construction estimators, contractors, and engineers.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-slate-300 text-sm">Trusted by 10,000+ professionals</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-slate-300 text-sm">24/7 customer support</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-slate-300 text-sm">Industry-leading accuracy</span>
              </div>
            </div>

            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors p-2 bg-slate-800 rounded-full"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors p-2 bg-slate-800 rounded-full"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors p-2 bg-slate-800 rounded-full"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors p-2 bg-slate-800 rounded-full"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">

              <li>
                <Link
                  to="/blog"
                  className="text-slate-300 hover:text-blue-400 transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-500 transform group-hover:translate-x-1 transition-transform" />
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-300 hover:text-blue-400 transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-500 transform group-hover:translate-x-1 transition-transform" />
                  About Us
                </Link>
              </li>

            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative inline-block">
              Resources
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/help"
                  className="text-slate-300 hover:text-blue-400 transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-500 transform group-hover:translate-x-1 transition-transform" />
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/tutorials"
                  className="text-slate-300 hover:text-blue-400 transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-500 transform group-hover:translate-x-1 transition-transform" />
                  Video Tutorials
                </Link>
              </li>
              <li>
                <Link
                  to="/documentation"
                  className="text-slate-300 hover:text-blue-400 transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-500 transform group-hover:translate-x-1 transition-transform" />
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-slate-300 hover:text-blue-400 transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-500 transform group-hover:translate-x-1 transition-transform" />
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-slate-300 hover:text-blue-400 transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-500 transform group-hover:translate-x-1 transition-transform" />
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">support@quantitake.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  123 Construction Ave, Suite 456
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-colors"
              >
                Get in Touch
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} QuantiTake. All rights reserved.</p>
            <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
        {/* <WavyBackground /> */}
      </div>
      
    </footer>
  )
}

