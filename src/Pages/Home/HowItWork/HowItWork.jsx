import React from "react";

const HowItWork = () => {
  // Replace with actual steps and descriptions
  const howItWorksSteps = [
    {
      id: 1,
      title: "Step 1: Explore Our Products",
      description:
        "Browse through our wide range of electronic gadgets and accessories.",
    },
    {
      id: 2,
      title: "Step 2: Select Your Favorites",
      description:
        "Choose the products you like and add them to your shopping cart.",
    },
    {
      id: 3,
      title: "Step 3: Secure Checkout",
      description:
        "Complete your purchase securely with multiple payment options.",
    },
  ];

  return (
    <div>
      {/* Section: "How It Works" */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-600">
            How It Works
          </h2>
          <div className="mx-4 md:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howItWorksSteps.map((step) => (
              <div
                key={step.id}
                className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4 shadow-md"
              >
                <div className="text-2xl font-semibold mb-2">{step.title}</div>
                <p className="dark:text-gray-200">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWork;
