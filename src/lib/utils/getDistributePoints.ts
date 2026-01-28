export const getDistributePoints = (count: number, radius: number = 1) => {
    const points = [];
    const angleStep = (2 * Math.PI) / count;
    
    const startAngle = -Math.PI / 3;
    
    for (let i = 0; i < count; i++) {
        const angle = i * angleStep + startAngle;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        points.push({ x, y });
    }
    
    return points;
}