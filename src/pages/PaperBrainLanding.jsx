import { useState } from "react";
import {
  Upload,
  MessageCircle,
  Zap,
  ChevronRight,
  Menu,
  X,
  FileText,
} from "lucide-react";

const PaperBrainLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Elegant Header */}
      <header className="py-3 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-md fixed w-full z-50 border-b border-gray-100">
        <div className="md:container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-serif italic text-rose-500 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-rose-600 to-rose-900 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent">
              PaperBrain
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-12">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-rose-900 transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-900 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <button className="hidden lg:block bg-gradient-to-r from-rose-600 to-rose-900 text-white px-8 py-3 rounded-full hover:shadow-lg transition duration-300 transform hover:-translate-y-0.5">
            Begin Your Journey
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="md:container mx-auto py-4 px-4">
            <div className="flex flex-col space-y-4">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-rose-900 transition-all duration-300"
                >
                  {item}
                </a>
              ))}
              <button className="bg-gradient-to-r from-rose-900 to-rose-800 text-white px-6 py-2 rounded-full">
                Begin Your Journey
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="md:container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="text-5xl lg:text-6xl font-serif leading-tight mb-6 bg-gradient-to-r from-rose-900 to-rose-800 bg-clip-text text-transparent">
                  Chat with Your Documents Like Never Before
                </h1>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  Transform any PDF into an intelligent conversation partner.
                  Upload, ask, and discover insights hidden in your documents
                  with our cutting-edge AI technology.
                </p>
                <div className="flex space-x-6 items-center">
                  <button className="bg-gradient-to-r from-rose-900 to-rose-800 text-white px-8 py-3 rounded-full hover:shadow-lg transition duration-300 transform hover:-translate-y-0.5">
                    Start Chat
                  </button>
                  <a
                    href="#"
                    className="text-rose-900 font-semibold flex items-center hover:text-rose-800 transition-all duration-300"
                  >
                    Our Process <ChevronRight className="ml-2" />
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-20"></div>
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { label: "Documents Processed", value: "10k+" },
                      { label: "Questions Answered", value: "50K+" },
                      { label: "Accuracy Rate", value: "99.9%" },
                      { label: "Response Time", value: "< 2s" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="text-center p-4 rounded-xl bg-gray-50"
                      >
                        <div className="text-2xl font-bold text-rose-900 mb-2">
                          {stat.value}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="md:container mx-auto max-w-6xl">
            <h2 className="text-4xl font-serif text-center mb-16 text-gray-900">
              Powerful Features That Amaze
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Upload className="w-8 h-8" />,
                  title: "Smart Document Upload",
                  description:
                    "Drag & drop PDFs and watch our AI instantly process and understand your content",
                },
                {
                  icon: <MessageCircle className="w-8 h-8" />,
                  title: "Intelligent Conversations",
                  description:
                    "Ask complex questions and get precise answers backed by your document content.",
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Lightning Fast Search",
                  description:
                    "Powered by advanced vector search technology for instant, relevant results.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-900/5 to-rose-800/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6 text-rose-900">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="md:container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-rose-900 to-rose-800 rounded-2xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/api/placeholder/800/400')] opacity-10 mix-blend-overlay"></div>
              <h2 className="text-3xl font-serif mb-6 relative z-10">
                Ready to Transform Your Document Workflow?
              </h2>
              <p className="text-xl mb-8 text-rose-100 relative z-10">
                Join thousands of professionals who are already using DocuChat
                AI to unlock insights from their documents.
              </p>
              <button className="bg-white text-rose-900 px-8 py-4 rounded-full hover:shadow-lg transition duration-300 transform hover:-translate-y-0.5 relative z-10">
                Begin Your Journey
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="md:container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 text-2xl font-serif italic text-rose-500 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-rose-600 to-rose-900 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <span className="bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent">
              PaperBrain
            </span>
              </div>

              <p className="text-gray-400">
                Transforming document interaction with advanced AI technology.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "Services", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-rose-500 transition duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">hello@luxeseo.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {["LinkedIn", "Twitter", "Instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-rose-500 transition duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2024 PaperBrain. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PaperBrainLanding;
