"use client";

import {
    useSelectedLayoutSegment,
    useSelectedLayoutSegments,
} from "next/navigation";
import box from "#@/styles/css/box.module.css";

export function LayoutHooks() {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const selectedLayoutSegments = useSelectedLayoutSegments();

    return selectedLayoutSegment ? (
        <div className={box.container}>
            <pre>
                {JSON.stringify(
                    {
                        useSelectedLayoutSegment: selectedLayoutSegment,
                        useSelectedLayoutSegments: selectedLayoutSegments,
                    },
                    null,
                    2
                )}
            </pre>
        </div>
    ) : null;
}
