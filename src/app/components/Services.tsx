import Image from 'next/image';

const services = [
    { title: "Wedding Photography", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" },
    { title: "Birthday Parties", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" },
    { title: "Corporate Events", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d" },
    { title: "Fashion Shoots", image: "https://images.unsplash.com/photo-1559561854-85f6c9f0c366" },
    { title: "Baby Shoots", image: "https://images.unsplash.com/photo-1503457574465-2d5f4a4dca0c" },
    { title: "Pre-wedding Shoots", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9" },
    { title: "Food Photography", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187" },
    { title: "Product Photography", image: "https://images.unsplash.com/photo-1581091215367-59ab6c9f2d1b" },
    { title: "Event Coverage", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d" },
    { title: "Outdoor Shoots", image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d" },
    { title: "Studio Shoots", image: "https://images.unsplash.com/photo-1559561852-34d7dfb83367" },
    { title: "Engagement Shoots", image: "https://images.unsplash.com/photo-1520975698519-59c1f59bdf67" },
    { title: "Anniversary Shoots", image: "https://images.unsplash.com/photo-1560840058-174a6b39a90d" },
    { title: "Graduation Shoots", image: "https://images.unsplash.com/photo-1533055640609-24b498cdf9a2" },
    { title: "Family Photoshoots", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1" },
];

export default function Services() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-12">Our Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <Image src={service.image} alt={service.title} width={500} height={400} className="object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold">{service.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
