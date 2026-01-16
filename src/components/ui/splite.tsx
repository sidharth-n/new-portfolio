"use client"

import { Suspense, lazy } from "react"
const Spline = lazy(() => import("@splinetool/react-spline"))

interface SplineSceneProps {
  scene: string
  className?: string
  width?: string
  height?: string
}

export function SplineScene({ scene, className, width, height }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline 
        scene={scene} 
        className={className}
        style={{ 
          width: width || '100%', 
          height: height || '100%',
        }}
      />
    </Suspense>
  )
}
