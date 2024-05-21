import React from "react";
import "./Home.scss";

function Home() {
    return (
        <main className="home-main">
            <section className="home-banner">
                {/* <div className="container"> */}
                <div className="home-banner__body">
                    <h1 className="home-banner__title">Welcome!</h1>
                    <p className="home-banner__text">
                        Hello Prapvarine, discover how to find, track, and enjoy
                        healthy food with us.
                    </p>
                </div>
                <div className="home-banner__right">
                    <div
                        className="home-banner__image"
                        style={{
                            backgroundImage: `url('../../assets/images/home/home-1.png')`,
                        }}
                    ></div>
                </div>
                {/* </div> */}
            </section>

            {/* <section className="home-aboutus">
                <div className="container">
                    <h2>About Us</h2>
                    <p>
                        Welcome to [ชื่อเว็บไซต์ของคุณ], a haven for health
                        enthusiasts and food lovers alike. Our mission is simple
                        yet profound: to inspire and empower you to lead a
                        healthier, happier life through mindful eating and
                        delicious, nutritious recipes.
                    </p>
                    <p>
                        At [ชื่อเว็บไซต์ของคุณ], we believe that food is not
                        just fuel; it's a source of joy, a means of connection,
                        and a path to wellness. Our team of passionate
                        nutritionists, chefs, and wellness experts are dedicated
                        to bringing you the best in healthy eating. From
                        tantalizing recipes to expert tips, we provide the
                        resources you need to make informed choices and savor
                        every bite.
                    </p>
                    <p>
                        Join us on this journey to discover a world of flavors
                        that nourish both body and soul. Together, let's embrace
                        a lifestyle that celebrates the goodness of wholesome,
                        natural foods and the vibrant community that cherishes
                        them.
                    </p>
                    <p>
                        Thank you for being a part of our community. Here’s to
                        your health and happiness!
                    </p>
                </div>
            </section> */}

            <section className="home-intro">
                <div className="container">
                    <div className="home-intro__header">
                        <p className="home-intro__backdrop">LifeStyle</p>
                        <h2 className="home-intro__title">Why healthy</h2>
                    </div>
                    <div className="home-intro__body">
                        <ul className="home-intro__left">
                            <li>Improved physical health</li>
                            <li>Better mental health</li>
                            <li>Increased longevity</li>
                            <li>Weight management</li>
                            <li>Improved self-confidence</li>
                            <li>Reduced stress</li>
                        </ul>

                        <div className="home-intro__right">
                            <div className="grid grid-cols-2 gap-4 items-end mb-4">
                                {/* <img src="../assets/images/home/intro-1.png" alt="" /> */}
                                <img src="@/assets/images/home/intro-1.png" alt="" />
                                <img src="@/assets/images/home/intro-2.png" alt="" />
                            </div>
                            <img src="src/assets/images/home/intro-3.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
