import { Header } from "../../components/Header";
import newsData from "../../json/news.json";
import Image from "next/image";

export default function Post({ news, data }) {
  return (
    <>
      <div className="container mx-auto max-w-screen-xl p-10">
        <Image
          src={news.illustrative_photo}
          width={1920}
          height={1080}
          alt={news.title}
          quality={100}
          style={{ width: "100%", height: "auto" }}
          priority={false}
          loading="lazy"
        />
        <h1 className="font-black my-5 text-5xl">{news.title}</h1>
        <small>{news.date}</small>
        <p> {news.news_text}</p>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  const news = newsData.find((newsItem) => newsItem.id === parseInt(id));

  return {
    props: {
      news,
    },
  };
}
