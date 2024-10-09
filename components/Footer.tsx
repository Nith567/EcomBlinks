import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              SolanaBlinks
            </h3>
            <p className="text-gray-600">
              Empowering WooCommerce merchants with blockchain technology blink
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                {
                  name: "Contact",
                  link: "mailto:nithinkatkam504106@gmail.com",
                },
                { name: "Privacy Policy", link: "/#" },
                { name: "Terms of Service", link: "/#" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              {[
                {
                  name: "Twitter",
                  link: "https://twitter.com/blinkify",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="hover:text-gray-900 transition-colors"
                >
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Stay Updated
            </h4>
            <form className="flex">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-r-none border-r-0"
              />
              <Button
                type="submit"
                className="rounded-l-none bg-gray-800 hover:bg-gray-900 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          © 2024 wooEcomBlinks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
