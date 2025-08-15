const Footer = () => {
  return (
    <footer className="relative border-t border-slate-200/60 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-emerald-400" />
              <span className="font-black">Zyntap</span>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300/90 max-w-md">
              Modern software, designed to move. We fuse aesthetics and
              engineering to deliver delightful products.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">Company</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-blue-500">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-blue-500">
                  Process
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#contact" className="hover:text-blue-500">
                  Get Proposal
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@zyntap.dev"
                  className="hover:text-blue-500"
                >
                  hello@zyntap.dev
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Zyntap. All rights reserved.</span>
          <span className="opacity-80">Made with ❤️ + motion</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
