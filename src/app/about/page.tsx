import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function About() {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center flex-col text-center p-6">
                <h1 className="text-5xl font-bold mb-4">About Path Studio</h1>
                <p className="max-w-2xl text-lg text-gray-600">
                    Path Studio is a team of passionate photographers specializing in capturing your special moments with creativity and professionalism. Weddings, birthdays, events — we do it all with heart.
                </p>
            </div>
            <Footer />
        </div>
    );
}
