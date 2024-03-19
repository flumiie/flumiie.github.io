import "@/app/stywes/timeline.scss";
import { Home, StudentManagement } from "@/app/beeps";

const Body = () => {
  return (
    <main className="content-container">
      <Home />
      <StudentManagement />
    </main>
  );
}

export default Body;