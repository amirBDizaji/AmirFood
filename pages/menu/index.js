import MenuPage from "@/components/templates/MenuPage";

function Menu({ data }) {
  return <MenuPage data={data} />;
}

export default Menu;

export async function getStaticProps() {
  const res = await fetch("https://amir-food-api.vercel.app/data");
  const data = await res.json();
  return {
    props: { data },
    revalidate: 10, //seconds
  };
}
