import { Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10 bg-black/50 backdrop-blur-sm md:ml-20 lg:mr-[300px] transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="flex items-center justify-center gap-2 text-gray-400">
                    Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Abhishek Patel
                </p>
                <p className="text-xs text-gray-600 mt-2">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
