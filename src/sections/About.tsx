const About = () => {
    return (
        <section className="border-b border-gray-300 pb-6 mb-6">
            <h2 className="text-3xl font-serif border-b-2 border-gray-300 pb-2 mb-4">
                About (Mere Baare Mein)
            </h2>

            <div className="text-justify leading-relaxed space-y-4">
                <p>
                    Main ek <strong>software developer</strong> hoon jo technology aur problem-solving mein bahut interested hoon. Mera journey programming se tab shuru hua jab maine pehli baar code likha aur dekha ki kaise ek simple program real-world impact create kar sakta hai.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Background</h3>
                <p>
                    Meri education <strong>Computer Science</strong> mein hui hai, jahan maine programming fundamentals, data structures, algorithms, aur software engineering principles seekhe. College ke time se hi mujhe web development mein interest develop hua.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Philosophy</h3>
                <p>
                    Mera belief hai ki achha software wo hota hai jo:
                </p>
                <ul className="list-disc ml-8 space-y-2">
                    <li><strong>User-friendly</strong> ho - koi bhi easily use kar sake</li>
                    <li><strong>Scalable</strong> ho - future mein grow kar sake</li>
                    <li><strong>Maintainable</strong> ho - code clean aur readable ho</li>
                    <li><strong>Performant</strong> ho - fast aur efficient ho</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Interests</h3>
                <p>
                    Development ke alawa, mujhe pasand hai:
                </p>
                <ul className="list-disc ml-8 space-y-1">
                    <li>New technologies explore karna</li>
                    <li>Open source projects mein contribute karna</li>
                    <li>Technical blogs padhna aur likhna</li>
                    <li>Problem-solving competitions mein participate karna</li>
                </ul>
            </div>
        </section>
    );
};

export default About;
