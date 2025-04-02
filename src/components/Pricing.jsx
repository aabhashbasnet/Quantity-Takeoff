const Pricing = () => (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              name: "Starter",
              price: "49",
              features: ["5 Projects/Month", "Basic Reports", "Email Support"]
            },
            {
              name: "Professional",
              price: "149",
              features: ["Unlimited Projects", "Advanced Analytics", "Priority Support"],
              featured: true
            },
            {
              name: "Enterprise",
              price: "Custom",
              features: ["Dedicated Support", "SLA", "Custom Integration"]
            }
          ].map((plan) => (
            <div key={plan.name} className={`p-8 rounded-xl ${plan.featured ? 'bg-blue-600 text-white shadow-2xl' : 'bg-white'}`}>
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">
                ${plan.price}<span className="text-lg">/month</span>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span className="mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full py-3 rounded-lg ${
                plan.featured 
                  ? 'bg-white text-blue-600 hover:bg-gray-100' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
  export default Pricing;