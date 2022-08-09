import NavComponent from "../../Components/NavComponent/NavComponent";
import ProfileComponent from "../../Components/ProfileComponent/ProfileComponent";
import "./HomePage.css";
import BannerComponent from "../../Components/BannerComponent/BannerComponent";
import BmiComponent from "../../Components/BmiComponent/BmiComponent";
import RankingComponent from "../../Components/RankingComponent/RankingComponent";
import RunDiaryHomeComponent from "../../Components/RunDiaryHomeComponent/RunDiaryHomeComponent";
import TableComponent from "../../Components/TableComponent/TableComponent";

import {DataContext} from '../../App'
import {useContext} from 'react'


function HomePage() {
const context = useContext(DataContext)
const {data} = context
  return (
    <>
      <div className="homepage-container">
        <NavComponent />
        <div className="home-content">
          <div className="home-dashboard">
            <div className="home-user">
              <div className="home-profile">
                <ProfileComponent
                  personalData={{
                    user: data.user,
                    bio: data.bio,
                    rundiary: data.rundiary,
                  }}
                />
              </div>
              <div className="home-run-diary">
                <RunDiaryHomeComponent rundiary={data.rundiary}/>
              </div>
            </div>

            <div className="home-tools">
              <div className="home-bmi">
                <BmiComponent />
              </div>
              <div className="home-table">
                <TableComponent />
              </div>
            </div>
          </div>
          <div className="home-banner">
            <div className="home-banner-news">
              <BannerComponent />
            </div>
            <div className="home-ranking">
              <RankingComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
