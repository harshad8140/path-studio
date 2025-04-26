import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const images = [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
    "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
    "https://images.unsplash.com/photo-1487412912498-0447578fcca8",
    "https://images.unsplash.com/photo-1603775020644-eb8decd7998a",
    "https://images.unsplash.com/photo-1558979158-65a1eaa08691",
    "https://images.unsplash.com/photo-1617104678233-05f59b19504b",
    "https://images.unsplash.com/photo-1520012218364-7c4aa4735f5d",
    "https://images.unsplash.com/photo-1581090700227-1c065caa4c16",
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    "https://images.unsplash.com/photo-1520170356025-6b5c6a7b8a49",
    "https://images.unsplash.com/photo-1610528529907-1b3cc5bc5ef8",
    "https://images.unsplash.com/photo-1590080877632-3e84de07fd3b",
    "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb",
    "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
];

export default function Portfolio() {
    return (
        <div>
            <Navbar />
            <div className="py-16 px-6 max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold text-center mb-10">Portfolio</h1>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                    {images.map((img, idx) => (
                        <div key={idx} className="relative w-full h-72 rounded-lg overflow-hidden">
                            <Image
                                src={img}
                                alt={`Portfolio ${idx}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
