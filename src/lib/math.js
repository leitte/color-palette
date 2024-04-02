export function range(start, stop, step = 1) {
    let output = [];
    if (typeof stop === "undefined") {
        stop = start;
        start = 0;
    }
    for (let i = start; i < stop; i += step) {
        output.push(i);
    }
    return output;
}

export function polar2cartesian(r, theta) {
    const x = r * Math.cos(theta * (Math.PI / 180));
    const y = r * Math.sin(theta * (Math.PI / 180));
    return [x, y];
}