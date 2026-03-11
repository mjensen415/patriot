import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Come and Take It Tee",
    description: "Classic Gonzales cannon graphic.",
    price: "From $24.99",
    bgColor: "bg-patriot-red",
  },
  {
    id: 2,
    name: "Don't Tread On Me Hoodie",
    description: "Gadsden snake design, heavyweight fleece.",
    price: "From $44.99",
    bgColor: "bg-patriot-navy",
  },
  {
    id: 3,
    name: "Freedom Isn't Free Mug",
    description: "15oz ceramic, dishwasher safe.",
    price: "From $16.99",
    bgColor: "bg-patriot-gold",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-patriot-navy uppercase tracking-tight mb-4">
            ★ Featured Gear
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            New designs drop weekly. Shop the full collection on our store.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col bg-patriot-cream rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Image Placeholder */}
              <div className={`w-full h-64 ${product.bgColor} flex items-center justify-center p-6 text-center`}>
                <span className="font-heading text-white text-2xl font-bold uppercase drop-shadow-md">
                  {product.name}
                </span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading text-2xl font-bold text-patriot-navy mb-2 uppercase">
                  {product.name}
                </h3>
                <p className="font-body text-gray-600 mb-4 flex-grow">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-heading text-xl font-bold text-patriot-red">
                    {product.price}
                  </span>
                  <Link 
                    href="https://www.redbubble.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-patriot-navy hover:bg-black text-white font-heading font-semibold uppercase tracking-wider text-sm transition-colors rounded-sm"
                  >
                    View on Store
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
