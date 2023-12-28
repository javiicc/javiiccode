import "@styles/app/loading.css";

// General loading
export default function Loading() {
  return (
    <div className="center-loading">
      <div className="ring"> </div>
      <span>loading...</span>
    </div>
  );
}
