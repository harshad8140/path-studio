import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
    return (

        <div className="min-h-screen flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <form className="w-full max-w-md bg-white p-8 rounded shadow-md">
                <input type="text" placeholder="Name" className="w-full mb-4 p-3 border rounded" />
                <input type="email" placeholder="Email" className="w-full mb-4 p-3 border rounded" />
                <input type="text" placeholder="Phone" className="w-full mb-4 p-3 border rounded" />
                <textarea placeholder="Message" rows={4} className="w-full mb-4 p-3 border rounded"></textarea>
                <button type="submit" className="w-full bg-black text-white py-3 rounded">Send Message</button>
            </form>
        </div>
    );
}
