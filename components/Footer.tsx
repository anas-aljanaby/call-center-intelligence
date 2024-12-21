import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 mt-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side */}
          <div className="space-y-4">
            <Image
              src="/debran-logo.svg"
              alt="Logo"
              width={150}
              height={150}
            />
            <p className="text-sm text-gray-600">© 2024 All Rights Reserved</p>
          </div>

          {/* Right side */}
          <div className="space-y-4">
            {/* Links */}
            <div className="flex flex-wrap gap-6 justify-end">
              <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/cookie" className="text-sm text-gray-600 hover:text-gray-900">
                Cookie Policy
              </Link>
              <Link href="/security" className="text-sm text-gray-600 hover:text-gray-900">
                Security
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-end">
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
              </Link>
            </div>

            {/* Address */}
            <div className="text-right text-sm text-gray-600">
              <p>275 Shoreline Drive</p>
              <p>Suite #450</p>
              <p>Redwood City, CA</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 