import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quantity Takeoff</h3>
            <p className="text-slate-300 text-sm">
              Professional quantity takeoff software for construction estimators, contractors, and engineers.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">

              <li>
                <a href="/blog" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="/about" className="text-slate-300 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/help" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/tutorials" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Video Tutorials
                </a>
              </li>
              <li>
                <a href="/careers" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">support@quantitake.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  123 Construction Ave, Suite 456
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} QuantiTake. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="/cookies" className="text-slate-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

