import Image from 'next/image';
import React from 'react'


const founders = [
  {
    name: "Sahani S Kancherla",
    role: "Founder of S3 Sports",
    image: "/s3sports.jpg",
    bio: "Visionary leader with a passion for sports and innovation.",
  },
  {
    name: "Dr. Duke Saran Kumar",
    role: "Co-Founder of S3 Sports",
    image: "/s3AboutImage.jpg",
    bio: "Operational expert dedicated to building vibrant communities.",
  },
  {
    name: "Suman Kumar P",
    role: "Co-Founder of S3 Sports",
    image: "/s3sports.jpg",
    bio: "Tech enthusiast driving digital transformation in sports.",
  },
];

const Founders = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 text-center mb-12 tracking-tight flex items-center justify-center gap-2">
          Founders Corner
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className="bg-white/90 border border-blue-100 shadow-lg rounded-3xl p-8 flex flex-col items-center text-center hover:border-blue-400 transition-all duration-200"
            >
              <div className="relative w-28 h-28 mb-4">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={80}
                  height={80}
                  className="w-28 h-28 object-cover rounded-full border-4 border-blue-200 shadow-md mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-1">{founder.name}</h3>
              <p className="text-base text-blue-700 font-medium mb-2">{founder.role}</p>
              <p className="text-gray-600 mb-2">{founder.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Founders
