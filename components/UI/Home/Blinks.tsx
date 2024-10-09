import { CreditCard, ShoppingCart, Shield } from "lucide-react";
import { Button } from "@/components/common/button";

export default function Blinks() {
  const features = [
    {
      icon: CreditCard,
      title: "Instant Payments",
      text: "Process transactions directly on your platform without redirects.",
    },
    {
      icon: ShoppingCart,
      title: "Seamless Integration",
      text: "Compatible with popular crypto wallets for a smooth checkout experience.",
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      text: "Blockchain-powered transactions ensure top-notch security for your customers.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
            Revolutionize Your E-commerce with Solana Blinks
          </h2>
          <p className="text-xl text-blue-600 max-w-3xl mx-auto">
            Blinks are blockchain-powered payment links that enable instant,
            interactive transactions through shareable URLs. Boost your sales
            with this cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-blue-600 text-center">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
