import React from "react";

const Newsletter = () => {
  return (
    <div>
      {/* Section 2: Newsletter Subscription */}
      <section className="bg-[url('https://i.ibb.co/KqFC1ck/round-particle-lines-futuristic-gradient-wallpaper.jpg')]  bg-no-repeat bg-fixed bg-center bg-cover bg-blue-950 bg-blend-overlay text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg mb-8">
            Stay updated with the latest trends, deals, and product launches.
          </p>
          <div className="mx-4 md:mx-auto max-w-md">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full py-3 px-4 rounded-l-md text-black bg-white"
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-3 rounded-r-md hover:bg-green-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
