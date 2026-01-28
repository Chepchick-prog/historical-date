import { useCallback, useEffect, useState } from "react"

export const useElementSize = () => {
    const [size, setSize]  = useState({width: 0, height: 0});
    const [element, setElement] = useState<HTMLDivElement | null>(null);

    const ref = useCallback((node: HTMLDivElement) => {
        if(node !== null) {
            setElement(node)
        }
    }, [])

    useEffect(() => {
        if(!element) return;

        const updateSize = () => {
            const rect = element.getBoundingClientRect()
            setSize({width: rect.width, height: rect.height})
        }

        updateSize();

        const observer = new ResizeObserver(updateSize)
        observer.observe(element)

        return () => {
            observer.disconnect();
        }
    }, [element])

    return {ref, size};
}