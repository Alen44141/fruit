import Link from "next/link";
import Layout from "../src/layout/Layout";

import dynamic from "next/dynamic";
import Slider from "react-slick";
import { HomeSlider1 } from "../src/components/HomeSlider";
import { HomeSlider3 } from "../src/components/HomeSlider";
import { clientLogo } from "../src/sliderProps";
import PhotoGallery from "../src/components/slider/PhotoGallery";
const TrendyProducts = dynamic(
  () => import("../src/components/istotope/TrendyProducts"),
  {
    ssr: false,
  }
);
const PopularProducts = dynamic(
  () => import("../src/components/istotope/PopularProducts"),
  {
    ssr: false,
  }
);
const MunfimCountdown = dynamic(
  () => import("../src/components/MunfimCountdown"),
  {
    ssr: false,
  }
);

const Index3 = () => {
  return (
    <Layout header={3} footer={3}>
      <section className="slider-section bg-lighter">
        <div className="main-slider-active">
          <HomeSlider1 />
        </div>
        <img
          className="bg-shape"
          src="assets/images/slider/slider-bg-shape.png"
          alt="Shape"
        />
      </section>
      {/* Slider Section End */}
      {/* Feature Area Start */}
      <div><br></br><br></br><br></br></div>

      {/* Feature Area End */}
      {/* Offer Banners Start */}
      {/* <section className="offer-banners-two pb-20">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="offer-banner-item style-two wow fadeInUp delay-0-2s"
                style={{
                  backgroundImage:
                    "url(assets/images/offers/offer-banner-bg4.jpg)",
                }}
              >
                <div className="content mb-0 ml-auto">
                  <span className="sub-title">100% Fresh</span>
                  <h3>Vegetables</h3>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-three">
                      Купить <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="offer-banner-item style-two wow fadeInUp delay-0-4s"
                style={{
                  backgroundImage:
                    "url(assets/images/offers/offer-banner-bg5.jpg)",
                }}
              >
                <div className="content mb-0">
                  <span className="sub-title">25% Off</span>
                  <h3>Fast Delivery</h3>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-three">
                      Купить <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="offer-banner-item style-two wow fadeInUp delay-0-4s"
                style={{
                  backgroundImage:
                    "url(assets/images/offers/offer-banner-bg6.jpg)",
                }}
              >
                <div className="content mb-0">
                  <span className="sub-title">100% Fresh</span>
                  <h3>Organic Fruits</h3>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-three">
                      Купить <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Offer Banners End */}
      {/* Product Category Area Start */}
      <section className="product-category-area pb-30">
        <div className="container-fluid">
          <div className="product-category-inner">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="https://raw.githubusercontent.com/Alen44141/images/main/PhotoOtdelRemoveBack/ovochi_i_frukti.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/product-details">Овощи и фрукты</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-3s">
                  <div className="image">
                    <img
                      src="https://raw.githubusercontent.com/Alen44141/images/main/PhotoOtdelRemoveBack/pryanosti.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/shop-specii">Чаи и Пряности </Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-4s">
                  <div className="image">
                    <img
                      src="https://raw.githubusercontent.com/Alen44141/images/main/PhotoOtdelRemoveBack/suxofrukti%20HD.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/product-details">Сухофрукты</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-5s">
                  <div className="image">
                    <img
                      src="https://raw.githubusercontent.com/Alen44141/images/main/PhotoOtdelRemoveBack/kolbas.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/product-details">Мясной Отдел</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-6s">
                  <div className="image">
                    <img
                      src="https://raw.githubusercontent.com/Alen44141/images/main/PhotoOtdelRemoveBack/riba.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/product-details">Рыбный Отдел</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-6s">
                  <div className="image">
                    <img
                      src="https://raw.githubusercontent.com/Alen44141/images/main/PhotoOtdelRemoveBack/moloko.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/product-details">Молочный Отдел</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-7s">
                  <div className="image">
                    <img
                      src="https://raw.githubusercontent.com/Alen44141/images/main/PhotoOtdelRemoveBack/soleni.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/product-details">Солени Отдел</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section-three rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-three-content rmb-65 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-50">
                  <h2>Способы получения продуктов</h2>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-wheat-sack" />
                      </div>
                      <h4>
                        <Link href="/service-details">
                          Доставка
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-fruits" />
                      </div>
                      <h4>
                        <Link href="/service-details">
                          Самовызов
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
                <p>

                У вас есть два удобных способа получить заказ с продуктами: доставка, когда товары привезут прямо к вам домой, или самовывоз, когда вы можете забрать их самостоятельно из указанного места. Вне зависимости от выбранного варианта, мы гарантируем быструю и надежную обработку вашего заказа.
                  Вы можете выбрать доставку, если вам удобнее, чтобы все было привезено прямо к вашему дверному проему. Или же выбрать самовывоз, если вам интереснее забрать свои продукты самостоятельно. В любом случае, мы готовы подстроиться под ваши предпочтения и обеспечить удобный и беззаботный процесс получения вашего заказа.
						{" "}
                </p>
                <div className="about-btn-number pt-5">
                  <Link href="/about">
                    <a className="theme-btn style-two">
                      Watsapp <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <a href="callto:+7 (925) 336‑69‑69" class="number">
							<i class="far fa-phone"></i>
							<b>+7 (925) 336‑69‑69</b>
						</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-lg-right">
              <div>
                <img
                  className="image"
                  src="https://raw.githubusercontent.com/Alen44141/images/main/Default_With_its_clean_lines_and_transparent_material_this_bag_1_5d55df6f-698a-4dae-8cbd-15d4e31b9d3a_0.png"
                  alt="About"
                />
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Product Category Area End */}
      {/* Shop Area Start */}

      <section className="shop-area-three rel z-1 py-50">
        <div className="container-fluid">
          <PopularProducts />
        </div>
      </section>
      <section className="news-section pt-130 rpt-100 pb-70 rpb-40">
        <div className="container">
          <div className="section-title text-center mb-60">
            {/* <span className="sub-title mb-20">Read Article Tips</span> */}
            <h2>Новостной блог</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="https://mir-cdn.behance.net/v1/rendition/project_modules/max_1200/628329158545767.638defc99feed.jpg" alt="News" />
                  <span className="date">
                    <b>31</b> Дек
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Vegetable</span>
                  <h4>
                    <Link href="/blog-details">
                      Unicode UTF8 Character Sets They Sltimate Guide Systems
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="https://mir-cdn.behance.net/v1/rendition/project_modules/max_1200/628329158545767.638defc99feed.jpg" alt="News" />
                  <span className="date">
                    <b>31</b> Дек
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Vegetable</span>
                  <h4>
                    <Link href="/blog-details">
                      Unicode UTF8 Character Sets They Sltimate Guide Systems
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="https://mir-cdn.behance.net/v1/rendition/project_modules/max_1200/628329158545767.638defc99feed.jpg" alt="News" />
                  <span className="date">
                    <b>31</b> Дек
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Vegetable</span>
                  <h4>
                    <Link href="/blog-details">
                      Unicode UTF8 Character Sets They Sltimate Guide Systems
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="news-shapes">
          <img
            className="onion"
            src="assets/images/shapes/onion.png"
            alt="Onion"
          />
          <img
            className="two-leaf"
            src="assets/images/slider/two-lear.png"
            alt="Leaf"
          />
          <img
            className="half-leaf"
            src="assets/images/slider/half-leaf.png"
            alt="Leaf"
          />
          <img
            className="leaf-two"
            src="assets/images/shapes/leaf-three.png"
            alt="Leaf"
          />
          <img
            className="leaf-three"
            src="assets/images/shapes/leaf-four.png"
            alt="Leaf"
          />
        </div>
      </section>

      {/* Shop Area End */}
      {/* Special Offer Start */}
      {/* <section className="gallery-area-two pt-130 rpt-60">
        <PhotoGallery />
      </section> */}



      {/* Special Offer End */}
      {/* Shop Area Start */}
      <section className="shop-area-four rel z-1 pt-80 pb-50">
        <div className="container-fluid">
          <TrendyProducts />
        </div>
      </section>
      {/* Shop Area End */}
      {/* Client Logo Area Start */}
      {/* <div className="client-logo-area-two text-center mb-80">
        <div className="container-fluid">
          <div className="bg-lighter-two overflow-hidden rel z-1 px-sm-4 px-2">
            <Slider {...clientLogo} className="client-logo-wrap py-60">
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-1.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-2.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-3.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-4.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-5.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-6.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-1.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-2.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-3.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-4.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-5.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-6.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
            </Slider>
            <div className="client-logo-shapes">
              <img
                className="shape-one"
                src="assets/images/shapes/cl-shape-two1.png"
                alt="Shape"
              />
              <img
                className="shape-two"
                src="assets/images/shapes/cl-shape-two2.png"
                alt="Shape"
              />
              <img
                className="shape-three"
                src="assets/images/shapes/cl-shape-two3.png"
                alt="Shape"
              />
              <img
                className="shape-four"
                src="assets/images/shapes/cl-shape-two4.png"
                alt="Shape"
              />
              <img
                className="shape-five"
                src="assets/images/shapes/cl-shape-two5.png"
                alt="Shape"
              />
              <img
                className="shape-six"
                src="assets/images/shapes/cl-shape-two6.png"
                alt="Shape"
              />
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
};

export default Index3;
