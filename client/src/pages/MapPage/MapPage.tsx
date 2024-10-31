import Loader from "@/shared/Loader/Loader"

import React, { Suspense} from "react";


const LazyMapList = React.lazy(() => import('@/widgets/MapList/MapList'));
function MapPage() {
  return (
    <>
    <div style={{position: "fixed", width: "100%", height: "100%"}}>
      <Suspense fallback={<Loader />}>
        <LazyMapList />
      </Suspense>
      </div>
    </>
  );
}

export default MapPage