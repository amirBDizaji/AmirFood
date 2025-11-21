import DetailsPage from "@/components/templates/DetailsPage";
import { useRouter } from "next/router";

function Details({ data }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>Loading page...</h2>;
  }
  return <DetailsPage {...data} />;
}

export default Details;

export async function getStaticPaths() {
  const res = await fetch("https://amir-food-api.vercel.app/data");
  const json = await res.json();
  const data = json.slice(0, 10);
  const paths = data.map((food) => ({ params: { id: food.id.toString() } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`https://amir-food-api.vercel.app/data/${params.id}`);
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: data || null },
    revalidate: 10,
  };
}
