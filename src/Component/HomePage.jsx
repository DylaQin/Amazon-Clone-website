import React from "react";
import Carousel from "./Carousel";
import HomepageCard from "./HomepageCard";
import CarouselCategory from "./CarouselCategory";
import CarouselProduct from "./CarouselProduct";

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
        <div className="min-w-[1000px] max-w-[1500px] bg-amazon-background">
            <Carousel />
            <div className="grid grid-cols-3 -mt-80 xl:grid-cols-4">
                <HomepageCard
                    title ={ "A surprise for you"}
                    img = {"../images/home_grid_1.jpg"}
                    link = {"see terms and conditions"}
                />
                <HomepageCard
                    title ={ "A surprise for you"}
                    img = {"../images/home_grid_2.jpg"}
                    link = {"see terms and conditions"}
                />
                <HomepageCard
                    title ={ "A surprise for you"}
                    img = {"../images/home_grid_3.jpg"}
                    link = {"see terms and conditions"}
                />
                <HomepageCard
                    title ={ "A surprise for you"}
                    img = {"../images/home_grid_4.jpg"}
                    link = {"see terms and conditions"}
                />
                <HomepageCard
                    title ={ "A surprise for you"}
                    img = {"../images/home_grid_5.jpg"}
                    link = {"see terms and conditions"}
                />
                <HomepageCard
                    title ={ "A surprise for you"}
                    img = {"../images/home_grid_6.jpg"}
                    link = {"see terms and conditions"}
                />
                <HomepageCard
                    title ={ "A surprise for you"}
                    img = {"../images/home_grid_7.jpg"}
                    link = {"see terms and conditions"}
                />
                <HomepageCard
                    title ={ "A surprise for you"}
                    img = {"../images/home_grid_8.jpg"}
                    link = {"see terms and conditions"}
                />
                <div className="m-3 pt-8 xl:hidden">
                    <img src={"../images/banner_image_2.jpg"} alt=""/>
                </div>
            </div>
            <CarouselCategory />
            <CarouselProduct />
            <div className="h-[200px]">
                <img className="h-[100%] m-auto" 
                    src={"../images/banner_image.jpg"} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default HomePage