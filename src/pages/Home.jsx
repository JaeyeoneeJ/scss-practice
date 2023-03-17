import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.scss";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='wrapper'>
            <header className='header'>
                <span aria-label='previous' id='box' role='button' onClick={() => navigate(-1)}>
                    <svg className='icon' fill='#000000' width='800px' height='800px' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z' />
                    </svg>
                </span>
                <p role='term'>Screen Reader Test</p>
                <span tabIndex={0} onClick={() => alert("you clicked menu button!!")} role='button' aria-label='Menu Button'>
                    menu Button
                </span>
            </header>
            <div className='container'>
                <div className='box'>
                    <svg className='icon' width='800px' height='800px' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M549.023737 515.862886m-276.716713 0a276.716712 276.716712 0 1 0 553.433425 0 276.716712 276.716712 0 1 0-553.433425 0Z' fill='#FAE1DC' />
                        <path
                            d='M744.602198 337.99373s4.727185-26.458125-31.008923 10.265753c-26.458125 27.198953-64.028663 44.908258-108.054983 52.845695-82.866848 13.793503-264.722362 46.037138-278.515865 262.394047-13.793503 216.356909 0 349.882248 0 349.882247s-108.196093-2.293038-140.404451-151.904916c2.293038-257.807972 0-504.080201 0-504.080201s-18.414855-310.724222 278.515865-345.260895c87.452923-4.586075 387.488063-22.29538 402.375168 388.758053 19.226238 153.527681-22.824543 357.46691-131.055914 377.328143 50.623213-87.488201 19.649568-377.292865 8.149103-440.227926z'
                            fill='#E47846'
                        />
                        <path
                            d='M448.094808 610.053812l215.968857-4.37441s0.035278 111.688566-102.269473 111.723843c-106.044166 0-113.699383-107.349433-113.699384-107.349433z'
                            fill='#ECA78C'
                        />
                        <path
                            d='M448.094808 610.018534s0.917215 9.03104 3.210253 18.238468h210.289179c2.222483-10.759638 2.469425-22.5776 2.469425-22.5776l-215.968857 4.339132zM561.829469 717.4738c37.782203 0 59.442588-15.80432 71.260551-28.327832l-151.657974-3.280808c14.95766 15.80432 40.35746 31.60864 80.397423 31.60864z'
                            fill='#FFFFFF'
                        />
                    </svg>
                    <p role='button' aria-labelledby='box' aria-label='description'>
                        A description of the box 1.
                    </p>
                </div>
                <div className='box'>
                    <svg className='icon' width='800px' height='800px' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                        <path d='MNaN NaNaNaN NaN NaN 1 0 NaN NaN NaN NaN NaN 1 0 NaN NaNZ' fill='#98383A' />
                        <path d='M571.989389 655.067902m-298.341819 0a298.34182 298.34182 0 1 0 596.683639 0 298.34182 298.34182 0 1 0-596.683639 0Z' fill='#FAE1DC' />
                        <path
                            d='M777.868881 346.777828l-259.889345-57.149551-168.802838 57.184828-119.731836 189.934061 5.397457 115.498536s65.439763-50.764323 170.178661-83.607675c-2.151928-21.554553-5.432735-77.363558 16.227651-95.778414 6.279395 50.764323 7.231888 66.60392 12.911565 87.382369 89.816516-23.353705 203.621731-31.0442 327.798532 12.6999 5.009405-12.311848 11.14769-35.171668 6.20884-66.709753 7.937438 23.9887 16.36876 40.07524 14.463775 74.400248 37.25304 14.710718 75.352741 34.183898 113.946326 59.301478 8.219658-145.413856-118.708788-293.156027-118.708788-293.156027z'
                            fill='#98383A'
                        />
                        <path
                            d='M40.298799 524.050142a214.275537 398.282978 66.334 1 0 729.575518-319.745033 214.275537 398.282978 66.334 1 0-729.575518 319.745033Z'
                            fill='#63BCBC'
                        />
                        <path
                            d='M150.007616 337.339519a173.247804 225.881834 64.26 1 0 406.936989-196.195563 173.247804 225.881834 64.26 1 0-406.936989 196.195563Z'
                            fill='#508D92'
                        />
                        <path
                            d='M599.011954 753.774348l-36.088882 27.79867-36.900266-24.41203-57.57288 49.317945c0.42333 26.10535 28.92755 94.720088 100.964206 92.144831 91.545113-6.279395 91.933166-101.140593 91.933165-101.140593L599.011954 753.774348z m-28.680607 97.577566c-23.247873 1.481655-30.021153-26.66979-30.021153-26.66979l56.126503-2.610535s-2.857478 27.79867-26.10535 29.280325z'
                            fill='#E15B48'
                        />
                    </svg>
                    <p role='button' aria-labelledby='box'>
                        A description of the box 2.
                    </p>
                </div>
                <div className='box'>
                    <svg className='icon' width='800px' height='800px' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M216.251077 505.949909L23.530093 827.927654l122.448203 56.690942 124.705963-353.727495zM807.748923 490.075034l192.720984 321.977744-122.448203 56.690943-124.705963-353.727495z'
                            fill='#E5E5E5'
                        />
                        <path d='M772.330313 642.791332m-86.429875 0a86.429876 86.429876 0 1 0 172.859751 0 86.429876 86.429876 0 1 0-172.859751 0Z' fill='#FAE1DC' />
                        <path d='M248.000827 642.791332m-86.429876 0a86.429876 86.429876 0 1 0 172.859751 0 86.429876 86.429876 0 1 0-172.859751 0Z' fill='#FAE1DC' />
                        <path d='M517.767871 617.99125m-289.804664 0a289.804665 289.804665 0 1 0 579.609329 0 289.804665 289.804665 0 1 0-579.609329 0Z' fill='#FAE1DC' />
                        <path d='M331.820167 350.658353m-230.115134 0a230.115134 230.115134 0 1 0 460.230269 0 230.115134 230.115134 0 1 0-460.230269 0Z' fill='#E5E5E5' />
                        <path d='M703.680298 346.354498m-230.115135 0a230.115134 230.115134 0 1 0 460.230269 0 230.115134 230.115134 0 1 0-460.230269 0Z' fill='#E5E5E5' />
                        <path d='M414.475351 775.893341a109.642471 51.681538 0 1 0 219.284941 0 109.642471 51.681538 0 1 0-219.284941 0Z' fill='#ECA78C' />
                        <path
                            d='M693.379268 764.392876h-331.749613c-0.388053 0-0.70555-0.317498-0.70555-0.70555v-44.555483c0-0.388053 0.317498-0.70555 0.70555-0.70555h331.749613c0.388053 0 0.70555 0.317498 0.70555 0.70555v44.555483c0 0.388053-0.317498 0.70555-0.70555 0.70555z'
                            fill='#00263A'
                        />
                    </svg>
                    <p role='button' aria-labelledby='box'>
                        A description of the box 3.
                    </p>
                </div>
                <div className='box'>
                    <svg className='icon' width='800px' height='800px' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M875.093671 630.867537m-119.731835 0a119.731836 119.731836 0 1 0 239.463671 0 119.731836 119.731836 0 1 0-239.463671 0Z' fill='#FAE1DC' />
                        <path d='M148.906329 630.867537m-119.731836 0a119.731836 119.731836 0 1 0 239.463671 0 119.731836 119.731836 0 1 0-239.463671 0Z' fill='#FAE1DC' />
                        <path d='M522.530334 596.542529m-401.352121 0a401.35212 401.35212 0 1 0 802.704241 0 401.35212 401.35212 0 1 0-802.704241 0Z' fill='#FAE1DC' />
                        <path
                            d='M878.268646 411.441486H166.792021c-29.103938 55.562063-45.649085 118.744066-45.649085 185.841871 0 54.32735 10.830193 106.079443 30.409205 153.316016h741.956386c19.543735-47.236573 30.409205-99.023943 30.409205-153.316016-0.035278-67.097805-16.580425-130.279808-45.649086-185.841871zM343.35591 650.481827c-39.016915 0-70.660833-31.643918-70.660833-70.660833 0-39.016915 31.643918-70.660833 70.660833-70.660833s70.660833 31.643918 70.660833 70.660833c0 39.016915-31.60864 70.660833-70.660833 70.660833z m348.57698 0c-39.016915 0-70.660833-31.643918-70.660833-70.660833 0-39.016915 31.643918-70.660833 70.660833-70.660833 39.016915 0 70.660833 31.643918 70.660833 70.660833 0 39.016915-31.60864 70.660833-70.660833 70.660833zM225.564337 326.14049c64.557825 37.358873 168.167844 61.594515 284.971647 61.594515 126.081786 0 236.676749-28.222 299.541254-70.731388-72.953871-75.105798-174.941124-121.848486-287.899679-121.848486-117.509353 0-223.200744 50.51738-296.613222 130.985359z'
                            fill='#200C04'
                        />
                        <path d='M516.956489 130.420918m-104.350846 0a104.350846 104.350846 0 1 0 208.701692 0 104.350846 104.350846 0 1 0-208.701692 0Z' fill='#200C04' />
                    </svg>
                    <p role='button' aria-label='This div is fourth box and description of the box 4.'>
                        A description of the box 4.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
