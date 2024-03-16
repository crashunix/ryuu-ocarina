"use client"

import Spline from "@splinetool/react-spline";

type Render3DProps = {
    scene: string
}

const Render3D = ({ scene }: Render3DProps) => {
    return (
        <Spline scene={scene} />
    )
}

export default Render3D;