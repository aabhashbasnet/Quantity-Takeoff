"use client"

import { useState } from "react"
import { Check, X, HelpCircle, Zap } from "lucide-react"

const Pricing = () => {
  const [annual, setAnnual] = useState(true)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams and individual estimators",
      monthlyPrice: "79",
      annualPrice: "49",
      features: [
        { name: "5 Projects/Month", included: true },
        { name: "Basic Takeoff Tools", included: true },
        { name: "PDF & DWG Import", included: true },
        { name: "Standard Reports", included: true },
        { name: "Email Support", included: true },
        { name: "1 Team Member", included: true },
        { name: "Mobile Access", included: false },
        { name: "Advanced Analytics", included: false },
        { name: "API Access", included: false },
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and estimation teams",
      monthlyPrice: "199",
      annualPrice: "149",
      features: [
        { name: "Unlimited Projects", included: true },
        { name: "Advanced Takeoff Tools", included: true },
        { name: "All File Formats", included: true },
        { name: "Advanced Reports & Export", included: true },
        { name: "Priority Support", included: true },
        { name: "5 Team Members", included: true },
        { name: "Mobile Access", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "API Access", included: false },
      ],
      featured: true,
      badge: "Most Popular",
      cta: "Get Started",
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      features: [
        { name: "Unlimited Projects", included: true },
        { name: "All Takeoff Features", included: true },
        { name: "All File Formats", included: true },
        { name: "Custom Reports", included: true },
        { name: "Dedicated Support", included: true },
        { name: "Unlimited Team Members", included: true },
        { name: "Mobile Access", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "API Access", included: true },
      ],
      cta: "Contact Sales",
    },
  ]

  const faqs = [
    {
      question: "Can I change plans later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be prorated for the remainder of your billing cycle.",
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial on all our plans. No credit card required to start your trial.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and for Enterprise plans, we can arrange invoicing.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your current billing period.",
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-blue-50 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Pricing Plans
          </span>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your needs. No hidden fees or complicated pricing structures.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8 mb-12">
            <span className={`text-sm font-medium mr-4 ${!annual ? "text-gray-900" : "text-gray-500"}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-blue-600 transition-colors focus:outline-none"
            >
              <span className="sr-only">Toggle billing frequency</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${annual ? "translate-x-7" : "translate-x-1"}`}
              />
            </button>
            <span className={`text-sm font-medium ml-4 ${annual ? "text-gray-900" : "text-gray-500"}`}>
              Annual <span className="text-green-600 font-semibold">(Save 38%)</span>
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 ${
                plan.featured
                  ? "bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl lg:scale-105"
                  : "bg-white text-gray-800 shadow-lg hover:shadow-xl"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0">
                  <div className="text-xs font-bold uppercase py-1.5 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-bl-lg shadow-sm">
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.featured ? "text-blue-100" : "text-gray-500"}`}>
                  {plan.description}
                </p>

                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-extrabold">{plan.annualPrice === "Custom" ? "" : "$"}</span>
                  <span className="text-5xl font-extrabold">{annual ? plan.annualPrice : plan.monthlyPrice}</span>
                  {plan.annualPrice !== "Custom" && (
                    <span className={`text-lg ml-2 ${plan.featured ? "text-blue-100" : "text-gray-500"}`}>/month</span>
                  )}
                </div>

                {plan.annualPrice !== "Custom" && (
                  <p className={`text-sm mb-6 ${plan.featured ? "text-blue-100" : "text-gray-500"}`}>
                    {annual ? "Billed annually" : "Billed monthly"}
                  </p>
                )}

                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                    plan.featured
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/30"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>

              <div
                className={`px-8 pb-8 pt-4 ${plan.featured ? "border-t border-white/20" : "border-t border-gray-100"}`}
              >
                <h4
                  className={`text-sm font-semibold uppercase mb-4 ${plan.featured ? "text-blue-100" : "text-gray-500"}`}
                >
                  What's included
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start">
                      {feature.included ? (
                        <Check
                          className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.featured ? "text-blue-200" : "text-green-500"}`}
                        />
                      ) : (
                        <X
                          className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.featured ? "text-blue-300/50" : "text-gray-300"}`}
                        />
                      )}
                      <span
                        className={feature.included ? "" : `${plan.featured ? "text-blue-200/50" : "text-gray-400"}`}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 shadow-xl mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Need a custom solution?</h3>
              <p className="text-blue-100">
                Contact our sales team for a personalized quote tailored to your organization's specific needs.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              <Zap className="w-5 h-5 mr-2" />
              Contact Sales
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <HelpCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600">
            <div className="bg-blue-50 px-6 py-2 rounded-full">
              <span className="text-blue-700 font-medium">30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing

