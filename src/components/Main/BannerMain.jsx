import React from "react";
import { useLocation, Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
// Using online placeholder image
const backgroundImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

// Define the breadcrumb routes for Evanam
const routes = [
  { path: '/', breadcrumb: 'Home' },
  { path: '/about-us', breadcrumb: 'About Us' },
  { path: '/what-we-do', breadcrumb: 'What We Do' },
  { path: '/badges-of-trust', breadcrumb: 'Badges of Trust' },
  { path: '/services', breadcrumb: 'Services' },
  { path: '/hire-our-pod', breadcrumb: 'Hire Our Pod' },
  { path: '/available-pods', breadcrumb: 'Available Pods' },
  { path: '/blog', breadcrumb: 'Blog' },
  { path: '/faq', breadcrumb: 'FAQ' },
  { path: '/contact-us', breadcrumb: 'Contact Us' },
  { path: '/privacy-policy', breadcrumb: 'Privacy Policy' },
];

const BannerMain = () => {
  const location = useLocation();
  const breadcrumbs = useBreadcrumbs(routes);

  // Get the current breadcrumb to set the title
  const currentBreadcrumb = breadcrumbs[breadcrumbs.length - 1]?.breadcrumb;

  return (
    <div className="relative flex items-center justify-center text-white h-96 bg-gray-800">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-60 p-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-roboto font-bold mb-4 text-center">
          {currentBreadcrumb || 'Default Title'}
        </h1>
        <p className="text-md text-center mb-4 max-w-2xl">
          We design and automate your sales, marketing, and core operations, delivering end-to-end digital transformation powered by AI.
        </p>
        <nav className="breadcrumbs text-sm text-center">
          <hr className="w-full mb-2 border-gray-400"></hr>
          {breadcrumbs.map(({ match, breadcrumb }) => (
            <span key={match.pathname} className="inline-block">
              <Link
                to={match.pathname}
                className="text-white hover:text-PrimaryColor transition duration-300 ease-in-out"
              >
                {breadcrumb}
              </Link>
              {match.pathname !== location.pathname && (
                <span className="px-2 text-gray-400"> &gt; </span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default BannerMain;
