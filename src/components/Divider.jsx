import texture from "../assets/texture.jpeg";

const Divider = () => {
    return (
        <div
            className="relative py-4 bg-[#f8f3e7]"
            style={{
                backgroundImage: `url(${texture})`,
                backgroundRepeat: "repeat",
                backgroundSize: "360px",
                backgroundBlendMode: "multiply",
                backgroundColor: "#f8f0e3",
            }}
        >
            <div className="absolute inset-0 bg-[#f8f3e7]/65 pointer-events-none backdrop-blur-[1px] z-0"></div>
            <div className="relative z-10 h-[2px] bg-gradient-to-r from-transparent via-[#b07a3f] to-transparent opacity-70"></div>
        </div>
    );
};

export default Divider;
