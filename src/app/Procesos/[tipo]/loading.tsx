import { SkeletonActuacion } from '#@/components/skeleton-actuacion';
import box from '#@/styles/scss/box.module.scss';
import typeface from '#@/styles/css/typeface.module.css';
import { poiret } from '../../../components/typeface';
export default function Loading() {
    return (
        <div className={box.container}>
            <h1 className={poiret.className}>Loading...</h1>

            <div className={box.grid}>
                <SkeletonActuacion isLoading={true} />
                <SkeletonActuacion isLoading={true} />
                <SkeletonActuacion isLoading={true} />
                <SkeletonActuacion isLoading={true} />
                <SkeletonActuacion isLoading={true} />
                <SkeletonActuacion isLoading={true} />
            </div>
        </div>
    );
}
