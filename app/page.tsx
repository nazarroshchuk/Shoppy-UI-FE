import getMe from "@/api/get-me";

export default async function Home() {

    const me =  await getMe()
    console.log({me})
  return (
      <div>

      </div>
  );
}
