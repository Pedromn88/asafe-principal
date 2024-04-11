import newsData from "../../json/news.json";
import { CardNews } from "../CardNews";

export const News = ({}) => {
  return (
    <>
      <div id="news-card">
        {" "}
        <div className="text-center">
          <h1 className="font-black my-5 text-5xl"> NEWS </h1>
        </div>
        <div className="flex items-center justify-center flex-wrap">
          {newsData &&
            newsData.map((data, i) => {
              return <CardNews data={data} />;
            })}
        </div>
      </div>
    </>
  );
};
