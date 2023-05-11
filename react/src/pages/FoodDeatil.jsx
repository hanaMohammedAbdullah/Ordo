import Layout from "../Layouts/Layout";
import { FaCartPlus } from "react-icons/fa";
import FeedBack from "../components/FeedBack";
import { useEffect, useState } from "react";
import FoodNote from "../components/FoodNote";
import Feed from "../components/Feed";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleFood } from "../service/apiServer";
const FoodDetail = () => {
    const [addingNote, setAddingNote] = useState(false);
    const [feedBack, setFeedBack] = useState(false);

    //retrive the id param from the url and use it to fetch the food details
    // const { id } = useParams();
    // const dispatch = useDispatch();
    // const singleFood = {};
    // const foods = useSelector((state) => state.foods.allFoods); //get all foods from the store
    // useEffect(() => {
    //     if (id) {
    //         getFoodById(id).then((res) => {
    //             singleFood = res.data;
    //         });
    //     }

    // dispatch(getFood(id));
    // }, [id]);

    return (
        <>
            <Layout>
                <div className="flex-col m-2">
                    <img
                        className=" rounded w-11/12 object-contain"
                        src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="foodpic"
                    />
                    <h2 className="text-2xl font-bold	">Food Name</h2>
                    <div className="flex w-1/3 justify-evenly 	 ">
                        <p className="">rate</p>
                        <p className="text-slate-500	 ">review</p>
                    </div>
                    <h2 className="text-lg font-semibold mt-2	">Description</h2>
                    <p className="m-2">
                        Food Description Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Voluptatum est sint qui, hic quam
                        obcaecati. Rem enim, corporis totam praesentium ex
                        minima, voluptatum corrupti unde perferendis quas eius
                        sunt consectetur.
                    </p>
                    <div className="flex  mt-2  items-center  content-between			 ">
                        <p className="text-slate-500	 ">Total : </p>
                        <h3 className="text-2xl font-bold	 "> 125$</h3>
                        <div className="h-16 w-36 bg-orange-400  flex 	items-center rounded-lg mx-auto my-10">
                            <button
                                onClick={() => setAddingNote(true)}
                                className="flex text-xl font-bold text-black"
                            >
                                <FaCartPlus className="h-6 w-6 " />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className="h-16 w-11/12 bg-yellow-400  flex  justify-center	items-center rounded-lg mx-auto my-10">
                        <button
                            onClick={() => setFeedBack(true)}
                            ame="flex text-xl font-bold text-black"
                        >
                            FeedBack
                        </button>
                    </div>
                    <FeedBack />
                    <FeedBack />
                    <FeedBack />
                    {addingNote ? (
                        <FoodNote setShowModal={setAddingNote} />
                    ) : null}
                    {feedBack ? <Feed setShowModal={setFeedBack} /> : null}
                </div>
            </Layout>
        </>
    );
};

export default FoodDetail;
