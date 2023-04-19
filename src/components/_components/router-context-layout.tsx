'use client';

import {
    useSelectedLayoutSegment,
    useSelectedLayoutSegments,
} from 'next/navigation';

export function LayoutHooks () {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const selectedLayoutSegments = useSelectedLayoutSegments();

    return selectedLayoutSegment ? (

        <div className="overflow-x-auto text-sm text-white [color-scheme:dark]">
            <pre>
                { JSON.stringify(
                    {
                        useSelectedLayoutSegment: selectedLayoutSegment,
                        useSelectedLayoutSegments: selectedLayoutSegments,
                    },
                    null,
                    2,
                ) }
            </pre>
        </div>

    ) : null;
}
