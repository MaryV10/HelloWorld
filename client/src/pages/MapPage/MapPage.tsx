import Loader from "@/shared/Loader/Loader"

import React, { Suspense } from "react";


const LazyMapList = React.lazy(() => import('@/widgets/MapList/MapList'));
function MapPage() {
  return (
   <>
   <Suspense fallback={<Loader />}>
   <LazyMapList />
   </Suspense>
   </>
  )
}

export default MapPage