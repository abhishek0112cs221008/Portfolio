const Hero = () => {
    return (
        <section className="border-b border-gray-300 pb-6 mb-6">
            {/* Wikipedia-style title */}
            <h1 className="text-4xl font-serif mb-2">Abhishek Kumar</h1>
            <p className="text-sm text-gray-600 italic mb-4">Full Stack Developer</p>

            {/* Info box - Wikipedia style */}
            <div className="float-right ml-4 mb-4 w-80 border border-gray-300 bg-gray-50 p-4">
                <div className="text-center mb-3">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-6xl font-bold">
                        AK
                    </div>
                </div>
                <table className="w-full text-sm">
                    <tbody>
                        <tr className="border-b border-gray-200">
                            <td className="py-2 font-semibold">Naam</td>
                            <td className="py-2">Abhishek Kumar</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="py-2 font-semibold">Profession</td>
                            <td className="py-2">Software Developer</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="py-2 font-semibold">Specialization</td>
                            <td className="py-2">Full Stack Development</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="py-2 font-semibold">Location</td>
                            <td className="py-2">India</td>
                        </tr>
                        <tr>
                            <td className="py-2 font-semibold">Education</td>
                            <td className="py-2">Computer Science</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Introduction paragraph */}
            <div className="text-justify leading-relaxed">
                <p className="mb-4">
                    <strong>Abhishek Kumar</strong> ek passionate <strong>Full Stack Developer</strong> hain jo modern web technologies mein expertise rakhte hain. Unka focus hai scalable aur user-friendly applications banana jo real-world problems solve karein.
                </p>
                <p className="mb-4">
                    Wo primarily <strong>React</strong>, <strong>Node.js</strong>, aur <strong>TypeScript</strong> ke saath kaam karte hain, aur unhe clean code likhna aur best practices follow karna pasand hai. Unka experience hai both frontend aur backend development mein, jo unhe complete solutions deliver karne mein madad karta hai.
                </p>
            </div>
        </section>
    );
};

export default Hero;
