import Render3D from '@/components/Render3D'
import { ThreeD } from '@/types/ThreeD'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <div className="w-screen h-[100dvh]">
        <Render3D scene={ThreeD.NOTFOUND} />
      </div>
    </div>
  )
}