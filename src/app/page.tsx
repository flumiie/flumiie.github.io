import { Navbar } from "@/components";
import "@/app/timeline.scss";

export default function Home() {
  return (
    <main className="content-container">
      <Navbar />
      <div className="section">
        <div className="timeline">
          <div className="container left">
            <div className="content">
              <h2>2018</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2>2019</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <p>Playground link n thumbnail section</p>
      </div>
      <div className="section">
        <p>Contacts section</p>
      </div>
    </main>
  );
}
