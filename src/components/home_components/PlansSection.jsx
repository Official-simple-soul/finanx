const PlansSection = () => (
  <section className="w-[82%] mx-auto py-12 text-center">
    <h2 className="text-3xl font-bold text-dark-blue mb-8">Our plans</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {[
        {
          title: 'Basic Account',
          min: '$5,000',
          max: '$10,000',
          features: [
            'Basic Support',
            'Access to all markets',
            'Standard Tools',
          ],
        },
        {
          title: 'Standard Account',
          min: '$15,000',
          max: '$45,000',
          features: [
            'Priority Support',
            'Advanced Tools',
            'Access to all markets',
          ],
        },
        {
          title: 'Premium Account',
          min: '$50,000',
          max: '$100,000',
          features: [
            '24/7 Support',
            'Personal Account Manager',
            'Exclusive Tools',
          ],
        },
        {
          title: 'VIP Account',
          min: '$100,000',
          max: 'Unlimited',
          features: [
            'Dedicated Support Team',
            'Custom Trading Solutions',
            'Exclusive Market Insights',
          ],
        },
      ].map((plan) => (
        <div
          key={plan.title}
          className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-center hover:shadow-lg hover:scale-105 transition-all ease-in-out"
        >
          <h3 className="text-xl font-bold text-primary-blue mb-4">
            {plan.title}
          </h3>
          <p className="text-dark-blue mb-2">
            Minimum: <span className="font-medium">{plan.min}</span>
          </p>
          <p className="text-dark-blue mb-4">
            Maximum: <span className="font-medium">{plan.max}</span>
          </p>
          <ul className="space-y-4">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="bg-gray-100 text-dark-blue px-4 py-2 rounded-md font-medium text-center"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default PlansSection;
