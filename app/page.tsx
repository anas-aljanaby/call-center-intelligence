import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/Card"
import { Settings, RefreshCw, AlertTriangle, Target, TrendingUp, ShieldPlus, Headphones, UserSquare, FileCheck } from "lucide-react"

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
      <section className="py-16">
        <Card
          tag="CONTACT CENTER SUCCESS"
          tagBgColor="bg-violet-600"
          bgColor="bg-yellow-300"
          title="Your Contact Center"
          subtitle="Optimized"
          description="From operations and customer service to sales and compliance, leverage conversation intelligence to achieve and exceed your strategic organizational goals."
          actionLabel="Learn more"
          actionHref="/learn-more"
          features={[
            {
              icon: <Settings className="w-16 h-16" />,
              title: "Operational Efficiency",
              description: "Improve cross-functional performance and reduce costs"
            },
            {
              icon: <RefreshCw className="w-16 h-16" />,
              title: "Conversion & Retention",
              description: "Scale high-quality, consistent customer experiences"
            },
            {
              icon: <AlertTriangle className="w-16 h-16" />,
              title: "Risk Mitigation",
              description: "Enforce compliant behavior with monitoring and in-app guidance"
            }
          ]}
        />

        {/* New Business Success Card */}
        <Card
          className="mt-8"
          tag="BUSINESS SUCCESS"
          tagFontColor="text-black"
          tagBgColor="bg-gray-100"
          bgColor="bg-violet-600"
          textColor="text-white"
          title="Your Enterprise"
          subtitle="Empowered"
          description="Expand the value of customer conversations beyond the contact center to support corporate plans and priorities."
          actionLabel="Learn more"
          actionFontColor=""
          actionHref="/learn-more"
          features={[
            {
              icon: <Target className="w-16 h-16" />,
              title: "Product Roadmap",
              description: "Get revenue-boosting product and service ideas from your buyers"
            },
            {
              icon: <TrendingUp className="w-16 h-16" />,
              title: "Engagement ROI",
              description: "See which engagement investments resonate the most"
            },
            {
              icon: <ShieldPlus className="w-16 h-16" />,
              title: "Financial Stability",
              description: "Protect the bottom line from costly compliance mistakes"
            }
          ]}
        />

        {/* Agent Success Card */}
        <Card
          className="mt-8"
          tag="AGENT SUCCESS"
          tagFontColor="text-black"
          tagBgColor="bg-gray-100"
          bgColor="bg-white"
          title="Your Agents"
          subtitle="Supported"
          description="Create a space where agents feel empowered to do their best work."
          actionLabel="Learn more"
          actionHref="/learn-more"
          features={[
            {
              icon: <Headphones className="w-16 h-16" />,
              title: "Customer Engagement",
              description: "Boost agent confidence with real-time guidance and prompts"
            },
            {
              icon: <UserSquare className="w-16 h-16" />,
              title: "Employee Growth",
              description: "Deliver personalized training based on specific engagement patterns"
            },
            {
              icon: <FileCheck className="w-16 h-16" />,
              title: "Streamlined Workflow",
              description: "Automate after-call notes"
            }
          ]}
        />
      </section>
    </div>
  );
}
