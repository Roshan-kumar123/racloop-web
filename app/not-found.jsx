import Link from "next/link";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

export const metadata = {
  title: "Not Found || React Personal Portfolio Template",
};
const NotFound = () => {
  return (
    <>
      <section className="error-page-wrapper">
        <div className="container">
          <div className="row justify-content-center full-screen align-items-center">
            <div className="col-lg-8 text-center">
              <div className="inner">
                <h1 className="display-3 white-color m-15px-b">
                  404 - Page Not Found..
                </h1>
                <p className="h4">
                  Whoops, it looks like the page you request wasn't found.
                </p>
                <div className="m-30px-tb">
                  <Image
                    width="1024"
                    height="538"
                    src="/img/404-page.svg"
                    alt="page not found"
                  />
                </div>
                <div className="btn-bar mt-4">
                  <Link className="px-btn px-btn-theme" href="/">
                    BACK TO HOME
                  </Link>
                  {/* End purchase_button */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Error Page Wrapper */}

      {/* Footer */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/* End footer */}
    </>
  );
};

export default NotFound;
