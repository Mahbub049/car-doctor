const About = () => {
    return (
        <div className="flex my-[130px] gap-24">
            <div className="relative flex-1">
                <img className="rounded-xl" src="/src/assets/images/about_us/person.jpg" alt="" />
                <img className="rounded-xl absolute w-3/4 -right-16 -bottom-16" src="/src/assets/images/about_us/parts.jpg" alt="" />
            </div>
            <div className="flex-1 space-y-4">
                <p className="text-[#FF3811]">About Us</p>
                <h3 className="text-4xl w-1/2">We are qualified & of experience in this field</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                <button className="btn bg-[#FF3811] text-white">Get More Info</button>
            </div>
        </div>
    );
};

export default About;