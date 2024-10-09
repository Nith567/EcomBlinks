import { Button } from "@/components/common/button";
import { ArrowRight, Zap, Lock, Coins } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 dark:text-white leading-tight">
              Simplify Payments with{" "}
              <span className="text-blue-600 dark:text-blue-300">
                Solana Blinks
              </span>
            </h1>
            <p className="mt-3 text-xl text-blue-700 dark:text-blue-200 sm:mt-5 sm:text-2xl lg:text-xl xl:text-2xl">
              Instant, Secure, and Zero Middlemen Crypto Payments for Your
              E-commerce Store
            </p>
            <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link href="/profile">
                  <Button
                    size="lg"
                    className="w-full px-8 py-3 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link href="https://www.solanablinks.me">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full px-8 py-3 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:ml-8">
            <div className="bg-white dark:bg-blue-800 rounded-lg shadow-xl overflow-hidden">
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div className="flex justify-center">
                  <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-blue-100 text-blue-600 dark:bg-blue-700 dark:text-blue-200">
                    Solana Blinks Benefits
                  </span>
                </div>
                <ul className="mt-8 space-y-5">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Zap className="h-6 w-6 text-blue-500" />
                    </div>
                    <p className="ml-3 text-base text-blue-700 dark:text-blue-200">
                      Lightning-fast transactions
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Lock className="h-6 w-6 text-blue-500" />
                    </div>
                    <p className="ml-3 text-base text-blue-700 dark:text-blue-200">
                      smooth and secured checkout experience
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Coins className="h-6 w-6 text-blue-500" />
                    </div>
                    <p className="ml-3 text-base text-blue-700 dark:text-blue-200">
                      Lower fees compared to traditional payment methods
                    </p>
                  </li>
                </ul>
              </div>
              <div className="px-6 pt-6 pb-8 bg-blue-50 dark:bg-blue-900 sm:px-10 sm:py-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg leading-6 font-medium text-blue-900 dark:text-blue-100">
                    Ready to boost your wooCommerce experience?
                  </h3>
                  <Link href="/profile">
                    <Button variant="secondary" className="text-sm px-4">
                      get started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-100 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap justify-between items-center">
          <p className="text-blue-600 dark:text-blue-200 text-sm mb-4 sm:mb-0">
            Trusted by over 10,000 e-commerce businesses worldwide
          </p>
          <div className="flex space-x-6">
            <img
              src="/wooecom.png?height=30&width=100"
              alt="woocommerce logo"
              className="h-8 rounded-md"
            />
            <img
              src="/sol.png?height=30&width=100"
              alt="solana logo"
              className="h-8 rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
