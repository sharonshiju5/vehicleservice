import React from 'react'
type Contractor = {
  id: number;
  category: string;
  name: string;
  rating: number;
  img: string;
  sponsor?: boolean;
};
function Popular() {
    const contractors: Contractor[] = [
    {
      id: 1,
      category: "Interior Painting",
      name: "ColorWorks Painting",
      rating: 4.9,
      img: "/assets/landing/popular.png", // replace with your src
      sponsor: true,
    },
    {
      id: 2,
      category: "Interior Painting",
      name: "ColorWorks Painting",
      rating: 4.9,
      img: "/assets/landing/popular.png",
      sponsor: true,
    },
    {
      id: 3,
      category: "Interior Painting",
      name: "ColorWorks Painting",
      rating: 4.9,
      img: "/assets/landing/popular.png",
    },
    {
      id: 4,
      category: "Interior Painting",
      name: "ColorWorks Painting",
      rating: 4.9,
      img: "/assets/landing/popular.png",
    },
    {
      id: 5,
      category: "Interior Painting",
      name: "ColorWorks Painting",
      rating: 4.9,
      img: "/assets/landing/popular.png",
    },
  ];
  return (
    <div className="w-full p-4">
      <h2 className="font-medium text-[16px] leading-[26px] tracking-[0.01px] mb-4">
        Popular Plumbing Contractors in Kozhikode
      </h2>

      {/* Horizontal scroll container */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {contractors.slice(0, 5).map((c) => (
          <div
            key={c.id}
            className="min-w-[200px] max-w-[200px] bg-white rounded-lg  hover:shadow-md overflow-hidden"
          >
            {/* Image with Sponsor Badge */}
            <div className="relative">
              <img
                src={c.img}
                alt={c.name}
                className="w-full h-32 object-cover"
              />
              {c.sponsor && (
                <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-md">
                  Sponsor
                </span>
              )}
            </div>

            {/* Details */}
            <div className="p-2">
              <p className="text-xs text-gray-500">{c.category}</p>
              <h3 className="text-sm font-medium text-gray-800">{c.name}</h3>
              <p className="text-sm text-gray-600">{c.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Popular