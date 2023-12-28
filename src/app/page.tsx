import ThemeSwitcher from "@/components/header/ThemeSwitcher";
import Presentation from "@/components/home/section-presentation/Presentation";

export default function Home() {
  return (
    <div className="min-h-screen font-mono w-[85%] flex flex-col items-center gap-10     border border-cyan-600">
      {/* <Card /> */}
      <Presentation />
      <div className="h-10 w-10 bg-red-700"></div>
      <div className="h-10 w-10 bg-red-800"></div>
      <div className="h-10 w-10 bg-red-900"></div>
    </div>
  );
}

const Card = () => {
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};
