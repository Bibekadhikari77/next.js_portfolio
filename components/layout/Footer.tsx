import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-20">
      <div className="container-base py-10 flex flex-col md:flex-row gap-6 md:items-center justify-between">
        <div className="text-sm space-y-1 max-w-xl">
          <p>© {new Date().getFullYear()} Bibek Adhikari. All rights reserved.</p>
          <p className="text-neutral-600 dark:text-neutral-400">
            Passionate full‑stack developer crafting performant, user-focused web apps.{' '}
            <a href="#contact" className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
              Get in touch →
            </a>
          </p>
        </div>
        <div className="flex gap-4 text-xl">
          <a href="https://github.com/Bibekadhikari77?tab=repositories" aria-label="GitHub" className="hover:text-primary-500"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/bibek-adhikari-0a1a13264/" aria-label="LinkedIn" className="hover:text-primary-500"><FiLinkedin /></a>
          <a href="https://x.com/BibekAd26314563" aria-label="Twitter" className="hover:text-primary-500"><FiTwitter /></a>
        </div>
      </div>
    </footer>
  );
}
