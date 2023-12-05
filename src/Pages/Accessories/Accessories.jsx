import React from "react";

const AccessoriesPage = () => {
  const accessoriesData = [
    {
      id: 1,
      name: "Wireless Earbuds",
      description:
        "Experience crystal-clear audio with our range of wireless earbuds. Perfect for music and calls on the go.",
      price: "$79.99",
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Phone Cases",
      description:
        "Protect your device in style with our collection of durable and stylish phone cases.",
      price: "$19.99",
      image:
        "https://files.cdn.printful.com/o/upload/lpg-image-upload/7c/w38a/7cf45c7095e5892276cdf62f8e845a3e__906",
    },
    {
      id: 3,
      name: "Charging Cables",
      description:
        "Stay powered up with our high-quality charging cables compatible with various devices.",
      price: "$14.99",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 4,
      name: "Screen Protectors",
      description:
        "Shield your screen from scratches and damage with our easy-to-install screen protectors.",
      price: "$9.99",
      image:
        "https://www.ipitaka.com/cdn/shop/articles/protector-for-phone.jpg?v=1531391965",
    },
    // Add more accessory items as needed
  ];

  return (
    <div className="container mx-auto p-4 md:py-24">
      <h1 className="text-3xl font-bold my-8 text-center py-4 text-blue-600">
        Accessories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {accessoriesData.map((accessory) => (
          <div
            key={accessory.id}
            className="bg-blue-100 dark:bg-blue-950 rounded-lg p-4 shadow-md"
          >
            <img
              src={accessory.image}
              alt={accessory.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 text-blue-600 dark:text-white">
              {accessory.name}
            </h2>
            <p className="dark:text-gray-300 mb-2">{accessory.description}</p>
            <span className="text-lg text-blue-600 dark:text-green-500 font-semibold">
              {accessory.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessoriesPage;
