"use client";

import { TypeAnimation } from "react-type-animation";

export function IndexInfo() {
    return (
        <TypeAnimation sequence={[
            'I',
            100,
            'I am',
            100,
            'I am a',
            100,
            'I am a backend',
            100,
            'I am a backend development',
            100,
            'I am a backend development engineer.',
            100,
            '',
            100
        ]} style={{ fontSize: '2em' }} repeat={Infinity} />
    );
}