import React from "react";
import { FaPencilAlt, FaStar } from "react-icons/fa";
import { DashboardNavbar } from "../../components/Admin/DashboardNavbar";
import FeedBack from "../../components/FeedBack";

export const FoodFix = () => {
    const food = useSelector((state) => state.foods.singleFood); //get all foods from the store

    const getHandler = async () => {
        let data = await getSingleFood(id);
        // console.log("this data so be ", data);
        dispatch(setSingleFood(data));

        return data;
    };

    let feedback = [
        {
            id: 1,
            name: "Ahmed",
            comment: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            accusamus dolorum sit assumenda ea, dignissimos explicabo est
            adipisci ut modi, accusantium perspiciatis! Illum voluptatibus
            iusto facere distinctio. Aut, illo laborum.`,
            rate: 4,
        },
        {
            id: 2,
            name: "Ahmed",
            comment: "Very good",
            rate: 4,
        },
        {
            id: 3,
            name: "Ahmed",
            comment: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            accusamus dolorum sit assumenda ea, dignissimos explicabo est
            adipisci ut modi, accusantium perspiciatis! Illum voluptatibus
            iusto facere distinctio. Aut, illo laborum.`,
            rate: 4,
        },
    ];
    return (
        <div>
            <DashboardNavbar />

            <div className="flex justify-between m-4">
                <div className=" w-1/3 h-fit  m-0 ">
                    <img
                        className="w-fit h-fit border rounded "
                        // height="100"
                        src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                        alt=""
                    />
                </div>
                <div className="flex flex-col w-2/3 h-fit  m-6   ">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <h2 className="text-xl font-semibold mb-5">
                                Food name
                            </h2>{" "}
                            <div className="flex  ">
                                <FaStar className="text-orange-500 mr-2 text-lg" />
                                <span className="flex text-lg">4</span>
                            </div>
                        </div>
                        <div className="flex justify-evenly">
                            <p className="text-2xl font-semibold mr-5">$120</p>

                            <FaPencilAlt className="text-yellow-500 text-2xl" />
                        </div>
                    </div>
                    <hr className="mt-5 bg-gray-800  border-spacing-2.5 " />
                    <p>Description</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dolorem porro nisi earum architecto iure hic quis
                        ut labore incidunt unde, est delectus omnis culpa facere
                        modi fugit veritatis odio ducimus?
                    </p>
                </div>
            </div>

            <div
                className="flex flex-col m-5 text-2xl font-semibold
            "
            >
                <p className="">FeedBacks</p>
                <div className="flex flex-wrap justify-evenly m-2">
                    {feedback &&
                        feedback.map((feed) => (
                            <FeedBack
                                id={feed.id}
                                key={feed.id}
                                review={feed.rate}
                                name={feed.name}
                                comment={feed.comment}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};
