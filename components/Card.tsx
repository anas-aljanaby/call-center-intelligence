import { cn } from "@/lib/utils"
import Link from "next/link"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tag?: string
  tagFontColor?: string
  tagBgColor?: string
  bgColor?: string
  textColor?: string
  title: string
  subtitle?: string
  description: string
  actionLabel?: string
  actionHref?: string
  actionFontColor?: string
  features?: {
    icon: React.ReactNode
    title: string
    description: string
  }[]
}

export function Card({
  tag,
  tagFontColor = "text-white",
  tagBgColor = "bg-violet-600",
  bgColor = "bg-white",
  textColor = "text-gray-900",
  title,
  subtitle,
  description,
  actionLabel,
  actionHref,
  actionFontColor = "text-violet-600",
  features,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl p-8 shadow-[0_10px_30px_rgba(124,_58,_237,_0.3)]",
        bgColor,
        textColor,
        className
      )}
      {...props}
    >
      {tag && (
        <span
          className={cn(
            "inline-block rounded-full px-4 py-1 text-sm font-bold mb-6",
            tagBgColor,
            tagFontColor
          )}
        >
          {tag}
        </span>
      )}

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-4xl font-serif mb-2">
            {title}
            {subtitle && (
              <>
                : <span className="italic">{subtitle}</span>
              </>
            )}
          </h2>
          <p className="text-lg opacity-90 mb-4">
            {description}
          </p>

          {actionLabel && actionHref && (
            <Link
              href={actionHref}
              className={cn(
                "inline-flex items-center hover:opacity-80 font-medium",
                actionFontColor
              )}
            >
              {actionLabel}
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          )}
        </div>

        {features && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:w-1/2">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm opacity-80">{feature.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}