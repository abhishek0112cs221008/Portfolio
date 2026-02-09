const Contact = () => {
    return (
        <section className="pb-6 mb-6">
            <h2 className="text-3xl font-serif border-b-2 border-gray-300 pb-2 mb-4">
                Contact (Sampark Karein)
            </h2>

            <div className="text-justify leading-relaxed mb-6">
                <p>
                    Agar aap mujhse connect karna chahte hain, project discuss karna chahte hain, ya koi question puchna chahte hain, toh neeche diye gaye channels se mujhe reach kar sakte hain.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Contact Info */}
                <div className="border border-gray-300 p-5 rounded bg-gray-50">
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">📧</span>
                            <div>
                                <p className="font-semibold">Email</p>
                                <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
                                    your.email@example.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-2xl">💼</span>
                            <div>
                                <p className="font-semibold">LinkedIn</p>
                                <a href="https://linkedin.com/in/yourprofile" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                    linkedin.com/in/yourprofile
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-2xl">💻</span>
                            <div>
                                <p className="font-semibold">GitHub</p>
                                <a href="https://github.com/yourusername" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                    github.com/yourusername
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-2xl">🐦</span>
                            <div>
                                <p className="font-semibold">Twitter</p>
                                <a href="https://twitter.com/yourhandle" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                    @yourhandle
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Message */}
                <div className="border border-gray-300 p-5 rounded bg-blue-50">
                    <h3 className="text-xl font-semibold mb-4">Quick Message</h3>
                    <p className="mb-4">
                        Agar aap quickly message bhejana chahte hain, toh email best option hai. Main usually 24-48 hours mein reply karta hoon.
                    </p>
                    <p className="mb-4">
                        Professional inquiries, collaboration opportunities, ya technical discussions ke liye feel free to reach out!
                    </p>
                    <a
                        href="mailto:your.email@example.com"
                        className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                        Send Email
                    </a>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-300 text-center text-sm text-gray-600">
                <p>© 2024 Abhishek Kumar. Made with ❤️ using React aur TypeScript.</p>
                <p className="mt-2">Last updated: February 2024</p>
            </div>
        </section>
    );
};

export default Contact;
