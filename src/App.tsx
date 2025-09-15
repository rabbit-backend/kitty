import { Header } from "@/components/Header";
import { ToolBox } from "@/components/ToolBox";
import Map from "react-map-gl/maplibre";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="h-[var(--container-height)] overflow-hidden flex">
        <ToolBox />
        <div className="flex-1 h-full">
          <Map
            initialViewState={{
              longitude: 78.50963373936867,
              latitude: 17.400826673979253,
              zoom: 10,
            }}
            style={{ width: "100%", height: "100%" }}
            mapStyle={"https://tiles.openfreemap.org/styles/liberty"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
