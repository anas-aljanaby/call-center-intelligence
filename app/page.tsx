import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
      <section className="py-20 text-center">
        {/* Overline text */}
        <p className="text-sm font-medium uppercase tracking-wider mb-6">
          THE AI PLATFORM FOR CONTACT CENTERS
        </p>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8">
          Turn every <span className="italic">customer conversation</span>
          <br />
          into automated action
        </h1>

        {/* Subheading text */}
        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-10">
          Observe.AI combines conversation intelligence with AI-powered
          automation to help you evaluate 100% of your customer interactions,
          support agents and sellers in real time and post-interaction, and
          boost customer satisfaction—all while reducing operating costs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors"
          >
            Schedule a demo
          </Link>
          <Link
            href="/experience"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-violet-600 text-violet-600 font-medium hover:bg-violet-50 transition-colors"
          >
            Experience Observe.AI
          </Link>
        </div>

        {/* Dashboard */}
        <div>
          <Image
            src="/dashboard_screencap/dashboard.png"
            alt="dashboard"
            width={2160}
            height={960}
          />
        </div>
      </section>
    </div>
  );
}
