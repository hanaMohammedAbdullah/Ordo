import { Link } from "react-router-dom";

const HomeButton = () => {
    return (
        <>
            {" "}
            <div className="h-16 w-36 bg-orange-400  flex 	items-center	 justify-center	rounded-lg mx-auto my-10">
                <Link to="/home" className=" text-xl font-bold text-white">
                    {" "}
                    Go to Home
                </Link>
            </div>
        </>
    );
};

export default HomeButton;
