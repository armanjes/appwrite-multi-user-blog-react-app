import { Container, Feature } from "../components";
import rafiki from "../assets/rafiki.svg"

export default function Home() {
  return (
    <Container>
      <section className="flex flex-col items-center text-sm my-16 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-with-grid.png')] bg-cover bg-center bg-no-repeat">
        <main className="flex flex-col items-center max-md:px-2">
          <h1 className="text-center text-5xl leading-[68px] md:text-6xl md:leading-[80px] font-semibold max-w-4xl text-slate-900">
            Start Writing Like a Champion
          </h1>
          <p className="text-center text-base text-slate-700 max-w-lg mt-2">
            Create, publish, and manage your blogs effortlessly with BlogChamp.
            <span className="px-3 py-1 rounded-md text-indigo-600 bg-white mx-2 font-medium text-sm text-white bg-gradient-to-r from-blue-700 to-blue-500">
              Join BlogCamp
            </span>
            and connect with readers who care about your ideas.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <button className="flex items-center gap-2 bg-blue-200 text-blue-600 active:scale-95 rounded-lg px-7 h-11">
              Get started
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.166 10h11.667m0 0L9.999 4.165m5.834 5.833-5.834 5.834"
                  stroke="#155dfc"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <img
            src={rafiki}
            className="w-full rounded-[15px] max-w-4xl mt-4"
            alt="hero section showcase"
          />
        </main>
      </section>
      <Feature />
    </Container>
  );
}
