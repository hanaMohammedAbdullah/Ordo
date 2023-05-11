const FeedBack = ({ name, review, comment }) => {
    return (
        <div className="flex-col border-2 w-full mx-2 shadow-md rounded my-4  p-4">
            <div className="flex m-2 ">
                <img
                    className="rounded-full h-20 w-20 m-2	"
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
                    alt=""
                />
                <div className="flex-col justify-between">
                    <h2 className="text-lg font-semibold	"> {name}</h2>
                    <p className="text-slate-500	 ">{review}</p>
                </div>
            </div>
            <p className="m-2">{comment}</p>
        </div>
    );
};
export default FeedBack;
