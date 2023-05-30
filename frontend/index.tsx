import { useContext } from "react";
import { Routes } from "../../components/common/routes";
import AuthLayout from "../../components/layout/authLayout";
import { Titles } from "../../components/layout/title";
import InnerHeading from "../../components/subComponent/innerHeading";
import { LinkTag } from "../../components/subComponent/linkTag";
import { UserContext } from "../../context";
import styles from "../../styles/partnere.module.scss";
const Partners = () => {
  const { userData } = useContext(UserContext);
  return (
    <AuthLayout title={Titles.Partners.Top_Heading}>
      <InnerHeading heading_name="Partners" />
      <div
        className={`container-fluid bg-white mt-3 ${styles.partnerContainer}`}
      >
        <h2 className="text-center py-4">eXp Realty </h2>
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="text-justify">
              Ambiview is an eXp Solution and Trusted Provider. We are an elite
              real estate continuing education platform built for eXp
              professionals. Experience continuing education courses that are
              engaging, back and forth podcast conversations with industry
              experts. Like YouTube, you can stream CE courses through on demand
              video; or like Spotify, you can listen to CE courses alongside
              your favorite podcast. Ambiview offers unmatched versatility and
              delivers content through a native iOS app, Android app or web
              platform. Enjoy maximum flexibility, immersive engagement and true
              mobility on the go.
            </p>
            <ul className="mt-3">
              <li>Stream Continuing Education Courses</li>
              <li>Create Custom Course Packages: </li>
              <li>Experience a Modern Delivery Platform</li>
              <li>Download Multistate Certificates</li>
            </ul>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <div className={`${styles.imgSection}`}>
              <img src="/image/expSolution.jpeg" alt="Img" />
            </div>
          </div>
          <div className="col-12  ">
            <h3 className="text-center">Ready to Get Started?</h3>
            <div className={`${styles.buttonArea}`}>
              <LinkTag
                href={Routes.All.course.href}
                as={Routes.All.course.as}
                linktag_name="Browse Courses"
                children=""
                classname={``}
              />
              <LinkTag
                href={Routes.State.default.href}
                as={Routes.State.default.href}
                linktag_name="Choose State"
                children=""
                classname={``}
              />
              <LinkTag
                href={Routes.About.href}
                as={Routes.About.href}
                linktag_name="About Ambiview"
                children=""
                classname={``}
              />
             {!userData &&  <LinkTag
                href={Routes.Auth.signup.href}
                as={Routes.Auth.signup.href}
                linktag_name="Sign Up"
                children=""
                classname={styles.signupBtn}
              />}
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
export default Partners;
