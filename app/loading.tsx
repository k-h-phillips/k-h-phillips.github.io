import {Progress} from "@nextui-org/react";
import React from 'react';

export default function Loading() {
    return ( 
        <div className="flex flex-col items-center gap-3">
            <Progress
                size="lg"
                isIndeterminate
                aria-label="Loading..."
                color="primary"
                className="w-52"
            />
            <p className="text-2xl">just a sec...</p>
        </div>
    );
}