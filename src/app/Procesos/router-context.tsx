"use client";

import {
    useParams,
    usePathname,
    useSearchParams,
    useSelectedLayoutSegment,
    useSelectedLayoutSegments,
} from "next/navigation";
import box from "#@/styles/css/box.module.css";

export function HooksClient() {
    const pathname = usePathname();
    const params = useParams();
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const selectedLayoutSegments = useSelectedLayoutSegments();
    const searchParams = useSearchParams();

    return (
        <div className={box.container}>
            <pre>
                {JSON.stringify(
                    {
                        usePathname: pathname,
                        useParams: params,
                        useSearchParams: searchParams
                            ? Object.fromEntries(searchParams.entries())
                            : {},
                        useSelectedLayoutSegment: selectedLayoutSegment,
                        useSelectedLayoutSegments: selectedLayoutSegments,
                    },
                    null,
                    2
                )}
            </pre>
        </div>
    );
}
